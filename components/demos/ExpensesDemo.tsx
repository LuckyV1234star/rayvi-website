"use client";

import { useState } from "react";
import { DeviceStage } from "@/components/DeviceStage";
import { expenseMonths, formatMoney } from "@/lib/demo-data";

export function ExpensesDemo() {
  const [monthId, setMonthId] = useState(expenseMonths[1].id);
  const month = expenseMonths.find((item) => item.id === monthId) ?? expenseMonths[0];
  const max = Math.max(...month.categories.map((category) => category.amount));
  const total = month.categories.reduce((sum, category) => sum + category.amount, 0);

  return (
    <DeviceStage title="Expenses" active="Expenses">
      <div className="flex h-full min-h-0 flex-col">
        <div
          className="flex gap-2 overflow-x-auto border-b border-white/10 px-3 py-3"
          role="group"
          aria-label="Month"
        >
          {expenseMonths.map((item) => {
            const selected = item.id === month.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setMonthId(item.id)}
                className={
                  selected
                    ? "min-h-11 shrink-0 bg-(--demo-accent) px-4 text-sm font-semibold text-(--demo-on)"
                    : "min-h-11 shrink-0 border border-white/15 px-4 text-sm text-muted"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-4 md:px-5">
          <div>
            <p className="text-sm text-muted">
              Sample total{" "}
              <span className="font-medium text-on-surface">{formatMoney(total)}</span>
            </p>
            <svg
              viewBox="0 0 320 150"
              role="img"
              aria-label={`Spending by category in ${month.label}`}
              className="mt-2 w-full"
            >
              <line x1="16" y1="112" x2="304" y2="112" stroke="rgba(229,225,228,0.18)" />
              {month.categories.map((category, index) => {
                const height = Math.max((category.amount / max) * 88, 4);
                const x = 28 + index * 74;
                return (
                  <g key={category.name}>
                    <rect
                      x={x}
                      y={112 - height}
                      width="36"
                      height={height}
                      fill="var(--demo-accent)"
                    />
                    <text x={x + 18} y="128" textAnchor="middle" fill="#C5C6D0" fontSize="11">
                      {category.name}
                    </text>
                    <text
                      x={x + 18}
                      y={104 - height}
                      textAnchor="middle"
                      fill="#E5E1E4"
                      fontSize="11"
                    >
                      {formatMoney(category.amount)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <ul className="divide-y divide-white/10 border-t border-white/10 md:border-t-0 md:border-l md:pl-4">
            {month.items.map((item) => (
              <li key={item.id} className="flex items-baseline justify-between gap-3 py-2.5 text-sm">
                <span>
                  <span className="block text-on-surface">{item.title}</span>
                  <span className="text-xs text-muted">
                    {item.when} · {item.category}
                  </span>
                </span>
                <span className="font-mono text-on-surface">{formatMoney(item.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DeviceStage>
  );
}
