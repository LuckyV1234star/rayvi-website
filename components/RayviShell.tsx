"use client";

import { useState, type ReactNode } from "react";
import { useLocale } from "@/components/GalleryShell";

const navIds = ["assistant", "calendar", "tasks", "expenses", "health", "memory"] as const;

export type RayviSection = (typeof navIds)[number] | "settings";

type RayviShellProps = {
  active: RayviSection;
  title: string | null;
  children: ReactNode;
};

export function RayviPortrait({
  size,
  className = "",
}: {
  size: number;
  className?: string;
}) {
  return (
    <img
      src="/rayvi/portrait.png"
      alt=""
      width={size}
      height={size}
      className={`inline-block shrink-0 rounded-full object-cover object-top ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function RayviStatusLine({
  centered = false,
  className = "",
}: {
  centered?: boolean;
  className?: string;
}) {
  const { locale, t } = useLocale();
  const text = t.shell.status.trim() || t.shell.steady;
  const track = locale === "zh-Hant" ? "tracking-normal" : "tracking-[2px]";
  return (
    <p
      className={`flex gap-1.5 font-mono text-[11px] leading-snug text-muted ${track} ${centered ? "items-start justify-center text-left" : "items-start"} ${className}`}
    >
      <Pulse />
      <span className="line-clamp-3">{text}</span>
    </p>
  );
}

export function RayviShell({ active, title, children }: RayviShellProps) {
  const { locale, t } = useLocale();
  const [drawer, setDrawer] = useState(false);
  const nav = [
    { id: "assistant" as const, label: "Rayvi" },
    { id: "calendar" as const, label: t.shell.calendar },
    { id: "tasks" as const, label: t.shell.tasks },
    { id: "expenses" as const, label: t.shell.expenses },
    { id: "health" as const, label: t.shell.health },
    { id: "memory" as const, label: t.shell.memory },
  ];
  const wideTrack = locale === "zh-Hant" ? "" : "uppercase tracking-[2px]";

  return (
    <div className="mx-auto w-full max-w-[23.5rem] rayvi:max-w-none">
      <div className="rounded-[2.4rem] border border-white/15 bg-[#08080a] p-2 rayvi:rounded-xl rayvi:border-white/10 rayvi:bg-transparent rayvi:p-0">
        <div className="relative flex h-[40rem] min-h-[40rem] overflow-hidden rounded-[1.85rem] bg-bg rayvi:h-[64rem] rayvi:min-h-[64rem] rayvi:rounded-[11px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--demo-accent)_12%,transparent),transparent_55%)]"
          />
          <aside className="relative hidden w-64 shrink-0 flex-col border-r border-white/[0.05] bg-container-high/80 rayvi:flex">
            <div className="px-6 pt-8 pb-6 text-center">
              <RayviPortrait size={64} />
              <p className="mt-3 text-xl font-semibold tracking-tight">Rayvi</p>
              <RayviStatusLine centered className="mt-2" />
            </div>
            <div className="mx-4 h-px bg-white/10" />
            <nav className="mt-3 flex flex-1 flex-col" aria-label="Rayvi">
              {nav.map((item) => (
                <NavRow key={item.id} id={item.id} label={item.label} active={item.id === active} />
              ))}
              <div className="mt-auto mb-3">
                <div className="mx-4 mb-3 h-px bg-white/10" />
                <NavRow id="settings" label={t.shell.settings} active={active === "settings"} />
              </div>
            </nav>
          </aside>

          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            {title ? (
              <div className="flex items-center gap-1 border-b border-white/10 bg-bg/60 px-2 py-1 backdrop-blur-md rayvi:hidden">
                <IconButton label={t.shell.menu} onClick={() => setDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <p className="flex-1 text-center text-lg font-medium tracking-tight text-(--demo-secondary)">
                  {title}
                </p>
                <IconButton label={t.shell.settings}>
                  <SettingsIcon />
                </IconButton>
              </div>
            ) : (
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between p-3 rayvi:hidden">
                <IconButton label={t.shell.menu} onClick={() => setDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <IconButton label={t.shell.settings}>
                  <SettingsIcon />
                </IconButton>
              </div>
            )}
            <div className="relative min-h-0 flex-1">{children}</div>
            <div className="flex justify-center py-2 rayvi:hidden" aria-hidden>
              <span className="h-1 w-24 rounded-full bg-white/30" />
            </div>
          </div>

          {drawer ? (
            <div className="absolute inset-0 z-20 rayvi:hidden">
              <button
                type="button"
                aria-label={t.shell.close}
                className="absolute inset-0 bg-black/45"
                onClick={() => setDrawer(false)}
              />
              <div className="absolute inset-y-0 left-0 flex w-72 flex-col overflow-hidden rounded-r-3xl border-r border-white/10 bg-container-high/90 backdrop-blur-xl">
                <div className="flex flex-1 flex-col justify-end bg-[linear-gradient(to_bottom,transparent,#131315)] px-5 pb-5">
                  <RayviPortrait size={64} />
                  <p className="mt-3 text-lg font-medium">Rayvi</p>
                  <RayviStatusLine className="mt-1" />
                </div>
                <ul className="flex flex-1 flex-col gap-1 px-3 py-3">
                  {nav.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setDrawer(false)}
                        className={
                          item.id === active
                            ? `flex w-full items-center gap-4 rounded-2xl bg-(--demo-secondary)/10 px-5 py-4 text-left font-mono text-xs text-(--demo-secondary) ${wideTrack}`
                            : `flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left font-mono text-xs text-muted ${wideTrack}`
                        }
                      >
                        <NavIcon id={item.id} />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function NavRow({
  id,
  label,
  active,
}: {
  id: RayviSection;
  label: string;
  active: boolean;
}) {
  return (
    <span className="px-4 py-0.5">
      <span
        aria-current={active ? "page" : undefined}
        className={
          active
            ? "flex items-center gap-4 rounded-xl bg-primary-container/10 px-5 py-3.5 font-mono text-xs font-bold tracking-[1px] text-(--demo-secondary) shadow-[inset_-2px_0_0_var(--demo-secondary)]"
            : "flex items-center gap-4 rounded-xl px-5 py-3.5 font-mono text-xs tracking-[1px] text-muted"
        }
      >
        <NavIcon id={id} />
        {label}
      </span>
    </span>
  );
}

function NavIcon({ id }: { id: RayviSection }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };
  if (id === "assistant") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19" />
      </svg>
    );
  }
  if (id === "calendar") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3.5V7M16 3.5V7M4 10h16" />
      </svg>
    );
  }
  if (id === "tasks") {
    return (
      <svg {...common}>
        <path d="M8 7h11M8 12h11M8 17h11" />
        <path d="M4.5 7.2l1 1 1.6-2M4.5 12.2l1 1 1.6-2M4.5 17.2l1 1 1.6-2" />
      </svg>
    );
  }
  if (id === "expenses") {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }
  if (id === "health") {
    return (
      <svg {...common}>
        <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />
      </svg>
    );
  }
  if (id === "memory") {
    return (
      <svg {...common}>
        <path d="M6 5h9a3 3 0 0 1 3 3v12H9a3 3 0 0 1-3-3V5z" />
        <path d="M9 5v12" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </svg>
  );
}

function Pulse() {
  return (
    <span className="relative mt-1 inline-flex size-2 shrink-0">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-(--demo-secondary) opacity-60 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2 rounded-full bg-(--demo-secondary)" />
    </span>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full bg-container-high/75 text-(--demo-secondary) shadow-md"
    >
      {children}
    </button>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <circle cx="9" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9 1.8v1.6M9 14.6v1.6M1.8 9h1.6M14.6 9h1.6M3.7 3.7l1.1 1.1M13.2 13.2l1.1 1.1M14.3 3.7l-1.1 1.1M4.8 13.2l-1.1 1.1"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}
