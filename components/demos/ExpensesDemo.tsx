"use client";

import { useState } from "react";
import { DemoFrame } from "@/components/DemoFrame";
import { expenseMonths, formatMoney } from "@/lib/demo-data";

export function ExpensesDemo() {
  const [monthId, setMonthId] = useState(expenseMonths[1].id);
  const month = expenseMonths.find((item) => item.id === monthId) ?? expenseMonths[0];
  const max = Math.max(...month.categories.map((category) => category.amount));
  const total = month.categories.reduce((sum, category) => sum + category.amount, 0);

  return (
    <DemoFrame label="Spending">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Month">
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
                  ? "min-h-11 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary"
                  : "min-h-11 rounded-full border border-white/15 px-4 text-sm text-muted"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted">
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
          const height = (category.amount / max) * 88;
          const x = 28 + index * 74;
          return (
            <g key={category.name}>
              <rect
                x={x}
                y={112 - height}
                width="36"
                height={height}
                rx="4"
                fill="#B5C4FF"
              />
              <text
                x={x + 18}
                y="128"
                textAnchor="middle"
                fill="#C5C6D0"
                fontSize="11"
              >
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

      <ul className="mt-2 divide-y divide-white/10 border-t border-white/10">
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
    </DemoFrame>
  );
}
