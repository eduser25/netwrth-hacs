import { Account, AccountSeries, RangeKey } from "./types";

// The slice of the hass object the cards rely on.
export type Hass = {
  connection: {
    sendMessagePromise<T>(msg: Record<string, unknown>): Promise<T>;
    subscribeEvents<T>(
      callback: (ev: T) => void,
      eventType: string
    ): Promise<() => Promise<void>>;
  };
};

export type CensorChangedEvent = {
  data: { entry_id: string; censored: boolean };
};

// Fired by the integration whenever the key's censor state flips (a reveal
// from any card or device, a conceal, a service call, or window expiry).
export const EVENT_CENSOR_CHANGED = "netwrth_censor_changed";

export type Me = {
  label: string;
  scope: "read_censored" | "read_full";
  censored: boolean;
  revealed: boolean;
  reveal_expires: string | null;
  code_required: boolean;
  can_reveal: boolean;
};

export type Overview = {
  entry_id: string;
  me: Me;
  accounts: Account[];
  currency: string;
  default_reveal_ttl_minutes: number;
};

export type EntryInfo = { entry_id: string; title: string; scope: string | null };

export function fetchOverview(hass: Hass, entry?: string): Promise<Overview> {
  return hass.connection.sendMessagePromise<Overview>({
    type: "netwrth/overview",
    ...(entry ? { entry_id: entry } : {}),
  });
}

export function fetchSeries(
  hass: Hass,
  entry: string | undefined,
  range: RangeKey
): Promise<{ series: AccountSeries[]; censored: boolean }> {
  return hass.connection.sendMessagePromise({
    type: "netwrth/series",
    range,
    ...(entry ? { entry_id: entry } : {}),
  });
}

export function listEntries(hass: Hass): Promise<EntryInfo[]> {
  return hass.connection.sendMessagePromise({ type: "netwrth/entries" });
}

export function reveal(
  hass: Hass,
  entry: string | undefined,
  code: string,
  ttlMinutes?: number
): Promise<{ ok: boolean; error?: string }> {
  return hass.connection.sendMessagePromise({
    type: "netwrth/reveal",
    code,
    ...(ttlMinutes !== undefined ? { ttl_minutes: ttlMinutes } : {}),
    ...(entry ? { entry_id: entry } : {}),
  });
}

export function conceal(hass: Hass, entry?: string): Promise<{ ok: boolean }> {
  return hass.connection.sendMessagePromise({
    type: "netwrth/conceal",
    ...(entry ? { entry_id: entry } : {}),
  });
}
