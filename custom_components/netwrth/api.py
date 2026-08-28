"""Async client for the netwrth API, authenticated with a scoped API key."""

from __future__ import annotations

from typing import Any

import aiohttp


class NetwrthError(Exception):
    """Any netwrth API failure."""

    def __init__(self, message: str, status: int | None = None) -> None:
        super().__init__(message)
        self.status = status


class NetwrthAuthError(NetwrthError):
    """The API key was rejected."""


class NetwrthPinError(NetwrthError):
    """A reveal attempt was rejected (wrong PIN, backoff, or scope)."""

    def __init__(self, status: int, message: str) -> None:
        super().__init__(message)
        self.status = status


class NetwrthClient:
    """Thin wrapper over netwrth's key-authenticated read API."""

    def __init__(self, session: aiohttp.ClientSession, base_url: str, api_key: str) -> None:
        self._session = session
        self._base = base_url.rstrip("/")
        self._key = api_key

    async def _request(self, method: str, path: str, json: Any = None) -> Any:
        try:
            resp = await self._session.request(
                method,
                f"{self._base}{path}",
                json=json,
                headers={"Authorization": f"Bearer {self._key}"},
                timeout=aiohttp.ClientTimeout(total=30),
            )
        except (aiohttp.ClientError, TimeoutError) as err:
            raise NetwrthError(f"cannot reach netwrth at {self._base}: {err}") from err
        async with resp:
            if resp.status == 401:
                raise NetwrthAuthError("netwrth rejected the API key")
            body = await resp.json(content_type=None)
            if resp.status >= 400:
                msg = body.get("error", f"HTTP {resp.status}") if isinstance(body, dict) else f"HTTP {resp.status}"
                # 403/429 on reveal are user-facing PIN outcomes, not faults.
                if resp.status in (403, 429):
                    raise NetwrthPinError(resp.status, msg)
                raise NetwrthError(msg, status=resp.status)
            return body

    async def me(self) -> dict[str, Any]:
        """Describe the key: scope, censored state, PIN requirement."""
        return await self._request("GET", "/api/me")

    async def accounts(self) -> list[dict[str, Any]]:
        out = await self._request("GET", "/api/accounts")
        return out.get("accounts", [])

    async def series(self, range_key: str = "all") -> dict[str, Any]:
        """Full response: {"series": [...], "censored": bool} — the flag is
        stamped by the backend in the same response as the data, so the pair
        is atomic (a separately-fetched flag can be from another instant).
        """
        return await self._request("GET", f"/api/series?range={range_key}")

    # Spending endpoints (per-user feature; the backend answers 404 with the
    # feature off, surfaced as NetwrthError(status=404)). All amounts arrive
    # already censor-scaled per the key's scope, like balances.

    async def spending_summary(self, month: str | None = None) -> dict[str, Any]:
        """Month rollup: theme totals plus total spend/income."""
        q = f"?month={month}" if month else ""
        return await self._request("GET", f"/api/spending/summary{q}")

    async def spending_recurring(self, month: str | None = None) -> dict[str, Any]:
        """Recurring streams + the month's actuals and (live month) projections."""
        q = f"?month={month}" if month else ""
        return await self._request("GET", f"/api/spending/recurring{q}")

    async def spending_transactions(
        self, month: str | None = None, theme: str | None = None
    ) -> dict[str, Any]:
        """The month's transactions, optionally filtered to one theme."""
        params = []
        if month:
            params.append(f"month={month}")
        if theme:
            params.append(f"theme={theme}")
        q = "?" + "&".join(params) if params else ""
        return await self._request("GET", f"/api/spending/transactions{q}")

    async def reveal(self, code: str, ttl_seconds: int = 0) -> dict[str, Any]:
        payload: dict[str, Any] = {"code": code}
        if ttl_seconds > 0:
            payload["ttl_seconds"] = ttl_seconds
        return await self._request("POST", "/api/keys/reveal", json=payload)

    async def conceal(self) -> dict[str, Any]:
        return await self._request("POST", "/api/keys/conceal", json={})
