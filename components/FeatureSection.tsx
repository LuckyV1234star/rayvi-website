import type { ReactNode } from "react";

type FeatureSectionProps = {
  id: string;
  index: string;
  title: string;
  lede: string;
  children: ReactNode;
};

export function FeatureSection({
  id,
  index,
  title,
  lede,
  children,
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-white/10 px-5 py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] tracking-[0.2em] text-secondary uppercase">
            {index}
          </p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{lede}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
