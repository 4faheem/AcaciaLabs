import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/site/animated-section";
import { PageIntro } from "@/components/site/page-intro";
import { ProductShowcase } from "@/components/site/product-showcase";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sync Labs",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Products built to run your business." description="Each system is designed to remove guesswork, simplify decisions, and drive real results.">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Focus</p>
          <p className="text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">Clarity → Trust → Action</p>
        </div>
      </PageIntro>

      {/* E-MANAGER SECTION - LIVE */}
      <SectionWrapper tone="light" innerClassName="space-y-20 lg:space-y-24">
        <AnimatedSection delay={1}>
          <ProductShowcase product={products[0]} reverse={false} />
        </AnimatedSection>
      </SectionWrapper>

      {/* SYNCRAI SECTION - COMING SOON */}
      <SectionWrapper tone="muted" innerClassName="space-y-20 lg:space-y-24">
        <AnimatedSection delay={2}>
          <ProductShowcase product={products[1]} reverse={true} />
        </AnimatedSection>
      </SectionWrapper>

      {/* VALUE BREAKDOWN */}
      <SectionWrapper tone="light">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Value</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Start with clarity. Scale with intelligence.</h2>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Designed for clarity", description: "Minimal interfaces, strong hierarchy, and clear system feedback at every step." },
            { title: "Built for leverage", description: "Automation and intelligence where it materially improves execution, not where it adds noise." },
            { title: "Shipped for growth", description: "Every product is structured to scale from early traction to larger operational complexity." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i + 1}>
              <div className="surface-card p-7">
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-[#1A1040]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#1A1040]/66">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper tone="muted" className="border-y border-[#1A1040]/10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Start with clarity. Scale with intelligence.</h2>
              <p className="mt-4 text-base leading-8 text-[#1A1040]/66">Use E-Manager today. Unlock automation with syncrAI.</p>
            </div>
          </AnimatedSection>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link href="https://e-manager.synclabs.io" className="button-light">Use E-Manager</Link>
            <Link href="/contact#project-brief" className="button-dark">Request Early Access</Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

