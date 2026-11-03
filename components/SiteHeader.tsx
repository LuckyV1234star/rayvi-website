"use client";

import { useLocale } from "@/components/GalleryShell";

export function SiteHeader() {
  const { locale, setLocale, t } = useLocale();
  const links = [
    { href: "#persona", label: t.nav.persona },
    { href: "#chat", label: t.nav.chat },
    { href: "#calendar", label: t.nav.calendar },
    { href: "#expenses", label: t.nav.expenses },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <a
        href="#content"
        className="absolute left-4 top-4 z-50 -translate-y-24 rounded-full bg-(--demo-accent) px-4 py-2 text-sm font-semibold text-(--demo-on) focus:translate-y-0"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3">
        <a href="#top" className="mr-auto font-medium tracking-tight text-on-surface">
          Rayvi
        </a>
        <nav aria-label={t.onThisPage} className="flex flex-wrap gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center px-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div role="group" aria-label={t.languageLabel} className="flex items-center">
          <LangButton
            pressed={locale === "en"}
            onClick={() => setLocale("en")}
            label="EN"
          />
          <span aria-hidden className="px-1 text-muted">
            /
          </span>
          <LangButton
            pressed={locale === "zh-Hant"}
            onClick={() => setLocale("zh-Hant")}
            label="中"
          />
        </div>
      </div>
    </header>
  );
}

function LangButton({
  pressed,
  onClick,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? "inline-flex min-h-11 items-center px-1 font-mono text-[11px] tracking-[0.14em] text-(--demo-secondary)"
          : "inline-flex min-h-11 items-center px-1 font-mono text-[11px] tracking-[0.14em] text-muted hover:text-on-surface"
      }
    >
      {label}
    </button>
  );
}
