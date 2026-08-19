"""Serve the card bundle and register it as a Lovelace resource."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import CARDS_URL, DOMAIN

_LOGGER = logging.getLogger(__name__)


def _version(hass: HomeAssistant) -> str:
    integration = hass.data.get("integrations", {}).get(DOMAIN)
    manifest = getattr(integration, "manifest", None) or {}
    return manifest.get("version", "0")


async def async_register_frontend(hass: HomeAssistant) -> None:
    bundle = Path(__file__).parent / "frontend" / "netboi-cards.js"
    await hass.http.async_register_static_paths(
        [StaticPathConfig(CARDS_URL, str(bundle), cache_headers=False)]
    )
    url = f"{CARDS_URL}?v={_version(hass)}"

    # Auto-add the Lovelace resource in storage mode; YAML-mode dashboards
    # need it added by hand (documented in the README).
    lovelace = hass.data.get("lovelace")
    resources = getattr(lovelace, "resources", None)
    if resources is None:
        _LOGGER.info("Lovelace resources unavailable; add %s manually", url)
        return
    try:
        if not resources.loaded:
            await resources.async_load()
            resources.loaded = True
        for item in resources.async_items():
            if (item.get("url") or "").startswith(CARDS_URL):
                if item["url"] != url:  # stale version: bump the cache-buster
                    await resources.async_update_item(item["id"], {"url": url})
                return
        await resources.async_create_item({"res_type": "module", "url": url})
        _LOGGER.info("Registered netboi cards resource at %s", url)
    except Exception:  # noqa: BLE001 - storage layout varies across HA versions
        _LOGGER.warning(
            "Could not auto-register the Lovelace resource; add %s as a module resource manually",
            url,
        )
