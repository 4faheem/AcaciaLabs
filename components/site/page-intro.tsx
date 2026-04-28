import { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="hero-backdrop relative overflow-hidden border-b border-white/10 text-white">
      <div className="soft-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.32),transparent_55%)]" />
      <div className="section-shell relative grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow border-white/15 bg-white/[0.06] text-[#00CEC9]">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{description}</p>
        </div>
        {children ? <div className="glass-surface p-6 sm:p-8">{children}</div> : null}
      </div>
    </section>
  );
}

