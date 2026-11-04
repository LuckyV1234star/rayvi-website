"use client";

import { useLocale } from "@/components/GalleryShell";
import { TESTFLIGHT_MAILTO } from "@/lib/site";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-white/16 px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-on-surface/75">© 2026 Rayvi</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="https://rayvi.net" className="text-on-surface/75 hover:text-on-surface">
            rayvi.net
          </a>
          <a href="#persona" className="text-on-surface underline decoration-(--demo-accent)/70 underline-offset-4">
            {t.hero.ctaSecondary}
          </a>
          <a
            href={TESTFLIGHT_MAILTO}
            className="inline-flex min-h-11 items-center rounded-full bg-(--demo-accent) px-5 text-sm font-medium text-(--demo-on)"
          >
            {t.hero.ctaPrimary}
          </a>
        </div>
      </div>
    </footer>
  );
}
