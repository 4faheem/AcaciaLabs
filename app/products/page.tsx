import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/site/animated-section";
import { PageIntro } from "@/components/site/page-intro";
import { ProductShowcase } from "@/components/site/product-showcase";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the Sync Labs product suite, including syncrAI and E-Manager.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Showcase products designed like operating systems, not feature piles." description="Sync Labs products are built to make execution feel clearer, faster, and more intelligent from day one.">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Focus</p>
          <p className="text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">AI productivity, business operations, and the execution layer in between.</p>
        </div>
      </PageIntro>
      <SectionWrapper tone="light" innerClassName="space-y-20 lg:space-y-24">
        {products.map((product, index) => (
          <AnimatedSection key={product.slug} delay={index % 2 === 0 ? 1 : 2}>
            <ProductShowcase product={product} reverse={index % 2 === 1} />
          </AnimatedSection>
        ))}
      </SectionWrapper>
      <SectionWrapper tone="muted">
        <div className="grid gap-6 lg:grid-cols-3">
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
        <div className="mt-12 flex justify-start">
          <Link href="/contact#project-brief" className="button-light">Start a custom build</Link>
        </div>
      </SectionWrapper>
    </>
  );
}

