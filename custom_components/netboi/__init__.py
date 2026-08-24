"""netwrth: net-worth charts and sensors backed by a netwrth deployment (HA domain stays netboi)."""

from __future__ import annotations

import logging
from dataclasses import dataclass

import voluptuous as vol

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .api import NetboiClient, NetboiError, NetboiPinError
from .const import (
    CONF_API_KEY,
    CONF_BASE_URL,
    DEFAULT_REVEAL_TTL_MINUTES,
    DOMAIN,
    OPT_REVEAL_TTL,
)
from .coordinator import NetboiCoordinator
from .frontend import async_register_frontend
from .websocket import async_register_websocket

_LOGGER = logging.getLogger(__name__)

PLATFORMS = ["binary_sensor", "sensor"]

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

SERVICE_REVEAL = "reveal"
SERVICE_CONCEAL = "conceal"

REVEAL_SCHEMA = vol.Schema(
    {
        vol.Required("code"): cv.string,
        vol.Optional("ttl_minutes"): vol.All(vol.Coerce(int), vol.Range(min=0, max=43200)),
        vol.Optional("entry_id"): cv.string,
    }
)
CONCEAL_SCHEMA = vol.Schema({vol.Optional("entry_id"): cv.string})


@dataclass
class NetboiRuntime:
    """Per-entry state shared by platforms, websocket commands and services."""

    client: NetboiClient
    coordinator: NetboiCoordinator


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Register the pieces that exist once regardless of entry count."""
    hass.data.setdefault(DOMAIN, {})
    async_register_websocket(hass)
    await async_register_frontend(hass)
    return True


def _runtimes(hass: HomeAssistant, entry_id: str | None) -> list[NetboiRuntime]:
    data = hass.data.get(DOMAIN, {})
    runtimes = [v for v in data.values() if isinstance(v, NetboiRuntime)]
    if entry_id:
        runtimes = [data[entry_id]] if isinstance(data.get(entry_id), NetboiRuntime) else []
    if not runtimes:
        raise ServiceValidationError("no matching netwrth config entry")
    return runtimes


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    client = NetboiClient(
        async_get_clientsession(hass),
        entry.data[CONF_BASE_URL],
        entry.data[CONF_API_KEY],
    )
    coordinator = NetboiCoordinator(hass, entry, client)
    await coordinator.async_config_entry_first_refresh()

    hass.data[DOMAIN][entry.entry_id] = NetboiRuntime(client=client, coordinator=coordinator)
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    entry.async_on_unload(entry.add_update_listener(_async_options_updated))

    async def _reveal(call: ServiceCall) -> None:
        for rt in _runtimes(hass, call.data.get("entry_id")):
            ttl_minutes = call.data.get(
                "ttl_minutes",
                rt.coordinator.entry.options.get(OPT_REVEAL_TTL, DEFAULT_REVEAL_TTL_MINUTES),
            )
            try:
                await rt.client.reveal(call.data["code"], ttl_minutes * 60)
            except NetboiPinError as err:
                raise HomeAssistantError(str(err)) from err
            except NetboiError as err:
                raise HomeAssistantError(f"reveal failed: {err}") from err
            await rt.coordinator.async_refresh()

    async def _conceal(call: ServiceCall) -> None:
        for rt in _runtimes(hass, call.data.get("entry_id")):
            try:
                await rt.client.conceal()
            except NetboiError as err:
                raise HomeAssistantError(f"conceal failed: {err}") from err
            await rt.coordinator.async_refresh()

    if not hass.services.has_service(DOMAIN, SERVICE_REVEAL):
        hass.services.async_register(DOMAIN, SERVICE_REVEAL, _reveal, schema=REVEAL_SCHEMA)
        hass.services.async_register(DOMAIN, SERVICE_CONCEAL, _conceal, schema=CONCEAL_SCHEMA)
    return True


async def _async_options_updated(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if ok:
        hass.data[DOMAIN].pop(entry.entry_id, None)
    return ok
