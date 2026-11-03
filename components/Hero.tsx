"use client";

import { useLocale } from "@/components/GalleryShell";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="px-5 pt-28 pb-8 md:pt-40 md:pb-4">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl border-l border-(--demo-accent)/45 pl-6 md:pl-8">
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            {t.hero.kicker}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{t.hero.lede}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a
              href="#persona"
              className="border-b border-(--demo-accent)/70 pb-1 text-on-surface"
            >
              {t.hero.enter}
            </a>
            <a href="#invite" className="text-muted hover:text-on-surface">
              {t.hero.testflight}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

