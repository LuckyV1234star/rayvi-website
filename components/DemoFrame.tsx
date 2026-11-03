import type { CSSProperties, ReactNode } from "react";

type DemoFrameProps = {
  label: string;
  children: ReactNode;
  style?: CSSProperties;
};

export function DemoFrame({ label, children, style }: DemoFrameProps) {
  return (
    <div
      style={style}
      className="relative min-w-0 overflow-hidden rounded-2xl border border-(--demo-accent)/40 bg-container shadow-[0_0_0_1px_rgba(181,196,255,0.04)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--demo-accent)_18%,transparent),transparent_70%)]"
      />
      <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-1.5 rounded-full bg-(--demo-accent)" />
        <span className="size-1.5 rounded-full bg-secondary/80" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="ml-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          {label}
        </span>
      </div>
      <div className="relative p-4 sm:p-5">{children}</div>
    </div>
  );
}
