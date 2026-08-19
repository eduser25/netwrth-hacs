"""Websocket commands the netboi Lovelace cards call.

Chart data flows through here (never through recorded entities), so real
amounts revealed via PIN don't end up in HA's state history.
"""

from __future__ import annotations

import time
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .api import NetboiError, NetboiPinError
from .const import (
    DEFAULT_REVEAL_TTL_MINUTES,
    DOMAIN,
    OPT_REVEAL_TTL,
    RANGES,
    SCOPE_READ_FULL,
)

# Multiple cards share fetches: per (entry, range) series cache, short-lived.
SERIES_CACHE_SECONDS = 55
_series_cache: dict[tuple[str, str], tuple[float, Any]] = {}


def _runtime(hass: HomeAssistant, entry_id: str | None):
    data = hass.data.get(DOMAIN, {})
    if entry_id:
        return data.get(entry_id)
    for value in data.values():
        if hasattr(value, "coordinator"):
            return value
    return None


def _invalidate_cache(entry_id: str) -> None:
    for key in [k for k in _series_cache if k[0] == entry_id]:
        _series_cache.pop(key, None)


@callback
def async_register_websocket(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_entries)
    websocket_api.async_register_command(hass, ws_overview)
    websocket_api.async_register_command(hass, ws_series)
    websocket_api.async_register_command(hass, ws_reveal)
    websocket_api.async_register_command(hass, ws_conceal)


@websocket_api.websocket_command({vol.Required("type"): "netboi/entries"})
@callback
def ws_entries(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Configured netboi entries, for card editors and entry resolution."""
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
        vol.Required("type"): "netboi/overview",
        vol.Optional("entry_id"): str,
    }
)
@callback
def ws_overview(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Everything a card needs except series: key state + accounts."""
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None or rt.coordinator.data is None:
        connection.send_error(msg["id"], "not_found", "no netboi entry available")
        return
    data = rt.coordinator.data
    me = dict(data.me)
    me["can_reveal"] = me.get("scope") == SCOPE_READ_FULL
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
        vol.Required("type"): "netboi/series",
        vol.Optional("entry_id"): str,
        vol.Optional("range", default="all"): vol.In(RANGES),
    }
)
@websocket_api.async_response
async def ws_series(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netboi entry available")
        return
    entry_id = rt.coordinator.entry.entry_id
    key = (entry_id, msg["range"])
    cached = _series_cache.get(key)
    if cached and time.monotonic() - cached[0] < SERIES_CACHE_SECONDS:
        connection.send_result(msg["id"], cached[1])
        return
    try:
        series = await rt.client.series(msg["range"])
    except NetboiError as err:
        connection.send_error(msg["id"], "netboi_error", str(err))
        return
    result = {"series": series, "censored": rt.coordinator.data.censored if rt.coordinator.data else True}
    _series_cache[key] = (time.monotonic(), result)
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netboi/reveal",
        vol.Optional("entry_id"): str,
        vol.Required("code"): str,
        vol.Optional("ttl_minutes"): vol.All(vol.Coerce(int), vol.Range(min=0, max=43200)),
    }
)
@websocket_api.async_response
async def ws_reveal(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netboi entry available")
        return
    ttl_minutes = msg.get(
        "ttl_minutes",
        rt.coordinator.entry.options.get(OPT_REVEAL_TTL, DEFAULT_REVEAL_TTL_MINUTES),
    )
    try:
        out = await rt.client.reveal(msg["code"], ttl_minutes * 60)
    except NetboiPinError as err:
        # Wrong PIN / backoff / censored-only scope: a result, not a fault.
        connection.send_result(msg["id"], {"ok": False, "error": str(err), "status": err.status})
        return
    except NetboiError as err:
        connection.send_error(msg["id"], "netboi_error", str(err))
        return
    _invalidate_cache(rt.coordinator.entry.entry_id)
    await rt.coordinator.async_request_refresh()
    connection.send_result(msg["id"], {"ok": True, **out})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "netboi/conceal",
        vol.Optional("entry_id"): str,
    }
)
@websocket_api.async_response
async def ws_conceal(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    rt = _runtime(hass, msg.get("entry_id"))
    if rt is None:
        connection.send_error(msg["id"], "not_found", "no netboi entry available")
        return
    try:
        out = await rt.client.conceal()
    except NetboiError as err:
        connection.send_error(msg["id"], "netboi_error", str(err))
        return
    _invalidate_cache(rt.coordinator.entry.entry_id)
    await rt.coordinator.async_request_refresh()
    connection.send_result(msg["id"], {"ok": True, **out})
