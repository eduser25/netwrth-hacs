export type Account = {
  id: number;
  provider: string;
  org_domain: string;
  org_name: string;
  name: string;
  nickname: string | null;
  currency: string;
  kind: "cash" | "investment" | "credit" | "loan" | "other";
  category: "retirement" | "taxable" | null;
  hidden: boolean;
  balance: string | null;
  balance_at: string | null;
  created_at: string;
};

export type SeriesPoint = { ts: string; balance: string };
export type AccountSeries = { account_id: number; points: SeriesPoint[] };

export type ProviderConn = {
  id: number;
  kind: string;
  external_id: string;
  label: string;
  created_at: string;
  last_ok: string | null;
  last_error: string | null;
};

export type Settings = {
  baseline: string | null;
  censored: boolean;
  code_required: boolean;
  plaid_available: boolean;
};

export type ApiKey = {
  id: number;
  label: string;
  scope: "read_censored" | "read_full";
  created_at: string;
  last_used_at: string | null;
  revealed: boolean;
  reveal_expires: string | null;
};

export type ChartMode = "flow" | "total" | "stacked" | "category";

export type RangeKey = "1d" | "1w" | "1m" | "3m" | "6m" | "1y" | "all";
export const RANGES: RangeKey[] = ["1d", "1w", "1m", "3m", "6m", "1y", "all"];
