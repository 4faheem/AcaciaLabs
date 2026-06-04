import { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, gradientWord, description, children }: PageIntroProps) {
  const titleParts = gradientWord
    ? title.split(gradientWord)
    : [title];

  return (
    <section className="relative overflow-hidden border-b border-glass-border bg-[#010308] py-24 mb-0">
      <div className="absolute inset-0 grid-pattern opacity-[0.10]" />
      <div className="absolute top-0 left-0 right-0 h-[60%]"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.05) 0%, transparent 100%)" }} />
      {/* Rim line at section top */}
      <div className="absolute inset-x-0 top-0 h-[1px] section-rule" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] section-rule" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl space-y-8">
          <span className="eyebrow">{eyebrow}</span>

          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
            {gradientWord ? (
              <>
                <span className="text-text-primary">{titleParts[0]}</span>
                <span className="text-gradient-accent">{gradientWord}</span>
                {titleParts[1] && <span className="text-text-primary">{titleParts[1]}</span>}
              </>
            ) : (
              <span className="text-text-primary">{title}</span>
            )}
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {children && (
          <div className="mt-12 glass-deep p-6 sm:p-8 max-w-xl">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
