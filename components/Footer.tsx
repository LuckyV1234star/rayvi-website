"use client";

import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { useLocale } from "@/components/GalleryShell";
import { legalCopy } from "@/lib/legal";

export function Footer() {
  const { locale, t } = useLocale();
  const pages = legalCopy[locale];

  return (
    <footer className="border-t border-white/16 px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-on-surface/75">© 2026 Rayvi</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="https://rayvi.net" className="text-on-surface/75 hover:text-on-surface">
            rayvi.net
          </a>
          <Link href="/privacy" className="text-on-surface/75 hover:text-on-surface">
            {pages.privacy.title}
          </Link>
          <Link href="/support" className="text-on-surface/75 hover:text-on-surface">
            {pages.support.title}
          </Link>
          <Link href="/terms" className="text-on-surface/75 hover:text-on-surface">
            {pages.terms.title}
          </Link>
          <a href="/#persona" className="text-on-surface underline decoration-(--demo-accent)/70 underline-offset-4">
            {t.hero.ctaSecondary}
          </a>
          <EarlyAccessForm source="footer" />
        </div>
      </div>
    </footer>
  );
}
