import type { Metadata } from "next";

import { AnimatedSection } from "@/components/site/animated-section";
import { ContactForm } from "@/components/site/contact-form";
import { PageIntro } from "@/components/site/page-intro";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { company, contactExpectations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sync Labs",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Start the conversation around your next AI operating system." description="Tell us what you want to build and where intelligence should create leverage. We’ll help shape the clearest next step.">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Email</p>
          <a href={`mailto:${company.email}`} className="text-2xl font-semibold tracking-[-0.05em] text-white transition hover:text-[#00CEC9]">{company.email}</a>
        </div>
      </PageIntro>
      <SectionWrapper id="project-brief" tone="light">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <AnimatedSection delay={1}>
            <div className="surface-card p-7 sm:p-8">
              <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">What to expect</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#1A1040] sm:text-4xl">Clean process. Sharp next steps.</h2>
              <p className="mt-4 text-base leading-8 text-[#1A1040]/66">We keep first conversations focused and high-signal. The goal is to understand the opportunity, identify where AI creates real leverage, and define a credible path forward.</p>
              <div className="mt-8 space-y-4">
                {contactExpectations.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#1A1040]/10 bg-[#F8F7FF] p-4 text-sm leading-7 text-[#1A1040]/70">{item}</div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-[#1A1040]/10 bg-[linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A84AD]">General inquiry</p>
                <a href={`mailto:${company.email}`} className="mt-3 inline-flex text-lg font-semibold text-[#1A1040] transition hover:text-[#6C5CE7]">{company.email}</a>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <ContactForm email={company.email} />
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </>
  );
}
