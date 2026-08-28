"""Websocket commands the netwrth Lovelace cards call.

Chart data flows through here (never through recorded entities), so real
amounts revealed via PIN don't end up in HA's state history.
"""

from __future__ import annotations

import time
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.util import dt as dt_util

from .api import NetwrthError, NetwrthPinError
from .const import (
    DEFAULT_REVEAL_TTL_MINUTES,
    DOMAIN,
    OPT_REVEAL_TTL,
    RANGES,
    SCOPE_READ_FULL,
)

# Multiple cards share fetches: per (entry, request-shape) cache, short-lived.
# Entries store their expiry deadline directly, capped at the key's reveal
# expiry so revealed data is never served from cache past the window.
CACHE_SECONDS = 55
_data_cache: dict[tuple, tuple[float, Any]] = {}


def _runtime(hass: HomeAssistant, entry_id: str | None):
    data = hass.data.get(DOMAIN, {})
    if entry_id:
        return data.get(entry_id)
    for value in data.values():
        if hasattr(value, "coordinator"):
            return value
    return None


def _invalidate_cache(entry_id: str) -> None:
    for key in [k for k in _data_cache if k[0] == entry_id]:
        _data_cache.pop(key, None)


def _cache_put(rt, key: tuple, result: Any) -> None:
    """Cache a response, never past the key's reveal-window expiry."""
    valid_until = time.monotonic() + CACHE_SECONDS
    data = rt.coordinator.data
    exp = data.reveal_expires_at() if data else None
    if exp is not None:
        remaining = (exp - dt_util.utcnow()).total_seconds()
        if remaining > 0:
            valid_until = min(valid_until, time.monotonic() + remaining)
    _data_cache[key] = (valid_until, result)


def _cache_get(key: tuple) -> Any | None:
    cached = _data_cache.get(key)
    if cached and time.monotonic() < cached[0]:
        return cached[1]
    return None


@callback
def async_register_websocket(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_entries)
    websocket_api.async_register_command(hass, ws_overview)
    websocket_api.async_register_command(hass, ws_series)
    websocket_api.async_register_command(hass, ws_spending_summary)
    websocket_api.async_register_command(hass, ws_spending_recurring)
    websocket_api.async_register_command(hass, ws_spending_transactions)
    websocket_api.async_register_command(hass, ws_reveal)
    websocket_api.async_register_command(hass, ws_conceal)


@websocket_api.websocket_command({vol.Required("type"): "netwrth/entries"})
@callback
def ws_entries(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Configured netwrth entries, for card editors and entry resolution."""
    out = []
    for entry_id, rt in hass.data.get(DOMAIN, {}).items():
        if not hasattr(rt, "coordinator"):
            continue
        data = rt.coordinator.data
        out.append(
            {
                "entry_id": entry_id,
                "title": rt.coordinator.entry.title,
                "scope": data.me.get("scope") if data else None,
            }
        )
    connection.send_result(msg["id"], out)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/overview",
        vol.Optional("entry_id"): str,
    }
)
@callback
def ws_overview(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Everything a card needs except series: key state + accounts."""
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None or rt.coordinator.data is None:
        connection.send_error(msg["id"], "not_found", "no netwrth entry available")
        return
    data = rt.coordinator.data
    me = dict(data.me)
    me["can_reveal"] = me.get("scope") == SCOPE_READ_FULL
    # The coordinator snapshot may predate the reveal window's expiry; report
    # the state as of now.
    if data.censored_now():
        me["censored"] = True
        me["revealed"] = False
        me["reveal_expires"] = None
    connection.send_result(
        msg["id"],
        {
            "entry_id": rt.coordinator.entry.entry_id,
            "me": me,
            "accounts": data.accounts,
            "currency": rt.coordinator.currency,
            "default_reveal_ttl_minutes": rt.coordinator.entry.options.get(
                OPT_REVEAL_TTL, DEFAULT_REVEAL_TTL_MINUTES
            ),
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/series",
        vol.Optional("entry_id"): str,
        vol.Optional("range", default="all"): vol.In(RANGES),
    }
)
@websocket_api.async_response
async def ws_series(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netwrth entry available")
        return
    entry_id = rt.coordinator.entry.entry_id
    key = (entry_id, "series", msg["range"])
    cached = _cache_get(key)
    if cached is not None:
        connection.send_result(msg["id"], cached)
        return
    try:
        out = await rt.client.series(msg["range"])
    except NetwrthError as err:
        connection.send_error(msg["id"], "netwrth_error", str(err))
        return
    data = rt.coordinator.data
    # Prefer the flag the backend stamped into this very response; older
    # backends without it fall back to the coordinator snapshot.
    censored = out.get("censored")
    if censored is None:
        censored = data.censored_now() if data else True
    result = {"series": out.get("series", []), "censored": censored}
    _cache_put(rt, key, result)
    connection.send_result(msg["id"], result)


# Spending payloads pass through as the backend shaped them (amounts already
# censor-scaled per the key's scope). A 404 means the spending feature is off
# for the key's netwrth account — answered with a distinct error code so
# cards can say so instead of showing a generic failure.
MONTH_RE = r"^[0-9]{4}-[0-9]{2}\Z"

# Mirrors backend/internal/spend.Themes; validated here so an arbitrary
# string never rides a websocket message into a backend query param.
SPEND_THEMES = (
    "groceries", "dining", "shopping", "subscriptions", "utilities",
    "housing", "transport", "travel", "health", "leisure", "fees",
    "payments", "income", "transfers", "debt", "other",
)


async def _spending(hass, connection, msg, kind: str, fetch) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netwrth entry available")
        return
    key = (rt.coordinator.entry.entry_id, kind, msg.get("month"), msg.get("theme"))
    cached = _cache_get(key)
    if cached is not None:
        connection.send_result(msg["id"], cached)
        return
    try:
        out = await fetch(rt.client)
    except NetwrthError as err:
        if getattr(err, "status", None) == 404:
            connection.send_error(
                msg["id"], "not_enabled",
                "spending analysis is not enabled for this netwrth account",
            )
        else:
            connection.send_error(msg["id"], "netwrth_error", str(err))
        return
    _cache_put(rt, key, out)
    connection.send_result(msg["id"], out)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/spending_summary",
        vol.Optional("entry_id"): str,
        vol.Optional("month"): vol.Match(MONTH_RE),
    }
)
@websocket_api.async_response
async def ws_spending_summary(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    await _spending(
        hass, connection, msg, "spend_summary",
        lambda c: c.spending_summary(msg.get("month")),
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/spending_recurring",
        vol.Optional("entry_id"): str,
        vol.Optional("month"): vol.Match(MONTH_RE),
    }
)
@websocket_api.async_response
async def ws_spending_recurring(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    await _spending(
        hass, connection, msg, "spend_recurring",
        lambda c: c.spending_recurring(msg.get("month")),
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/spending_transactions",
        vol.Optional("entry_id"): str,
        vol.Optional("month"): vol.Match(MONTH_RE),
        vol.Optional("theme"): vol.In(SPEND_THEMES),
    }
)
@websocket_api.async_response
async def ws_spending_transactions(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    await _spending(
        hass, connection, msg, "spend_txns",
        lambda c: c.spending_transactions(msg.get("month"), msg.get("theme")),
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/reveal",
        vol.Optional("entry_id"): str,
        vol.Required("code"): str,
        vol.Optional("ttl_minutes"): vol.All(vol.Coerce(int), vol.Range(min=0, max=43200)),
    }
)
@websocket_api.async_response
async def ws_reveal(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netwrth entry available")
        return
    ttl_minutes = msg.get(
        "ttl_minutes",
        rt.coordinator.entry.options.get(OPT_REVEAL_TTL, DEFAULT_REVEAL_TTL_MINUTES),
    )
    try:
        out = await rt.client.reveal(msg["code"], ttl_minutes * 60)
    except NetwrthPinError as err:
        # Wrong PIN / backoff / censored-only scope: a result, not a fault.
        connection.send_result(msg["id"], {"ok": False, "error": str(err), "status": err.status})
        return
    except NetwrthError as err:
        connection.send_error(msg["id"], "netwrth_error", str(err))
        return
    # The coordinator refresh detects the censor flip and fires
    # EVENT_CENSOR_CHANGED once fresh data is in place, so subscribed cards
    # never refetch into a stale snapshot.
    _invalidate_cache(rt.coordinator.entry.entry_id)
    # async_refresh bypasses the coordinator's request debouncer (10s
    # cooldown): a human just acted, so the flip event and fresh snapshot
    # must land now, not whenever the cooldown lapses.
    await rt.coordinator.async_refresh()
    connection.send_result(msg["id"], {"ok": True, **out})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netwrth/conceal",
        vol.Optional("entry_id"): str,
    }
)
@websocket_api.async_response
async def ws_conceal(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netwrth entry available")
        return
    try:
        out = await rt.client.conceal()
    except NetwrthError as err:
        connection.send_error(msg["id"], "netwrth_error", str(err))
        return
    _invalidate_cache(rt.coordinator.entry.entry_id)
    # async_refresh bypasses the coordinator's request debouncer (10s
    # cooldown): a human just acted, so the flip event and fresh snapshot
    # must land now, not whenever the cooldown lapses.
    await rt.coordinator.async_refresh()
    connection.send_result(msg["id"], {"ok": True, **out})
