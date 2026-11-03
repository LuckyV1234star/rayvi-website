import type { ReactNode } from "react";

type ExhibitProps = {
  id: string;
  title: string;
  lede: string;
  children: ReactNode;
};

export function Exhibit({ id, title, lede, children }: ExhibitProps) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-lg">
          <div className="h-px w-14 bg-(--demo-accent)/70" />
          <h2 className="mt-6 text-2xl font-medium tracking-tight">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{lede}</p>
        </div>
        <div className="relative mt-14 px-2 md:mt-16 md:px-3">
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
      </div>
    </section>
  );
}
