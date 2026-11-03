"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/components/GalleryShell";

type ExhibitProps = {
  id: "chat" | "calendar" | "expenses" | "persona";
  children: ReactNode;
};

export function Exhibit({ id, children }: ExhibitProps) {
  const { t } = useLocale();
  const exhibit = t.exhibits[id];

  return (
    <section id={id} className="scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <div className="max-w-lg">
          <div className="h-px w-14 bg-(--demo-accent)/70" />
          <h2 className="mt-6 text-2xl font-medium tracking-tight">{exhibit.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{exhibit.lede}</p>
        </div>
      </div>
      <div className="relative mt-14 px-5 md:mt-16">
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-5 w-5 border-t border-l border-(--demo-accent)/55"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-5 w-5 border-t border-r border-(--demo-accent)/55"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b border-l border-(--demo-accent)/55"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-5 w-5 border-r border-b border-(--demo-accent)/55"
          />
          <div className="py-3 md:py-4">{children}</div>
      </div>
    </section>
  );
}
