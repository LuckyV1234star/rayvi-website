"use client";

import { useState, type ReactNode } from "react";

const nav = [
  { id: "assistant", label: "Rayvi" },
  { id: "calendar", label: "Calendar" },
  { id: "tasks", label: "Tasks" },
  { id: "expenses", label: "Expenses" },
  { id: "health", label: "Health" },
  { id: "memory", label: "Memory" },
] as const;

export type RayviSection = (typeof nav)[number]["id"] | "settings";

type RayviShellProps = {
  active: RayviSection;
  title: string | null;
  children: ReactNode;
};

export function RayviShell({ active, title, children }: RayviShellProps) {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[23.5rem] rayvi:max-w-none">
      <div className="rounded-[2.4rem] border border-white/15 bg-[#08080a] p-2 rayvi:rounded-xl rayvi:border-white/10 rayvi:bg-transparent rayvi:p-0">
        <div className="relative flex h-[40rem] overflow-hidden rounded-[1.85rem] bg-bg rayvi:h-[42rem] rayvi:rounded-[11px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--demo-accent)_12%,transparent),transparent_55%)]"
          />
          <aside className="relative hidden w-64 shrink-0 flex-col border-r border-white/8 bg-container-high/80 rayvi:flex">
            <div className="px-6 pt-8 pb-6 text-center">
              <Avatar size={64} />
              <p className="mt-3 text-xl font-semibold tracking-tight">Rayvi</p>
              <p className="mt-2 flex items-center justify-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                <Pulse />
                Steady
              </p>
            </div>
            <div className="mx-4 h-px bg-white/10" />
            <nav className="mt-3 flex flex-1 flex-col px-4" aria-label="Rayvi">
              {nav.map((item) => (
                <NavRow key={item.id} label={item.label} active={item.id === active} />
              ))}
              <div className="mt-auto mb-3">
                <div className="mb-3 h-px bg-white/10" />
                <NavRow label="Settings" active={active === "settings"} />
              </div>
            </nav>
          </aside>

          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            {title ? (
              <div className="flex items-center gap-1 border-b border-white/10 bg-bg/60 px-2 py-1 backdrop-blur-md rayvi:hidden">
                <IconButton label="Open menu" onClick={() => setDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <p className="flex-1 text-center text-lg font-medium tracking-tight text-(--demo-secondary)">
                  {title}
                </p>
                <IconButton label="Settings">
                  <SettingsIcon />
                </IconButton>
              </div>
            ) : (
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between p-3 rayvi:hidden">
                <IconButton label="Open menu" onClick={() => setDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <IconButton label="Settings">
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
                aria-label="Close menu"
                className="absolute inset-0 bg-black/45"
                onClick={() => setDrawer(false)}
              />
              <div className="absolute inset-y-0 left-0 flex w-72 flex-col overflow-hidden rounded-r-3xl border-r border-white/10 bg-container-high/90 backdrop-blur-xl">
                <div className="flex flex-1 flex-col justify-end bg-[linear-gradient(to_bottom,transparent,#131315)] px-5 pb-4">
                  <Avatar size={72} />
                  <p className="mt-3 text-lg font-semibold">Rayvi</p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    <Pulse />
                    Steady
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-2 px-4 py-4">
                  {nav.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setDrawer(false)}
                        className={
                          item.id === active
                            ? "w-full rounded-xl bg-(--demo-accent)/10 px-4 py-3 text-left font-mono text-xs tracking-wide text-(--demo-secondary)"
                            : "w-full rounded-xl px-4 py-3 text-left font-mono text-xs tracking-wide text-muted"
                        }
                      >
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

function NavRow({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "mb-0.5 flex items-center rounded-xl bg-primary-container/10 px-5 py-3.5 font-mono text-xs font-bold tracking-wide text-(--demo-secondary) shadow-[inset_-2px_0_0_var(--demo-secondary)]"
          : "mb-0.5 flex items-center rounded-xl px-5 py-3.5 font-mono text-xs tracking-wide text-muted"
      }
    >
      {label}
    </span>
  );
}

function Avatar({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border border-(--demo-accent)/40 bg-container font-medium text-(--demo-accent)"
      style={{ width: size, height: size }}
    >
      RV
    </span>
  );
}

function Pulse() {
  return (
    <span className="relative inline-flex size-2">
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
