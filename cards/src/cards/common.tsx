import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AccountSeries, RangeKey } from "../lib/types";
import {
  CensorChangedEvent,
  EVENT_CENSOR_CHANGED,
  Hass,
  Overview,
  conceal,
  fetchOverview,
  fetchSeries,
  reveal,
} from "../lib/ha";
import PinPad from "../components/PinPad";
import { AmbientEffect } from "../components/Ambient";

// Every card carries these; specific cards extend it.
export type BaseCardConfig = {
  type: string;
  entry?: string;
  title?: string;
  theme?: "netwrth" | "ha";
  // Ambient canvas behind the content (the web app's background effects).
  // Unset: plexus on the netwrth theme, off when following the HA theme —
  // a card that blends into someone's theme shouldn't bring its own weather.
  background?: AmbientEffect;
  // Seeded sample data instead of a connection: preview a card before
  // connecting, or stage a dashboard for screenshots. PIN 1234.
  demo?: boolean;
  auto_conceal_minutes?: number;
};

// Overlays (PIN pad, hover bubbles) must float above neighbouring cards. No
// z-index inside the card can guarantee that: .card is a stacking context
// (for the ambient layer) and so are HA's own grid wrappers. The element host
// provides a `popover="manual"` layer outside .card; Overlay portals into it
// and shows it, which puts it in the browser's top layer — above every
// stacking context on the page, shadow DOM included.
export const OverlayContext = createContext<HTMLElement | null>(null);

export function Overlay({ children }: { children: React.ReactNode }) {
  const el = useContext(OverlayContext);
  useEffect(() => {
    if (!el) return;
    const anyEl = el as HTMLElement & { showPopover?: () => void; hidePopover?: () => void };
    const n = Number(el.dataset.open ?? 0) + 1;
    el.dataset.open = String(n);
    if (n === 1 && anyEl.showPopover) {
      try {
        anyEl.showPopover();
      } catch {
        /* already open, or popover unsupported: the layer still renders in place */
      }
    }
    return () => {
      const left = Number(el.dataset.open ?? 1) - 1;
      el.dataset.open = String(Math.max(0, left));
      if (left <= 0 && anyEl.hidePopover) {
        try {
          anyEl.hidePopover();
        } catch {
          /* already hidden */
        }
      }
    };
  }, [el]);
  return el ? createPortal(children, el) : <>{children}</>;
}

// Viewport position for a popover-hosted pad, hanging off the host card's
// top-right corner like the in-card version does. Null when there is no
// overlay layer (the demo harness fallback keeps the absolute CSS).
export function useOverlayAnchor(open: boolean): React.CSSProperties | undefined {
  const el = useContext(OverlayContext);
  return useMemo(() => {
    if (!el || !open) return undefined;
    const host = (el.getRootNode() as ShadowRoot).host as HTMLElement | undefined;
    if (!host) return undefined;
    const r = host.getBoundingClientRect();
    const PAD_W = 204;
    return {
      position: "fixed",
      top: Math.round(r.top + 48),
      left: Math.round(Math.max(8, Math.min(window.innerWidth - PAD_W - 8, r.right - 12 - PAD_W))),
      right: "auto",
    };
  }, [el, open]);
}

export function ambientEffect(config: BaseCardConfig): AmbientEffect {
  if (config.background) return config.background;
  return config.theme === "ha" ? "off" : "plexus";
}

const REFRESH_MS = 60_000;

// Shared load/refresh cycle: overview (key state + accounts) plus whatever
// payload the card's fetcher pulls, re-pulled every minute and after
// reveal/conceal.
//
// The server is the authority on the reveal window (it re-censors lazily per
// request); the two effects below only make the *display* converge promptly:
// a local deadline drops revealed data the moment the window lapses, and a
// visibility hook refetches when a sleeping screen wakes up instead of
// waiting out a throttled interval.
//
// fetchData must be referentially stable across renders (useCallback), or
// the card refetches on every render.
export function useNetwrthCore<T>(
  hass: Hass,
  entry: string | undefined,
  fetchData: (hass: Hass, entry: string | undefined) => Promise<{ data: T; censored: boolean }>
) {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [masked, setMasked] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const refresh = useCallback(() => setTick((t) => t + 1), []);

  // Drop stale revealed data and refetch: the values on screen may predate
  // the reveal window's expiry, so don't keep showing them while loading.
  const expire = useCallback(() => {
    setData(null);
    setOverview((ov) =>
      ov ? { ...ov, me: { ...ov.me, censored: true, revealed: false, reveal_expires: null } } : ov
    );
    setMasked(true);
    refresh();
  }, [refresh]);

  const revealedUntil =
    overview && !overview.me.censored && overview.me.reveal_expires
      ? new Date(overview.me.reveal_expires).getTime()
      : null;

  useEffect(() => {
    let alive = true;
    Promise.all([fetchOverview(hass, entry), fetchData(hass, entry)])
      .then(([ov, out]) => {
        if (!alive) return;
        setOverview(ov);
        setData(out.data);
        setMasked(out.censored);
        setError(null);
      })
      .catch((e) => {
        if (!alive) return;
        setError(e?.message ?? String(e));
      });
    const timer = setInterval(refresh, REFRESH_MS);
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, [hass, entry, fetchData, tick, refresh]);

  // Censor-state push: when any card (or device, or automation) flips this
  // key's censor state, the integration fires an event and every subscribed
  // card refetches at once — no waiting out the poll interval. entryIdRef
  // tracks the resolved entry so one subscription outlives overview reloads.
  const entryIdRef = useRef<string | null>(null);
  entryIdRef.current = overview?.entry_id ?? null;
  useEffect(() => {
    let unsub: (() => Promise<void>) | null = null;
    let alive = true;
    hass.connection
      .subscribeEvents<CensorChangedEvent>((ev) => {
        const mine = entryIdRef.current;
        if (mine == null || ev.data.entry_id === mine) refresh();
      }, EVENT_CENSOR_CHANGED)
      .then((u) => {
        if (alive) unsub = u;
        else u();
      })
      .catch(() => undefined);
    return () => {
      alive = false;
      unsub?.();
    };
  }, [hass.connection, refresh]);

  // Cosmetic local deadline at reveal expiry (+1s slack for clock skew).
  useEffect(() => {
    if (revealedUntil == null) return;
    const ms = revealedUntil - Date.now() + 1000;
    if (ms <= 0) {
      expire();
      return;
    }
    const timer = setTimeout(expire, ms);
    return () => clearTimeout(timer);
  }, [revealedUntil, expire]);

  // Wall tablets sleep; on wake, re-pull immediately — and if the reveal
  // window lapsed while asleep, blank the stale frame before the fetch.
  useEffect(() => {
    const onWake = () => {
      if (document.visibilityState !== "visible") return;
      if (revealedUntil != null && Date.now() >= revealedUntil) {
        expire();
      } else {
        refresh();
      }
    };
    document.addEventListener("visibilitychange", onWake);
    window.addEventListener("pageshow", onWake);
    return () => {
      document.removeEventListener("visibilitychange", onWake);
      window.removeEventListener("pageshow", onWake);
    };
  }, [revealedUntil, expire, refresh]);

  return { overview, data, masked, error, refresh };
}

// The original account-series cycle, now a thin wrapper over the core.
export function useNetwrth(hass: Hass, entry: string | undefined, range: RangeKey) {
  const fetchData = useCallback(
    (h: Hass, e: string | undefined) =>
      fetchSeries(h, e, range).then((se) => ({ data: se.series, censored: se.censored })),
    [range]
  );
  const { overview, data, masked, error, refresh } = useNetwrthCore<AccountSeries[]>(
    hass,
    entry,
    fetchData
  );
  return { overview, series: data, masked, error, refresh };
}

const LockIcon = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    {open ? <path d="M8 11V7a4 4 0 0 1 7.5-2" /> : <path d="M8 11V7a4 4 0 0 1 8 0v4" />}
  </svg>
);

// The censor affordance every card's header carries: a lock that reveals via
// PIN pad (server-side, optionally time-boxed) and conceals with one tap.
export function LockControl({
  hass,
  entry,
  overview,
  autoConcealMinutes,
  onChanged,
}: {
  hass: Hass;
  entry?: string;
  overview: Overview;
  autoConcealMinutes?: number;
  onChanged: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const anchor = useOverlayAnchor(open);
  const me = overview.me;
  if (!me.can_reveal) return null; // censored-only key: no affordance at all

  const ttl = autoConcealMinutes ?? overview.default_reveal_ttl_minutes;

  const doReveal = async (code: string) => {
    const out = await reveal(hass, entry, code, ttl).catch((e) => ({
      ok: false,
      error: e?.message ?? String(e),
    }));
    if (!out.ok) {
      setErr(out.error ?? "rejected");
      return false;
    }
    setErr(null);
    setOpen(false);
    onChanged();
    return true;
  };

  const onClick = async () => {
    if (!me.censored) {
      await conceal(hass, entry).catch(() => undefined);
      onChanged();
      return;
    }
    if (!me.code_required) {
      await doReveal("");
      return;
    }
    setErr(null);
    setOpen((v) => !v);
  };

  return (
    <>
      <button
        className="lock"
        title={me.censored ? "Reveal amounts" : "Conceal amounts"}
        onClick={onClick}
      >
        <LockIcon open={!me.censored} />
      </button>
      {open && me.censored && (
        <Overlay>
          <div className="pin-wrap" style={anchor}>
            <PinPad
              onSubmit={doReveal}
              error={err}
              label={ttl > 0 ? `Reveal for ${ttl} min` : "Reveal until concealed"}
              footer={
                <button className="pin-footer" onClick={() => setOpen(false)}>
                  Cancel
                </button>
              }
            />
          </div>
        </Overlay>
      )}
    </>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <span className="seg">
      {options.map((o) => (
        <button key={o} className={o === value ? "active" : ""} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </span>
  );
}

// Freshness cutoff shared with the integration's stale binary sensor.
export function isStale(balanceAt: string | null): boolean {
  if (!balanceAt) return true;
  return Date.now() - new Date(balanceAt).getTime() > 48 * 3600 * 1000;
}

export function useVisibleAccounts(overview: Overview | null) {
  return useMemo(
    () => (overview ? overview.accounts.filter((a) => !a.hidden) : []),
    [overview]
  );
}
