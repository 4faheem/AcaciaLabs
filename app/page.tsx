import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/site/animated-section";
import { Hero } from "@/components/site/hero";
import { ProductCard } from "@/components/site/product-card";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { company, products, trustSegments } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Operating Systems for the Future of Work",
  description: company.subtext,
};

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWrapper id="products" tone="light">
        <AnimatedSection>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Products</span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Flagship products built as premium execution systems.</h2>
              <p className="mt-4 text-base leading-8 text-[#1A1040]/66">Every Sync Labs product is built to feel minimal on the surface and operationally powerful underneath.</p>
            </div>
            <Link href="/products" className="button-light w-fit">View all products</Link>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product, i) => (
            <AnimatedSection key={product.slug} delay={(i % 2) + 1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper tone="muted" className="border-y border-[#1A1040]/10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="eyebrow border-[#1A1040]/10 bg-white text-[#1A1040]">Trust</span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Built for individuals, startups, and growing businesses.</h2>
              <p className="mt-4 text-base leading-8 text-[#1A1040]/66">Designed for real-world operations — not theory.</p>
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
      <SectionWrapper tone="light">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Value</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">From chaos to control — instantly.</h2>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Clarity",
              description: "See your entire business in one place.",
            },
            {
              title: "Control",
              description: "Know exactly where your money goes.",
            },
            {
              title: "Action",
              description: "Get clear recommendations on what to do next.",
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
      <SectionWrapper tone="dark" className="hero-backdrop border-t border-white/10">
        <AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow border-white/15 bg-white/[0.06] text-[#00CEC9]">Custom AI systems</span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Still running your business manually?</h2>
              <p className="mt-4 text-base leading-8 text-white/68">We partner with ambitious teams to design and ship AI operating systems that move work forward with less friction.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/contact#project-brief" className="button-primary">Start a Project</Link>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

