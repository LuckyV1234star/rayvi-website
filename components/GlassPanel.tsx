import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-container-high/55 shadow-[inset_0_1px_0_rgba(229,225,228,0.08)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
