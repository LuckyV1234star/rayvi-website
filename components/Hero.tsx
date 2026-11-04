"use client";

import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { useLocale } from "@/components/GalleryShell";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="px-5 pt-24 pb-6 md:pt-28 md:pb-2">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl border-l border-(--demo-accent)/45 pl-6 md:pl-8">
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            {t.hero.kicker}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-on-surface/80">{t.hero.lede}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <EarlyAccessForm source="hero" />
            <a href="#persona" className="text-sm text-on-surface underline decoration-(--demo-accent)/70 underline-offset-4">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
