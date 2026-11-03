export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(229,225,228,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,225,228,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(181,196,255,0.18),transparent_62%)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          Friends-only
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-medium tracking-tight text-on-surface sm:text-6xl">
          Your personal AI companion
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Calendar and expenses, in a persona you set. Say it once. Rayvi keeps
          the week and the spending in one place.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#chat"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary motion-safe:transition-transform motion-safe:duration-200 hover:brightness-105"
          >
            See the demos
          </a>
          <a
            href="#invite"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm text-on-surface motion-safe:transition-colors motion-safe:duration-200 hover:border-primary/60"
          >
            Request TestFlight
          </a>
        </div>
      </div>
    </section>
  );
}
