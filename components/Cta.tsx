const mailto =
  "mailto:hello@rayvi.net?subject=Rayvi%20TestFlight";

export function Cta() {
  return (
    <section id="invite" className="scroll-mt-20 border-t border-white/10 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-container-mid px-6 py-10 sm:px-10">
        <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          TestFlight
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight">
          Friends-only, for now
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Rayvi is a small TestFlight. Send a note if you would like a build.
          We will invite you when there is room.
        </p>
        <a
          href={mailto}
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary motion-safe:transition-transform motion-safe:duration-200 hover:brightness-105"
        >
          Request a TestFlight invite
        </a>
        <p className="mt-4 max-w-md text-sm text-muted">
          Mail goes to hello@rayvi.net. That address is a placeholder until the
          mailbox is ready.
        </p>
      </div>
    </section>
  );
}
