import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Account, ChartMode, RangeKey } from "../lib/types";
import { Row, debtOfRow, flowSeries, sumRow } from "../lib/series";
import { money, moneyCompact, pct, shortDate, signedMoney } from "../lib/format";

export type { ChartMode };

// Y-axis width sized to what the ticks actually render (Recharts has no
// auto-fit), so the plot area claims the rest of the card.
function yAxisWidth(fmt: (v: number) => string, values: (number | null)[]): number {
  let lo = 0;
  let hi = 0;
  for (const v of values) {
    if (v == null || !isFinite(v)) continue;
    if (v < lo) lo = v;
    if (v > hi) hi = v;
  }
  let maxLen = 1;
  for (const v of [lo, hi]) maxLen = Math.max(maxLen, fmt(v).length);
  return Math.min(90, Math.ceil(maxLen * 7) + 14);
}

// Recharts' default margins add dead space on top of the axis width.
const MARGIN = { top: 8, right: 12, bottom: 0, left: 0 };

const PALETTE = [
  "#60a5fa", "#34d399", "#fbbf24", "#f472b6", "#a78bfa",
  "#22d3ee", "#fb923c", "#4ade80", "#e879f9", "#93c5fd",
];

const axisStyle = { fill: "#8b9bb4", fontSize: 12 };
const tooltipStyle = {
  backgroundColor: "#17202f",
  border: "1px solid #223047",
  borderRadius: 8,
  color: "#e6edf7",
  fontSize: 13,
};

export default function Chart({
  rows,
  accounts,
  mode,
  range,
  masked = false,
  compact = true,
}: {
  rows: Row[];
  accounts: Account[];
  mode: ChartMode;
  range: RangeKey;
  masked?: boolean;
  compact?: boolean;
}) {
  const withTime = range === "1d" || range === "1w";
  const fmtX = (ts: number) => shortDate(ts, withTime);
  // Censored, total/category modes: series are rebased to "% change since the
  // window start" (first point = 0%), matching the stat-card percentages.
  // The stacked mode instead keeps the backend's %-of-net-worth scale, since
  // stacking per-account % changes would be meaningless.
  const rel = (v: number, base: number) =>
    base !== 0 ? (v - base) / Math.abs(base) : null;
  const axisMoney = compact ? moneyCompact : money;
  const fmtY = (v: number) => (masked ? pct(v) : axisMoney(v));
  const fmtVal = (v: number) => (masked ? pct(v) : money(v, true));

  if (mode === "flow") {
    const data = flowSeries(rows, accounts, range);
    const fmtFlow = (v: number) => (masked ? v.toFixed(2) : signedMoney(v));
    const fmtYFlow = (v: number) => (masked ? v.toFixed(1) : axisMoney(v));
    return (
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data} margin={MARGIN}>
          <CartesianGrid stroke="#223047" strokeDasharray="3 3" />
          <XAxis dataKey="ts" tickFormatter={(ts) => shortDate(ts as number)} tick={axisStyle} minTickGap={40} />
          <YAxis tickFormatter={(v) => fmtYFlow(v as number)} tick={axisStyle} width={yAxisWidth(fmtYFlow, data.map((d) => d.flow))} />
          <Tooltip
            contentStyle={tooltipStyle}
            labelFormatter={(ts) => shortDate(ts as number)}
            formatter={(v) => [fmtFlow(v as number), "Net flow"]}
            cursor={{ fill: "#223047", fillOpacity: 0.4 }}
          />
          <Bar dataKey="flow" radius={[3, 3, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.flow >= 0 ? "#34d399" : "#f87171"} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (mode === "total") {
    const base = sumRow(rows[0], accounts);
    const data = rows.map((r) => {
      const total = sumRow(r, accounts);
      return { ts: r.ts, total: masked ? rel(total, base) : total };
    });
    return (
      <ResponsiveContainer width="100%" height={340}>
        <AreaChart data={data} margin={MARGIN}>
          <defs>
            <linearGradient id="nw" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#223047" strokeDasharray="3 3" />
          <XAxis dataKey="ts" tickFormatter={fmtX} tick={axisStyle} minTickGap={40} />
          <YAxis tickFormatter={fmtY} tick={axisStyle} width={yAxisWidth(fmtY, data.map((d) => d.total))} domain={["auto", "auto"]} />
          <Tooltip
            contentStyle={tooltipStyle}
            labelFormatter={(ts) => shortDate(ts as number, true)}
            formatter={(v) => [fmtVal(v as number), "Net worth"]}
          />
          <Area type="monotone" dataKey="total" stroke="#60a5fa" strokeWidth={2} fill="url(#nw)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (mode === "category") {
    const isRet = (a: Account) => a.category === "retirement";
    const bases = {
      retirement: sumRow(rows[0], accounts, isRet),
      other: sumRow(rows[0], accounts, (a) => !isRet(a)),
      debt: debtOfRow(rows[0], accounts),
    };
    const data = rows.map((r) => {
      const retirement = sumRow(r, accounts, isRet);
      const other = sumRow(r, accounts, (a) => !isRet(a));
      const debt = debtOfRow(r, accounts);
      return masked
        ? {
            ts: r.ts,
            retirement: rel(retirement, bases.retirement),
            other: rel(other, bases.other),
            debt: rel(debt, bases.debt),
          }
        : { ts: r.ts, retirement, other, debt };
    });
    return (
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={MARGIN}>
          <CartesianGrid stroke="#223047" strokeDasharray="3 3" />
          <XAxis dataKey="ts" tickFormatter={fmtX} tick={axisStyle} minTickGap={40} />
          <YAxis
            tickFormatter={fmtY}
            tick={axisStyle}
            width={yAxisWidth(fmtY, data.flatMap((d) => [d.retirement, d.other, d.debt]))}
            domain={["auto", "auto"]}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelFormatter={(ts) => shortDate(ts as number, true)}
            formatter={(v, name) => [fmtVal(v as number), name as string]}
          />
          <Line type="monotone" dataKey="retirement" stroke="#34d399" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="other" stroke="#60a5fa" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="debt" stroke="#f87171" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  // stacked mode below: censored values stay on the %-of-net-worth scale
  const fmtYStacked = (v: number) => (masked ? v.toFixed(1) : axisMoney(v));
  const fmtValStacked = (v: number) => (masked ? v.toFixed(2) : money(v, true));

  // stacked: assets stack as areas; debt (if any) drawn as a line below zero
  const assetAccounts = accounts.filter((a) => {
    const last = rows[rows.length - 1]?.values[a.id] ?? 0;
    return last >= 0;
  });
  const hasDebt = accounts.length > assetAccounts.length;
  const data = rows.map((r) => {
    const d: Record<string, number> = { ts: r.ts };
    for (const a of assetAccounts) d[`a${a.id}`] = r.values[a.id] ?? 0;
    if (hasDebt) d.debt = debtOfRow(r, accounts);
    return d;
  });
  // Axis extent for the stack: sum of assets per row, debt below zero.
  const stackExtent = data.flatMap((d) => [
    assetAccounts.reduce((sum, a) => sum + ((d[`a${a.id}`] as number) ?? 0), 0),
    (d.debt as number) ?? 0,
  ]);
  return (
    <ResponsiveContainer width="100%" height={340}>
      <AreaChart data={data} margin={MARGIN}>
        <CartesianGrid stroke="#223047" strokeDasharray="3 3" />
        <XAxis dataKey="ts" tickFormatter={fmtX} tick={axisStyle} minTickGap={40} />
        <YAxis tickFormatter={fmtYStacked} tick={axisStyle} width={yAxisWidth(fmtYStacked, stackExtent)} domain={["auto", "auto"]} />
        <Tooltip
          contentStyle={tooltipStyle}
          labelFormatter={(ts) => shortDate(ts as number, true)}
          formatter={(v, name) => {
            const acc = assetAccounts.find((a) => `a${a.id}` === name);
            return [fmtValStacked(v as number), acc ? `${acc.org_name || acc.org_domain} · ${acc.nickname || acc.name}` : "Debt"];
          }}
        />
        {assetAccounts.map((a, i) => (
          <Area
            key={a.id}
            type="monotone"
            dataKey={`a${a.id}`}
            stackId="assets"
            stroke={PALETTE[i % PALETTE.length]}
            fill={PALETTE[i % PALETTE.length]}
            fillOpacity={0.35}
          />
        ))}
        {hasDebt && (
          <Area type="monotone" dataKey="debt" stroke="#f87171" fill="#f87171" fillOpacity={0.25} />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
}
