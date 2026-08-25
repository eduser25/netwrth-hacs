"""Config flow: point the integration at a netwrth deployment with an API key."""

from __future__ import annotations

import hashlib
from typing import Any

import voluptuous as vol

from homeassistant.config_entries import (
    ConfigEntry,
    ConfigFlow,
    ConfigFlowResult,
    OptionsFlow,
)
from homeassistant.core import callback
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .api import NetwrthAuthError, NetwrthClient, NetwrthError
from .const import (
    CONF_API_KEY,
    CONF_BASE_URL,
    DEFAULT_REVEAL_TTL_MINUTES,
    DEFAULT_SCAN_INTERVAL_MINUTES,
    DOMAIN,
    OPT_REAL_SENSORS,
    OPT_REVEAL_TTL,
    OPT_SCAN_INTERVAL,
    SCOPE_READ_FULL,
)

USER_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_BASE_URL): str,
        vol.Required(CONF_API_KEY): str,
    }
)


class NetwrthConfigFlow(ConfigFlow, domain=DOMAIN):
    """UI setup: base URL + API key, validated against /api/me."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        errors: dict[str, str] = {}
        if user_input is not None:
            base_url = user_input[CONF_BASE_URL].strip().rstrip("/")
            api_key = user_input[CONF_API_KEY].strip()
            if not base_url.startswith(("http://", "https://")):
                base_url = f"https://{base_url}"
            client = NetwrthClient(async_get_clientsession(self.hass), base_url, api_key)
            try:
                me = await client.me()
            except NetwrthAuthError:
                errors["base"] = "invalid_auth"
            except NetwrthError:
                errors["base"] = "cannot_connect"
            else:
                # One entry per key: the hash keeps the token out of HA's
                # registry while still deduping re-adds.
                unique = hashlib.sha256(f"{base_url}|{api_key}".encode()).hexdigest()[:16]
                await self.async_set_unique_id(unique)
                self._abort_if_unique_id_configured()
                label = me.get("label") or "netwrth"
                return self.async_create_entry(
                    title=f"netwrth · {label}",
                    data={CONF_BASE_URL: base_url, CONF_API_KEY: api_key},
                )
        return self.async_show_form(
            step_id="user", data_schema=USER_SCHEMA, errors=errors
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: ConfigEntry) -> "NetwrthOptionsFlow":
        return NetwrthOptionsFlow()


class NetwrthOptionsFlow(OptionsFlow):
    """Polling cadence, default auto-conceal window, real-$ sensor opt-in."""

    async def async_step_init(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)
        opts = self.config_entry.options
        runtime = self.hass.data.get(DOMAIN, {}).get(self.config_entry.entry_id)
        scope = runtime.coordinator.data.me.get("scope") if runtime and runtime.coordinator.data else None
        schema: dict[Any, Any] = {
            vol.Optional(
                OPT_SCAN_INTERVAL,
                default=opts.get(OPT_SCAN_INTERVAL, DEFAULT_SCAN_INTERVAL_MINUTES),
            ): vol.All(vol.Coerce(int), vol.Range(min=1, max=1440)),
            vol.Optional(
                OPT_REVEAL_TTL,
                default=opts.get(OPT_REVEAL_TTL, DEFAULT_REVEAL_TTL_MINUTES),
            ): vol.All(vol.Coerce(int), vol.Range(min=0, max=43200)),
        }
        # Real-$ sensors only make sense on keys that can ever be revealed.
        if scope == SCOPE_READ_FULL:
            schema[
                vol.Optional(OPT_REAL_SENSORS, default=opts.get(OPT_REAL_SENSORS, False))
            ] = bool
        return self.async_show_form(step_id="init", data_schema=vol.Schema(schema))
