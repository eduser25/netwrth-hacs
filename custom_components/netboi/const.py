"""Constants for the netboi integration."""

DOMAIN = "netboi"

CONF_BASE_URL = "base_url"
CONF_API_KEY = "api_key"

OPT_SCAN_INTERVAL = "scan_interval_minutes"
OPT_REVEAL_TTL = "reveal_ttl_minutes"
OPT_REAL_SENSORS = "expose_real_sensors"

DEFAULT_SCAN_INTERVAL_MINUTES = 15
# Default auto-conceal window for PIN reveals; 0 = sticky until concealed.
DEFAULT_REVEAL_TTL_MINUTES = 15

SCOPE_READ_CENSORED = "read_censored"
SCOPE_READ_FULL = "read_full"

# Account balances older than this mark the connection stale.
STALE_AFTER_HOURS = 48

# URL the card bundle is served from (registered as a static path).
CARDS_URL = "/netboi_static/netboi-cards.js"

# Fired on the HA event bus whenever a key's censor state flips (reveal,
# conceal, or window expiry); every card subscribed to the same entry
# refreshes at once — across dashboards and devices.
EVENT_CENSOR_CHANGED = "netboi_censor_changed"

RANGES = ("1d", "1w", "1m", "3m", "6m", "1y", "all")
