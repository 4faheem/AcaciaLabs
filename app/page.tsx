import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/site/animated-section";
import { Hero } from "@/components/site/hero";
import { ProductCard } from "@/components/site/product-card";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { company, products, trustSegments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sync Labs",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* PROBLEM SECTION */}
      <SectionWrapper tone="light">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Problem</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Most businesses are running blind.</h2>
          </div>
        </AnimatedSection>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg leading-8 text-[#1A1040]/66">
            You're making decisions without clear numbers.
            Money comes in, money goes out—but profit isn't obvious.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#1A1040]/66">
            Tasks are scattered across WhatsApp, notes, and memory.
            Problems show up late—when they're already expensive.
          </p>
          <p className="mt-6 text-xl font-semibold text-[#1A1040]">
            That's not a strategy. That's guesswork.
          </p>
        </div>
      </SectionWrapper>

      {/* SOLUTION SECTION - 3 PILLARS */}
      <SectionWrapper tone="muted" className="border-y border-[#1A1040]/10">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="eyebrow border-[#1A1040]/10 bg-white text-[#1A1040]">Solution</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Replace guesswork with control.</h2>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Clarity",
              description: "See your revenue, expenses, and profit in one place.",
            },
            {
              title: "Control",
              description: "Understand exactly what's happening in your business—daily.",
            },
            {
              title: "Action",
              description: "Get clear recommendations on what to fix, improve, or scale.",
            },
          ].map((value, i) => (
            <AnimatedSection key={value.title} delay={i + 1}>
              <div className="surface-card p-7 transition duration-300 hover:-translate-y-0.5">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1A1040]">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#1A1040]/66">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* PRODUCTS SECTION */}
      <SectionWrapper id="products" tone="light">
        <AnimatedSection>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Products</span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Two systems. One goal — complete business control.</h2>
              <p className="mt-4 text-base leading-8 text-[#1A1040]/66">Every Sync Labs product is built to feel minimal on the surface and operationally powerful underneath.</p>
            </div>
            <Link href="/products" className="button-light w-fit">View all products</Link>
          </div>
        </AnimatedSection>

        <p className="mt-4 text-sm font-medium text-[#1A1040]/60">Built for real business operations • Designed for East African SMEs • Works with how you already run your business</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product, i) => (
            <AnimatedSection key={product.slug} delay={(i % 2) + 1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-[#1A1040]/60">Early users get priority access to upcoming AI features.</p>
      </SectionWrapper>

      {/* TRUST SECTION */}
      <SectionWrapper tone="muted" className="border-y border-[#1A1040]/10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="eyebrow border-[#1A1040]/10 bg-white text-[#1A1040]">Trust</span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Built for how businesses actually run.</h2>
              <p className="mt-4 text-base leading-8 text-[#1A1040]/66">Designed for operators—not just founders. Works with how you already manage money, tasks, and decisions. Built for growing businesses across East Africa.</p>
            </div>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {trustSegments.map((segment, i) => (
              <AnimatedSection key={segment.title} delay={i + 1}>
                <div className="surface-card p-6 transition duration-300 hover:-translate-y-0.5">
                  <h3 className="text-lg font-semibold text-[#1A1040]">{segment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#1A1040]/65">{segment.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>

{/* FINAL CTA SECTION */}
      <SectionWrapper tone="dark" className="hero-backdrop border-t border-white/10">
        <AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow border-white/15 bg-white/[0.06] text-[#00CEC9]">Call to Action</span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Start running your business with clarity.</h2>
              <p className="mt-4 text-base leading-8 text-white/68">Use E-Manager today. Add automation with syncrAI as you grow.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
<Link href="https://e-manager.synclabs.io" target="_blank" rel="noopener noreferrer" className="button-primary">Use E-Manager</Link>
              <Link href="/contact" className="button-secondary">See how it works</Link>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

