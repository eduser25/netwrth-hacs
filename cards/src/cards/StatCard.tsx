import { useMemo, useState } from "react";
import { Hass } from "../lib/ha";
import { MASK, money, pct, signedMoney } from "../lib/format";
import { alignSeries, sumRow } from "../lib/series";
import { RANGES, RangeKey } from "../lib/types";
import { VIEWS, ViewKey } from "../lib/views";
import {
  BaseCardConfig,
  LockControl,
  Segmented,
  useNetwrth,
  useVisibleAccounts,
} from "./common";

export type StatCardConfig = BaseCardConfig & {
  view?: ViewKey;
  range?: RangeKey;
  show_controls?: boolean;
  show_range_selector?: boolean;
};

// One big number + its change over the window. Censored, the number stays
// masked but the percent change is real — that's the whole point.
export default function StatCard({
  hass,
  config,
}: {
  hass: Hass;
  config: StatCardConfig;
}) {
  const view = VIEWS.find((v) => v.key === (config.view ?? "all")) ?? VIEWS[2];
  const [range, setRange] = useState<RangeKey>(config.range ?? "1m");
  const { overview, series, masked, error, refresh } = useNetwrth(hass, config.entry, range);
  const visible = useVisibleAccounts(overview);
  const accounts = useMemo(() => visible.filter(view.pick), [visible, view]);

  const stat = useMemo(() => {
    if (!series) return null;
    const ids = new Set(accounts.map((a) => a.id));
    const rows = alignSeries(series.filter((s) => ids.has(s.account_id)));
    if (rows.length === 0) return null;
    const first = sumRow(rows[0], accounts);
    const last = sumRow(rows[rows.length - 1], accounts);
    return {
      last,
      diff: last - first,
      delta: first !== 0 ? (last - first) / Math.abs(first) : null,
    };
  }, [series, accounts]);

  const showDelta = stat != null && stat.delta != null && !view.flow;

  return (
    <div className="card">
      <div className="head">
        <h2>{config.title ?? view.label}</h2>
        <span className="head-right">
          {config.show_controls !== false && config.show_range_selector !== false && (
            <span className="controls">
              <Segmented options={RANGES} value={range} onChange={setRange} />
            </span>
          )}
          {overview && (
            <LockControl
              hass={hass}
              entry={config.entry}
              overview={overview}
              autoConcealMinutes={config.auto_conceal_minutes}
              onChanged={refresh}
            />
          )}
        </span>
      </div>
      {error && <div className="error-box">{error}</div>}
      {!error && !stat && <div className="status">Loading…</div>}
      {!error && stat && masked && (
        // Censored: the dollar amount is redacted anyway, so promote the real
        // percent change to the big slot and drop the footer line entirely.
        <div
          className={`stat-value ${
            showDelta ? (stat.delta! >= 0 ? "up" : "down") : ""
          }`}
        >
          {showDelta ? pct(stat.delta!) : MASK}
        </div>
      )}
      {!error && stat && !masked && (
        <>
          <div className="stat-value">{money(stat.last)}</div>
          {showDelta && (
            <div className={`stat-delta ${stat.delta! >= 0 ? "up" : "down"}`}>
              {signedMoney(stat.diff)} ({pct(stat.delta!)}) over {range}
            </div>
          )}
        </>
      )}
    </div>
  );
}
