import type { ReactNode } from "react";

const sections = ["Assistant", "Calendar", "Expenses", "Persona"] as const;

type DeviceStageProps = {
  title: string;
  active: (typeof sections)[number];
  children: ReactNode;
};

export function DeviceStage({ title, active, children }: DeviceStageProps) {
  return (
    <div className="mx-auto w-full max-w-[23.5rem] md:max-w-none">
      <div className="rounded-[2.4rem] border border-white/18 bg-[#08080a] p-2.5 md:rounded-xl md:border-(--demo-accent)/35 md:bg-container md:p-0">
        <div className="flex h-[38rem] flex-col overflow-hidden rounded-[1.85rem] bg-container md:h-[34rem] md:rounded-[11px] md:bg-transparent">
          <div
            className="flex items-center justify-between px-5 pt-3 pb-2 md:hidden"
            aria-hidden
          >
            <span className="font-mono text-[11px] tracking-wide text-on-surface">9:41</span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {title}
            </span>
            <span className="flex items-end gap-0.5">
              <span className="h-1.5 w-px bg-on-surface/70" />
              <span className="h-2 w-px bg-on-surface/70" />
              <span className="h-2.5 w-px bg-(--demo-accent)" />
            </span>
          </div>

          <div className="hidden items-center gap-3 border-b border-white/10 px-4 py-2.5 md:flex">
            <span
              aria-hidden
              className="size-2 rounded-[2px] border border-(--demo-accent)"
            />
            <span className="text-sm tracking-tight">Rayvi</span>
            <span className="ml-auto font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {title}
            </span>
          </div>

          <div className="flex min-h-0 flex-1">
            <aside className="hidden w-40 shrink-0 flex-col border-r border-white/10 py-3 md:flex">
              <p className="px-4 pb-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                Rayvi
              </p>
              <ul>
                {sections.map((section) => {
                  const current = section === active;
                  return (
                    <li key={section}>
                      <span
                        aria-current={current ? "page" : undefined}
                        className={
                          current
                            ? "block border-l-2 border-(--demo-accent) bg-(--demo-accent)/12 px-4 py-2 text-sm text-on-surface"
                            : "block border-l-2 border-transparent px-4 py-2 text-sm text-muted"
                        }
                      >
                        {section}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </aside>
            <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">{children}</div>
          </div>

          <div className="flex justify-center pt-1 pb-2 md:hidden" aria-hidden>
            <span className="h-1 w-24 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
