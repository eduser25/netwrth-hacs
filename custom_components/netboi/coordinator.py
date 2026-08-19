"""Polling coordinator: one netboi snapshot shared by sensors and cards."""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.event import async_call_later
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed
from homeassistant.util import dt as dt_util

from .api import NetboiAuthError, NetboiClient, NetboiError
from .const import (
    DEFAULT_SCAN_INTERVAL_MINUTES,
    DOMAIN,
    OPT_SCAN_INTERVAL,
)

_LOGGER = logging.getLogger(__name__)

# Change windows the %-sensors report, as (suffix, days).
CHANGE_WINDOWS = (("1d", 1), ("1w", 7), ("1m", 30), ("1y", 365))

KINDS = ("cash", "investment", "credit", "loan", "other")


@dataclass
class NetboiData:
    """One coordinated snapshot of a netboi deployment."""

    me: dict[str, Any]
    accounts: list[dict[str, Any]]
    # Visible (non-hidden) accounts only; what sensors aggregate over.
    visible: list[dict[str, Any]] = field(default_factory=list)
    net_worth: float | None = None
    kind_totals: dict[str, float] = field(default_factory=dict)
    kind_shares: dict[str, float] = field(default_factory=dict)
    changes: dict[str, float | None] = field(default_factory=dict)
    newest_balance_at: datetime | None = None

    @property
    def censored(self) -> bool:
        return bool(self.me.get("censored", True))

    def reveal_expires_at(self) -> datetime | None:
        v = self.me.get("reveal_expires")
        return _parse_ts(v) if v else None

    def censored_now(self) -> bool:
        """Censor state at this instant: the server evaluates the reveal

        window lazily per request, so between polls we apply the expiry
        deadline it gave us instead of trusting a stale snapshot.
        """
        if self.censored:
            return True
        exp = self.reveal_expires_at()
        return exp is not None and exp <= dt_util.utcnow()


def _parse_ts(value: str) -> datetime | None:
    # dt_util handles RFC3339 with nanosecond fractions (Go's default wire
    # format), which datetime.fromisoformat does not.
    try:
        return dt_util.parse_datetime(value)
    except (ValueError, TypeError):
        return None


def _aligned_totals(series: list[dict[str, Any]]) -> list[tuple[datetime, float]]:
    """Total balance over time, forward-filling each account between points.

    Mirrors the web app's alignSeries: before an account's first snapshot its
    first known balance is backfilled, so onboarding reads as "always there".
    """
    parsed: list[list[tuple[datetime, float]]] = []
    timeline: set[datetime] = set()
    for s in series:
        pts = []
        for p in s.get("points", []):
            ts = _parse_ts(p.get("ts", ""))
            if ts is None:
                continue
            try:
                v = float(p.get("balance", "0"))
            except (TypeError, ValueError):
                continue
            pts.append((ts, v))
            timeline.add(ts)
        pts.sort()
        if pts:
            parsed.append(pts)
    ordered = sorted(timeline)
    totals = [0.0] * len(ordered)
    for pts in parsed:
        i = 0
        last = pts[0][1]
        for row, ts in enumerate(ordered):
            while i < len(pts) and pts[i][0] <= ts:
                last = pts[i][1]
                i += 1
            totals[row] += last
    return list(zip(ordered, totals))


def _changes(rows: list[tuple[datetime, float]]) -> dict[str, float | None]:
    """Percent change of total over each window. Censor-safe: the backend's

    censor scale is uniform across a response, so ratios are preserved.
    """
    out: dict[str, float | None] = {}
    if not rows:
        return {suffix: None for suffix, _ in CHANGE_WINDOWS}
    now = rows[-1][0]
    latest = rows[-1][1]
    for suffix, days in CHANGE_WINDOWS:
        cutoff = now - timedelta(days=days)
        base = None
        for ts, total in rows:
            if ts <= cutoff:
                base = total
            else:
                break
        if base is None:
            base = rows[0][1]  # window predates history: measure from the start
        out[suffix] = round((latest - base) / abs(base) * 100, 2) if base else None
    return out


class NetboiCoordinator(DataUpdateCoordinator[NetboiData]):
    """Fetches /api/me, /api/accounts and a 1y series each cycle."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry, client: NetboiClient) -> None:
        minutes = entry.options.get(OPT_SCAN_INTERVAL, DEFAULT_SCAN_INTERVAL_MINUTES)
        super().__init__(
            hass,
            _LOGGER,
            name=f"{DOMAIN} {entry.title}",
            update_interval=timedelta(minutes=minutes),
            config_entry=entry,
        )
        self.entry = entry
        self.client = client
        self._expiry_cancel = None

    async def _async_update_data(self) -> NetboiData:
        try:
            me = await self.client.me()
            accounts = await self.client.accounts()
            series = await self.client.series("1y")
        except NetboiAuthError as err:
            raise UpdateFailed(f"API key rejected: {err}") from err
        except NetboiError as err:
            raise UpdateFailed(str(err)) from err

        data = NetboiData(me=me, accounts=accounts)
        data.visible = [a for a in accounts if not a.get("hidden")]

        total = 0.0
        kind_totals = {k: 0.0 for k in KINDS}
        newest: datetime | None = None
        for a in data.visible:
            bal = a.get("balance")
            if bal is not None:
                try:
                    v = float(bal)
                except (TypeError, ValueError):
                    v = 0.0
                total += v
                kind_totals[a.get("kind", "other")] = (
                    kind_totals.get(a.get("kind", "other"), 0.0) + v
                )
            at = _parse_ts(a.get("balance_at") or "")
            if at and (newest is None or at > newest):
                newest = at

        data.net_worth = total
        data.kind_totals = kind_totals
        if total:
            data.kind_shares = {
                k: round(v / abs(total) * 100, 2) for k, v in kind_totals.items()
            }
        data.newest_balance_at = newest
        visible_ids = {a.get("id") for a in data.visible}
        data.changes = _changes(
            _aligned_totals([s for s in series if s.get("account_id") in visible_ids])
        )
        self._schedule_expiry_refresh(data)
        return data

    def _schedule_expiry_refresh(self, data: NetboiData) -> None:
        """Re-poll right after the reveal window lapses, so entities flip back

        to censored on time instead of at the next scheduled cycle.
        """
        if self._expiry_cancel:
            self._expiry_cancel()
            self._expiry_cancel = None
        exp = data.reveal_expires_at()
        if data.censored or exp is None:
            return
        delay = (exp - dt_util.utcnow()).total_seconds() + 2
        if delay > 0:
            self._expiry_cancel = async_call_later(self.hass, delay, self._handle_expiry)

    @callback
    def _handle_expiry(self, _now: datetime) -> None:
        self._expiry_cancel = None
        self.hass.async_create_task(self.async_request_refresh())

    async def async_shutdown(self) -> None:
        if self._expiry_cancel:
            self._expiry_cancel()
            self._expiry_cancel = None
        await super().async_shutdown()

    @property
    def currency(self) -> str:
        if self.data and self.data.visible:
            return self.data.visible[0].get("currency") or "USD"
        return "USD"
