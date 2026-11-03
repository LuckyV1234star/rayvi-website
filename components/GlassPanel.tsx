import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/[0.06] bg-[linear-gradient(to_bottom_right,rgba(229,225,228,0.04),transparent),rgba(32,31,33,0.55)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
