"use client";

import { useLocale } from "@/components/GalleryShell";

const mailto = "mailto:hello@rayvi.net?subject=Rayvi%20TestFlight";

export function Cta() {
  const { t } = useLocale();

  return (
    <section id="invite" className="scroll-mt-24 px-5 py-28 md:py-36">
      <div className="mx-auto max-w-5xl border-t border-white/12 pt-12">
        <div className="max-w-xl border-l border-(--demo-accent)/45 pl-6">
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            {t.cta.kicker}
          </p>
          <h2 className="mt-6 text-3xl font-medium tracking-tight">{t.cta.title}</h2>
          <p className="mt-4 text-muted">{t.cta.body}</p>
          <a
            href={mailto}
            className="mt-8 inline-flex min-h-11 items-center border-b border-(--demo-accent) pb-1 text-sm text-on-surface"
          >
            {t.cta.action}
          </a>
          <p className="mt-4 max-w-md text-sm text-muted">{t.cta.note}</p>
        </div>
      </div>
    </section>
  );
}
