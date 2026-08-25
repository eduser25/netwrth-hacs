"""Sensors. Censor-safe by default: percentages and shares only.

Real-currency sensors are opt-in (options) because HA's recorder keeps every
state change forever — enabling them writes real amounts into HA history
whenever the key is revealed.
"""

from __future__ import annotations

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorStateClass,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import PERCENTAGE
from homeassistant.core import HomeAssistant
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, OPT_REAL_SENSORS
from .coordinator import CHANGE_WINDOWS, KINDS, NetwrthCoordinator

WINDOW_NAMES = {"1d": "day", "1w": "week", "1m": "month", "1y": "year"}


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback
) -> None:
    coordinator: NetwrthCoordinator = hass.data[DOMAIN][entry.entry_id].coordinator
    entities: list[SensorEntity] = [
        *(NetwrthChangeSensor(coordinator, suffix) for suffix, _ in CHANGE_WINDOWS),
        *(NetwrthShareSensor(coordinator, kind) for kind in KINDS),
        NetwrthLastSyncSensor(coordinator),
        NetwrthAccountCountSensor(coordinator),
    ]
    if entry.options.get(OPT_REAL_SENSORS):
        entities.append(NetwrthNetWorthSensor(coordinator))
        entities.extend(NetwrthKindTotalSensor(coordinator, kind) for kind in KINDS)
    async_add_entities(entities)


class NetwrthEntity(CoordinatorEntity[NetwrthCoordinator]):
    _attr_has_entity_name = True

    def __init__(self, coordinator: NetwrthCoordinator) -> None:
        super().__init__(coordinator)
        entry = coordinator.entry
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name=entry.title,
            manufacturer="netwrth",
            entry_type=DeviceEntryType.SERVICE,
            configuration_url=entry.data.get("base_url"),
        )


class NetwrthChangeSensor(NetwrthEntity, SensorEntity):
    """Net worth percent change over a window; survives censoring."""

    _attr_native_unit_of_measurement = PERCENTAGE
    _attr_state_class = SensorStateClass.MEASUREMENT
    _attr_suggested_display_precision = 2
    _attr_icon = "mdi:trending-up"

    def __init__(self, coordinator: NetwrthCoordinator, suffix: str) -> None:
        super().__init__(coordinator)
        self._suffix = suffix
        self._attr_unique_id = f"{coordinator.entry.entry_id}_change_{suffix}"
        self._attr_name = f"Total change ({WINDOW_NAMES[suffix]})"

    @property
    def native_value(self) -> float | None:
        return self.coordinator.data.changes.get(self._suffix)


class NetwrthShareSensor(NetwrthEntity, SensorEntity):
    """One kind's share of net worth; survives censoring."""

    _attr_native_unit_of_measurement = PERCENTAGE
    _attr_state_class = SensorStateClass.MEASUREMENT
    _attr_suggested_display_precision = 1
    _attr_icon = "mdi:chart-donut"

    def __init__(self, coordinator: NetwrthCoordinator, kind: str) -> None:
        super().__init__(coordinator)
        self._kind = kind
        self._attr_unique_id = f"{coordinator.entry.entry_id}_share_{kind}"
        self._attr_name = f"{kind.capitalize()} share"

    @property
    def native_value(self) -> float | None:
        return self.coordinator.data.kind_shares.get(self._kind)


class NetwrthLastSyncSensor(NetwrthEntity, SensorEntity):
    _attr_device_class = SensorDeviceClass.TIMESTAMP
    _attr_name = "Last balance update"

    def __init__(self, coordinator: NetwrthCoordinator) -> None:
        super().__init__(coordinator)
        self._attr_unique_id = f"{coordinator.entry.entry_id}_last_sync"

    @property
    def native_value(self):
        return self.coordinator.data.newest_balance_at


class NetwrthAccountCountSensor(NetwrthEntity, SensorEntity):
    _attr_name = "Accounts"
    _attr_icon = "mdi:bank"
    _attr_state_class = SensorStateClass.MEASUREMENT

    def __init__(self, coordinator: NetwrthCoordinator) -> None:
        super().__init__(coordinator)
        self._attr_unique_id = f"{coordinator.entry.entry_id}_accounts"

    @property
    def native_value(self) -> int:
        return len(self.coordinator.data.visible)


class NetwrthRealSensor(NetwrthEntity, SensorEntity):
    """Base for real-currency sensors: unavailable while data is censored."""

    _attr_device_class = SensorDeviceClass.MONETARY
    _attr_state_class = SensorStateClass.TOTAL
    _attr_suggested_display_precision = 0
    _attr_entity_registry_enabled_default = False

    @property
    def native_unit_of_measurement(self) -> str:
        return self.coordinator.currency

    @property
    def available(self) -> bool:
        return super().available and not self.coordinator.data.censored_now()


class NetwrthNetWorthSensor(NetwrthRealSensor):
    _attr_name = "Total"
    _attr_icon = "mdi:cash-multiple"

    def __init__(self, coordinator: NetwrthCoordinator) -> None:
        super().__init__(coordinator)
        self._attr_unique_id = f"{coordinator.entry.entry_id}_net_worth"

    @property
    def native_value(self) -> float | None:
        return self.coordinator.data.net_worth


class NetwrthKindTotalSensor(NetwrthRealSensor):
    def __init__(self, coordinator: NetwrthCoordinator, kind: str) -> None:
        super().__init__(coordinator)
        self._kind = kind
        self._attr_unique_id = f"{coordinator.entry.entry_id}_total_{kind}"
        self._attr_name = f"{kind.capitalize()} total"

    @property
    def native_value(self) -> float | None:
        return self.coordinator.data.kind_totals.get(self._kind)
