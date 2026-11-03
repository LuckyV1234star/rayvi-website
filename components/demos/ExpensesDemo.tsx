"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/GlassPanel";
import { RayviShell } from "@/components/RayviShell";
import { expenseMonths, formatMoney, type ExpenseMonth } from "@/lib/demo-data";

type ChartMode = "line" | "pie" | "bar";

export function ExpensesDemo() {
  const [monthId, setMonthId] = useState("2026-11");
  const [mode, setMode] = useState<ChartMode>("pie");
  const [category, setCategory] = useState<string | null>(null);
  const month = expenseMonths.find((item) => item.id === monthId) ?? expenseMonths[2];
  const output = month.categories.reduce((sum, item) => sum + item.amount, 0);
  const reserves = month.intake - output;
  const items = category ? month.items.filter((item) => item.category === category) : month.items;
  const top = [...month.categories].sort((a, b) => b.amount - a.amount)[0];

  function pickMonth(id: string) {
    setMonthId(id);
    setCategory(null);
  }

  return (
    <RayviShell active="expenses" title="Expenses">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex gap-2 overflow-x-auto px-5 py-2">
          {expenseMonths.map((item) => {
            const on = item.id === month.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => pickMonth(item.id)}
                className={
                  on
                    ? "min-h-9 shrink-0 rounded-full bg-(--demo-accent) px-3 text-xs font-semibold text-(--demo-on)"
                    : "min-h-9 shrink-0 rounded-full border border-white/15 px-3 text-xs text-muted"
                }
              >
                {item.id === "2026-11" ? "This Month" : item.chip}
              </button>
            );
          })}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-2 pb-6 rayvi:hidden">
          <p className="font-mono text-[11px] tracking-[0.16em] text-(--demo-secondary)">Observation</p>
          <h3 className="mt-1 text-2xl">Financial Overview</h3>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <Stat label="Spent" value={formatMoney(output)} />
            <Stat label="Count" value={String(month.items.length)} />
            <Stat label="Top" value={`${top.name} ${Math.round((top.amount / output) * 100)}%`} />
          </div>
          <GlassPanel className="mt-3 p-3">
            <div className="flex items-center gap-2">
              <p className="font-mono text-[11px] tracking-[0.14em]">
                {mode === "line" ? "Daily usage" : mode === "pie" ? "By type" : "Resource allocation"}
              </p>
              <p className="ml-auto font-mono text-[10px] text-muted">{month.label}</p>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1 rounded-full bg-container-high/40 p-1" role="group" aria-label="Chart">
              {(["line", "pie", "bar"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={mode === item}
                  onClick={() => setMode(item)}
                  className={
                    mode === item
                      ? "h-7 rounded-full bg-container-high font-mono text-[10px] tracking-wide"
                      : "h-7 rounded-full font-mono text-[10px] tracking-wide text-muted"
                  }
                >
                  {item === "line" ? "Line" : item === "pie" ? "Pie" : "Bar"}
                </button>
              ))}
            </div>
            <div className="mt-2 h-[190px]">
              <Chart month={month} mode={mode} category={category} onPick={setCategory} />
            </div>
          </GlassPanel>
          <div className="mt-4 flex flex-wrap gap-2">
            {month.categories.map((item) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={category === item.name}
                onClick={() => setCategory(category === item.name ? null : item.name)}
                className="min-h-9 rounded-full border border-white/15 px-3 text-xs"
              >
                {item.name}
              </button>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.14em]">Recent activity</p>
          <ul className="mt-2 space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <GlassPanel className="flex items-center justify-between px-3 py-3 text-sm">
                  <span>
                    <span className="block">{item.title}</span>
                    <span className="text-xs text-muted">
                      {item.when} · {item.category}
                    </span>
                  </span>
                  <span className="font-mono">{formatMoney(item.amount)}</span>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden min-h-0 flex-1 flex-col px-8 pt-2 pb-6 rayvi:flex">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-medium">Financial Overview</h3>
          </div>
          <div className="mt-4 flex min-h-0 flex-1 gap-6">
            <div className="flex min-h-0 min-w-0 flex-[8] flex-col gap-3">
              <div className="grid grid-cols-3 gap-3">
                <Stat label="Total Output" value={formatMoney(output)} caption={month.label} />
                <Stat label="Total Intake" value={formatMoney(month.intake)} caption={month.label} />
                <Stat label="Reserves" value={formatMoney(reserves)} caption={month.label} />
              </div>
              <GlassPanel className="min-h-[140px] flex-1 p-4">
                <ChartTitle title="Daily usage" caption={month.label} />
                <div className="mt-2 h-[calc(100%-1.5rem)] min-h-[100px]">
                  <Chart month={month} mode="line" category={category} onPick={setCategory} />
                </div>
              </GlassPanel>
              <div className="grid min-h-[140px] flex-1 grid-cols-2 gap-3">
                <GlassPanel className="p-4">
                  <ChartTitle title="By type" caption={month.label} />
                  <div className="mt-2 h-[calc(100%-1.5rem)] min-h-[100px]">
                    <Chart month={month} mode="pie" category={category} onPick={setCategory} />
                  </div>
                </GlassPanel>
                <GlassPanel className="p-4">
                  <ChartTitle title="Resource allocation" caption={month.label} />
                  <div className="mt-2 h-[calc(100%-1.5rem)] min-h-[100px]">
                    <Chart month={month} mode="bar" category={category} onPick={setCategory} />
                  </div>
                </GlassPanel>
              </div>
            </div>
            <GlassPanel className="flex min-h-0 flex-[4] flex-col p-4">
              <p className="font-mono text-[11px] tracking-[0.14em]">Recent activity</p>
              <ul className="mt-3 min-h-0 flex-1 space-y-3 overflow-y-auto">
                {items.map((item) => (
                  <li key={item.id} className="border-b border-white/8 pb-2 text-sm">
                    <span className="flex justify-between gap-2">
                      <span>{item.title}</span>
                      <span className="font-mono">{formatMoney(item.amount)}</span>
                    </span>
                    <span className="text-xs text-muted">
                      {item.when} · {item.category}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>
        </div>
      </div>
    </RayviShell>
  );
}

function Stat({ label, value, caption }: { label: string; value: string; caption?: string }) {
  return (
    <GlassPanel className="px-3 py-3">
      <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{label}</p>
      <p className="mt-1 text-lg font-medium text-(--demo-accent)">{value}</p>
      {caption ? <p className="mt-1 font-mono text-[10px] text-muted">{caption}</p> : null}
    </GlassPanel>
  );
}

function ChartTitle({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase">{title}</p>
      <p className="ml-auto font-mono text-[10px] text-muted">{caption}</p>
    </div>
  );
}

function Chart({
  month,
  mode,
  category,
  onPick,
}: {
  month: ExpenseMonth;
  mode: ChartMode;
  category: string | null;
  onPick: (name: string | null) => void;
}) {
  if (mode === "line") return <LineChart values={month.daily} />;
  if (mode === "bar") {
    return <BarChart month={month} category={category} onPick={onPick} />;
  }
  return <PieChart month={month} category={category} onPick={onPick} />;
}

function LineChart({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 300 + 8;
      const y = 110 - (value / max) * 90;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 316 120" className="h-full w-full" role="img" aria-label="Daily spending">
      <polyline fill="none" stroke="var(--demo-accent)" strokeWidth="2" points={points} />
    </svg>
  );
}

function BarChart({
  month,
  category,
  onPick,
}: {
  month: ExpenseMonth;
  category: string | null;
  onPick: (name: string | null) => void;
}) {
  const max = Math.max(...month.categories.map((item) => item.amount));
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" role="img" aria-label="Spending by category">
      {month.categories.map((item, index) => {
        const height = (item.amount / max) * 78;
        const x = 24 + index * 74;
        const on = category === item.name;
        return (
          <g key={item.name} onClick={() => onPick(on ? null : item.name)} className="cursor-pointer">
            <rect
              x={x}
              y={96 - height}
              width="36"
              height={height}
              fill={on ? "var(--demo-secondary)" : "var(--demo-accent)"}
            />
            <text x={x + 18} y="112" textAnchor="middle" fill="#C5C6D0" fontSize="11">
              {item.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PieChart({
  month,
  category,
  onPick,
}: {
  month: ExpenseMonth;
  category: string | null;
  onPick: (name: string | null) => void;
}) {
  const total = month.categories.reduce((sum, item) => sum + item.amount, 0);
  let cursor = 0;
  const colors = ["var(--demo-accent)", "var(--demo-secondary)", "#7F8EC7", "#C5C6D0"];
  return (
    <svg viewBox="0 0 120 120" className="mx-auto h-full" role="img" aria-label="Spending by type">
      {month.categories.map((item, index) => {
        const start = cursor / total;
        cursor += item.amount;
        const end = cursor / total;
        const on = category === item.name;
        return (
          <path
            key={item.name}
            d={slicePath(60, 60, 46, start, end)}
            fill={colors[index % colors.length]}
            opacity={category && !on ? 0.35 : 1}
            className="cursor-pointer"
            onClick={() => onPick(on ? null : item.name)}
          />
        );
      })}
      <circle cx="60" cy="60" r="24" fill="#131315" />
    </svg>
  );
}

function slicePath(cx: number, cy: number, radius: number, start: number, end: number) {
  const a0 = start * Math.PI * 2 - Math.PI / 2;
  const a1 = end * Math.PI * 2 - Math.PI / 2;
  const large = end - start > 0.5 ? 1 : 0;
  const x0 = cx + radius * Math.cos(a0);
  const y0 = cy + radius * Math.sin(a0);
  const x1 = cx + radius * Math.cos(a1);
  const y1 = cy + radius * Math.sin(a1);
  return `M ${cx} ${cy} L ${x0} ${y0} A ${radius} ${radius} 0 ${large} 1 ${x1} ${y1} Z`;
}
