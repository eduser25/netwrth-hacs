import AccountsCard from "./cards/AccountsCard";
import StatCard from "./cards/StatCard";
import WorthCard from "./cards/WorthCard";
import { defineCard } from "./registerCard";

const themeField = {
  name: "theme",
  label: "Theme",
  selector: {
    select: {
      mode: "dropdown",
      options: [
        { value: "netboi", label: "netwrth (dark)" },
        { value: "ha", label: "Follow Home Assistant theme" },
      ],
    },
  },
};

const entryField = { name: "entry", label: "netwrth connection", selector: {} };
const titleField = { name: "title", label: "Title", selector: { text: {} } };
const viewField = {
  name: "view",
  label: "View",
  selector: {
    select: {
      mode: "dropdown",
      options: [
        { value: "daily", label: "Day-to-day (cash + credit)" },
        { value: "invest", label: "Investments" },
        { value: "all", label: "Everything" },
      ],
    },
  },
};
const rangeField = {
  name: "range",
  label: "Default range",
  selector: {
    select: {
      mode: "dropdown",
      options: ["1d", "1w", "1m", "3m", "6m", "1y", "all"].map((r) => ({ value: r, label: r })),
    },
  },
};
const modeToggleField = {
  name: "show_mode_selector",
  label: "Show mode selector",
  selector: { boolean: {} },
};
const rangeToggleField = {
  name: "show_range_selector",
  label: "Show range selector",
  selector: { boolean: {} },
};
const concealField = {
  name: "auto_conceal_minutes",
  label: "Auto-conceal after reveal (minutes, 0 = stay revealed)",
  selector: { number: { min: 0, max: 43200, mode: "box" } },
};
const compactField = {
  name: "compact",
  label: "Short axis amounts ($1.2M instead of $1,200,000)",
  selector: { boolean: {} },
};

defineCard({
  tag: "netboi-worth-card",
  name: "netwrth worth chart",
  description: "Your total over time — the netwrth dashboard chart.",
  component: WorthCard,
  schema: [
    titleField,
    entryField,
    viewField,
    {
      name: "mode",
      label: "Chart mode",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: "total", label: "Total" },
            { value: "stacked", label: "Stacked by account" },
            { value: "category", label: "Retirement vs taxable vs debt" },
            { value: "flow", label: "Net flow bars" },
          ],
        },
      },
    },
    rangeField,
    modeToggleField,
    rangeToggleField,
    compactField,
    concealField,
    themeField,
  ],
  stub: { view: "all", range: "6m" },
  size: 6,
});

defineCard({
  tag: "netboi-flow-card",
  name: "netwrth net flow",
  description: "Money kept vs burned per day/week/month (day-to-day accounts).",
  component: WorthCard,
  defaults: { view: "daily", mode: "flow" },
  schema: [
    titleField,
    entryField,
    rangeField,
    modeToggleField,
    rangeToggleField,
    compactField,
    concealField,
    themeField,
  ],
  stub: { range: "3m" },
  size: 6,
});

defineCard({
  tag: "netboi-stat-card",
  name: "netwrth stat",
  description: "One big number with its change over a window.",
  component: StatCard,
  schema: [titleField, entryField, viewField, rangeField, rangeToggleField, concealField, themeField],
  stub: { view: "all", range: "1m" },
  size: 2,
});

defineCard({
  tag: "netboi-accounts-card",
  name: "netwrth accounts",
  description: "Accounts grouped by kind with balances and sync freshness.",
  component: AccountsCard,
  schema: [
    titleField,
    entryField,
    viewField,
    rangeField,
    rangeToggleField,
    {
      name: "accounts",
      label: "Only these accounts (name match, empty = all)",
      selector: { text: { multiple: true } },
    },
    concealField,
    themeField,
  ],
  stub: { view: "all", range: "1m" },
  size: 4,
});

// eslint-disable-next-line no-console
console.info("%c netboi cards %c loaded", "background:#60a5fa;color:#0b0f17;border-radius:3px 0 0 3px;padding:1px 4px", "background:#17202f;color:#e6edf7;border-radius:0 3px 3px 0;padding:1px 4px");
