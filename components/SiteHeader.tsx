const links = [
  { href: "#chat", label: "Chat" },
  { href: "#calendar", label: "Calendar" },
  { href: "#expenses", label: "Expenses" },
  { href: "#persona", label: "Persona" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3">
        <a href="#top" className="mr-auto font-medium tracking-tight text-on-surface">
          Rayvi
        </a>
        <nav aria-label="On this page" className="flex flex-wrap gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-2.5 font-mono text-[11px] tracking-[0.12em] text-muted uppercase motion-safe:transition-colors motion-safe:duration-200 hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
