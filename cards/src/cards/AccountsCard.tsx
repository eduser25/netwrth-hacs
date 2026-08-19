import { useMemo } from "react";
import { Hass } from "../lib/ha";
import { money } from "../lib/format";
import { Account } from "../lib/types";
import { VIEWS, ViewKey } from "../lib/views";
import {
  BaseCardConfig,
  LockControl,
  isStale,
  useNetboi,
  useVisibleAccounts,
} from "./common";

export type AccountsCardConfig = BaseCardConfig & { view?: ViewKey };

const KIND_ORDER = ["cash", "investment", "credit", "loan", "other"] as const;

function balanceLabel(a: Account, masked: boolean): string {
  if (a.balance == null) return "–";
  const v = parseFloat(a.balance);
  return masked ? `${v.toFixed(1)}%` : money(v, true);
}

// The accounts table: grouped by kind, freshness dot per row. Censored,
// balances read as share of net worth.
export default function AccountsCard({
  hass,
  config,
}: {
  hass: Hass;
  config: AccountsCardConfig;
}) {
  const view = VIEWS.find((v) => v.key === (config.view ?? "all")) ?? VIEWS[2];
  const { overview, masked, error, refresh } = useNetboi(hass, config.entry, "1m");
  const visible = useVisibleAccounts(overview);
  const accounts = useMemo(() => visible.filter(view.pick), [visible, view]);

  const groups = useMemo(
    () =>
      KIND_ORDER.map((kind) => ({
        kind,
        accounts: accounts.filter((a) => a.kind === kind),
      })).filter((g) => g.accounts.length > 0),
    [accounts]
  );

  return (
    <div className="card">
      <div className="head">
        <h2>{config.title ?? "Accounts"}</h2>
        {overview && (
          <LockControl
            hass={hass}
            entry={config.entry}
            overview={overview}
            autoConcealMinutes={config.auto_conceal_minutes}
            onChanged={refresh}
          />
        )}
      </div>
      {error && <div className="error-box">{error}</div>}
      {!error && !overview && <div className="status">Loading…</div>}
      {!error && overview && groups.length === 0 && (
        <div className="status">No accounts.</div>
      )}
      {!error && overview && groups.length > 0 && (
        <table>
          <tbody>
            {groups.map((g) => (
              <FragmentRows key={g.kind} kind={g.kind} accounts={g.accounts} masked={masked} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function FragmentRows({
  kind,
  accounts,
  masked,
}: {
  kind: string;
  accounts: Account[];
  masked: boolean;
}) {
  return (
    <>
      <tr className="kind-row">
        <td colSpan={2}>{kind}</td>
      </tr>
      {accounts.map((a) => (
        <tr key={a.id}>
          <td>
            <span className={`dot ${isStale(a.balance_at) ? "stale" : ""}`} />
            {a.nickname || a.name}
            <span className="muted"> · {a.org_name || a.org_domain}</span>
          </td>
          <td className="num">{balanceLabel(a, masked)}</td>
        </tr>
      ))}
    </>
  );
}
