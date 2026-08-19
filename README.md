# netboi

Your [netboi](https://netboi.app) net-worth dashboard in Home Assistant: the
same charts as the web app, rendered by the same code, plus censor-safe
sensors for automations — and a PIN pad on every card to reveal real amounts
for exactly as long as you choose.

## How privacy works

Everything is built around netboi's server-side censor mode. Amounts are
redacted **before they leave your netboi deployment**, rescaled to
percent-of-net-worth — trends and ratios survive, dollars don't.

- A **censored-only** API key physically cannot receive real amounts. Perfect
  for a wall tablet: no PIN, no reveal, nothing to leak.
- A **full-access** API key *still starts censored*. Tapping the lock on any
  card opens a PIN pad; the PIN is verified by netboi (with brute-force
  backoff), which opens a reveal window for that key — sticky, or
  auto-concealing after a configurable number of minutes. Concealing never
  needs a PIN.
- Sensor entities only carry censor-safe values (percent changes, shares) by
  default, because Home Assistant's recorder keeps state history forever.
  Real-currency sensors are an explicit opt-in.
- Chart data flows through websocket commands, not recorded entities, so
  revealed amounts are never written into HA's database.

## Install

1. HACS → Integrations → ⋮ → *Custom repositories* → add
   `https://github.com/eduser25/netboi-hacs` as an **Integration**.
2. Install **netboi**, restart Home Assistant.
3. In netboi: *Settings → Integrations → New API key*. Pick the scope
   deliberately (see above) and copy the key.
4. In HA: *Settings → Devices & services → Add integration → netboi*, paste
   your deployment URL and the key.

The Lovelace card bundle registers itself automatically (storage-mode
dashboards). YAML-mode dashboards add it manually:

```yaml
lovelace:
  resources:
    - url: /netboi_static/netboi-cards.js
      type: module
```

## Cards

All cards are in the card picker. Every card header carries the lock control
(full-access keys only): tap to reveal via PIN pad, tap again to conceal.

### `netboi-worth-card`

The dashboard chart with the web app's views and modes.

```yaml
type: custom:netboi-worth-card
view: invest        # daily | invest | all
mode: total         # total | stacked | category | flow (per view)
range: 6m           # 1d 1w 1m 3m 6m 1y all
show_controls: true # range/mode selectors in the header
auto_conceal_minutes: 15   # override the integration default for this card
theme: netboi       # netboi | ha (follow your HA theme)
```

### `netboi-flow-card`

Net flow bars (money kept vs burned per day/week/month) over the day-to-day
accounts — a preset of the worth card.

### `netboi-stat-card`

One big number and its change over a window. Censored, the number stays
masked but the percent change is real.

```yaml
type: custom:netboi-stat-card
view: all
range: 1m
```

### `netboi-accounts-card`

Accounts grouped by kind with balances and a sync-freshness dot.

## Entities

Censor-safe, always on:

| entity | meaning |
| --- | --- |
| `sensor.*_net_worth_change_day/week/month/year` | % change of net worth |
| `sensor.*_cash/investment/credit/loan/other_share` | kind's share of net worth (%) |
| `sensor.*_last_balance_update` | newest balance timestamp |
| `sensor.*_accounts` | visible account count |
| `binary_sensor.*_censored` | whether amounts are currently censored |
| `binary_sensor.*_data_stale` | no balance newer than 48 h |

Real-currency (`Net worth`, per-kind totals): enable *Expose real-currency
sensors* in the integration options (full-access keys only), then enable the
entities you want. They read *unavailable* while censored — and while
revealed, their values land in HA history. That's the trade you're opting
into.

## Services

- `netboi.reveal` — `code` (PIN), optional `ttl_minutes` (0 = sticky),
  optional `entry_id`.
- `netboi.conceal` — optional `entry_id`. Handy in automations:
  conceal every night, or when your presence sensor says guests are over.

## Options

*Settings → Devices & services → netboi → Configure*: polling interval
(default 15 min), default auto-conceal window (default 15 min, 0 = sticky),
real-currency sensor opt-in.

## Development

```sh
cd cards
npm install
npm run build   # emits custom_components/netboi/frontend/netboi-cards.js
```

The chart components under `cards/src/components` and `cards/src/lib` are
vendored from the netboi web app so the rendering stays code-identical.
