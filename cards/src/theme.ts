// Card chrome styles injected into each card's shadow root. Two token sets:
// "netboi" carries the app's own dark identity; "ha" maps the tokens onto the
// active Home Assistant theme instead. (Chart series colors stay on the
// netboi palette either way for now.)
export type ThemeMode = "netboi" | "ha";

const NETBOI_TOKENS = `
  --nb-bg: #121a27;
  --nb-panel-2: #17202f;
  --nb-border: #223047;
  --nb-text: #e6edf7;
  --nb-muted: #8b9bb4;
  --nb-green: #34d399;
  --nb-red: #f87171;
  --nb-accent: #60a5fa;
  --nb-radius: 12px;
`;

const HA_TOKENS = `
  --nb-bg: var(--ha-card-background, var(--card-background-color, #fff));
  --nb-panel-2: var(--secondary-background-color, #f0f0f0);
  --nb-border: var(--divider-color, #e0e0e0);
  --nb-text: var(--primary-text-color, #212121);
  --nb-muted: var(--secondary-text-color, #727272);
  --nb-green: var(--success-color, #34d399);
  --nb-red: var(--error-color, #f87171);
  --nb-accent: var(--primary-color, #60a5fa);
  --nb-radius: var(--ha-card-border-radius, 12px);
`;

export function cardCss(mode: ThemeMode): string {
  return `
  :host { display: block; }
  * { box-sizing: border-box; }
  .card {
    ${mode === "ha" ? HA_TOKENS : NETBOI_TOKENS}
    position: relative;
    background: var(--nb-bg);
    border: 1px solid var(--nb-border);
    border-radius: var(--nb-radius);
    padding: 14px 16px;
    color: var(--nb-text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
  }
  .head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin-bottom: 10px;
  }
  .head h2 {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--nb-muted);
    flex: 1;
  }
  .muted { color: var(--nb-muted); }
  /* margin-left auto keeps the toggles pinned to the right edge even when a
     narrow card wraps them onto their own line under the title. */
  .controls { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; margin-left: auto; }
  .seg {
    display: inline-flex;
    border: 1px solid var(--nb-border);
    border-radius: 8px;
    overflow: hidden;
  }
  .seg button {
    background: transparent;
    border: none;
    color: var(--nb-muted);
    padding: 4px 9px;
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
  }
  .seg button.active { background: var(--nb-panel-2); color: var(--nb-text); }
  .lock {
    background: transparent;
    border: 1px solid var(--nb-border);
    border-radius: 8px;
    color: var(--nb-muted);
    width: 34px;
    height: 30px;
    cursor: pointer;
    font-size: 13px;
    line-height: 1;
  }
  .lock:hover { color: var(--nb-text); border-color: var(--nb-muted); }
  .status { text-align: center; padding: 40px 0; color: var(--nb-muted); }
  .error-box {
    background: rgba(248, 113, 113, 0.12);
    border: 1px solid var(--nb-red);
    color: var(--nb-red);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 13px;
  }
  .reveal-note { font-size: 11px; color: var(--nb-muted); }

  /* stat card */
  .stat-value { font-size: 28px; font-weight: 700; letter-spacing: -0.01em; }
  .stat-delta { font-size: 13px; margin-top: 2px; }
  .up { color: var(--nb-green); }
  .down { color: var(--nb-red); }

  /* accounts card */
  table { width: 100%; border-collapse: collapse; }
  td, th { padding: 6px 4px; text-align: left; font-size: 13px; }
  td.num { text-align: right; font-variant-numeric: tabular-nums; }
  tr + tr td { border-top: 1px solid var(--nb-border); }
  td.row-delta { font-size: 12px; width: 1%; white-space: nowrap; padding-left: 10px; }
  .kind-row td {
    color: var(--nb-muted);
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.05em;
    padding-top: 12px;
  }
  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 7px;
    background: var(--nb-green);
  }
  .dot.stale { background: #fbbf24; }

  /* pin pad overlay */
  .pin-wrap {
    position: absolute;
    top: 48px;
    right: 12px;
    z-index: 20;
  }
  .pinpad {
    background: var(--nb-bg);
    border: 1px solid color-mix(in srgb, var(--nb-green) 45%, var(--nb-border));
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45),
      0 0 0 1px color-mix(in srgb, var(--nb-green) 18%, transparent),
      0 0 16px color-mix(in srgb, var(--nb-green) 25%, transparent);
  }
  .pin-label {
    text-align: center;
    color: var(--nb-muted);
    font-size: 12px;
    margin-bottom: 10px;
    white-space: nowrap;
  }
  .pin-dots { display: flex; justify-content: center; gap: 10px; margin-bottom: 12px; }
  .pin-dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--nb-muted); }
  .pin-dot.filled { background: var(--nb-text); border-color: var(--nb-text); }
  .pin-grid { display: grid; grid-template-columns: repeat(3, 48px); gap: 8px; }
  .pin-grid button {
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--nb-border);
    background: var(--nb-panel-2);
    color: var(--nb-text);
    font-size: 17px;
    cursor: pointer;
    font-family: inherit;
  }
  .pin-grid button:hover { border-color: var(--nb-muted); }
  .pin-grid button:disabled { opacity: 0.5; cursor: default; }
  .pw-err { display: block; margin: 10px 0 0; text-align: center; font-size: 12px; color: var(--nb-red); }
  .pin-footer {
    display: block;
    width: 100%;
    margin-top: 10px;
    background: transparent;
    border: none;
    color: var(--nb-muted);
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    font-family: inherit;
  }
  .pin-footer:hover { color: var(--nb-text); }
  `;
}
