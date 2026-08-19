"""Binary sensors: censor state and data freshness."""

from __future__ import annotations

from datetime import timedelta

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util import dt as dt_util

from .const import DOMAIN, STALE_AFTER_HOURS
from .coordinator import NetboiCoordinator
from .sensor import NetboiEntity


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback
) -> None:
    coordinator: NetboiCoordinator = hass.data[DOMAIN][entry.entry_id].coordinator
    async_add_entities([NetboiCensoredSensor(coordinator), NetboiStaleSensor(coordinator)])


class NetboiCensoredSensor(NetboiEntity, BinarySensorEntity):
    """On while amounts are censored (percent-of-net-worth scale)."""

    _attr_name = "Censored"
    _attr_icon = "mdi:eye-off"

    def __init__(self, coordinator: NetboiCoordinator) -> None:
        super().__init__(coordinator)
        self._attr_unique_id = f"{coordinator.entry.entry_id}_censored"

    @property
    def is_on(self) -> bool:
        return self.coordinator.data.censored_now()


class NetboiStaleSensor(NetboiEntity, BinarySensorEntity):
    """On when no account has synced a balance recently."""

    _attr_name = "Data stale"
    _attr_device_class = BinarySensorDeviceClass.PROBLEM

    def __init__(self, coordinator: NetboiCoordinator) -> None:
        super().__init__(coordinator)
        self._attr_unique_id = f"{coordinator.entry.entry_id}_stale"

    @property
    def is_on(self) -> bool:
        newest = self.coordinator.data.newest_balance_at
        if newest is None:
            return True
        return dt_util.utcnow() - newest > timedelta(hours=STALE_AFTER_HOURS)
