import type { Metadata } from "next";

import { AnimatedSection } from "@/components/site/animated-section";
import { PageIntro } from "@/components/site/page-intro";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { company, teamTracks, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Sync Labs approaches AI operating systems, product execution, and premium software design.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="A product studio for teams that want software to execute, not just exist." description="Sync Labs is built around a simple belief: software should reduce the distance between intent and execution.">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Vision</p>
          <p className="text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">&ldquo;{company.vision}&rdquo;</p>
        </div>
      </PageIntro>
      <SectionWrapper tone="light">
        <div className="grid gap-10 lg:grid-cols-2">
          <AnimatedSection delay={1}>
            <div className="surface-card p-8 sm:p-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(108,92,231,0.18),rgba(0,206,201,0.18))] text-3xl font-semibold tracking-[-0.08em] text-[#1A1040]">FK</div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A84AD]">Founder & CEO</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#1A1040]">Fahim Kiama</h2>
              <p className="mt-4 text-sm leading-7 text-[#1A1040]/65">{company.founderBio}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <div className="surface-card p-8 sm:p-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(0,206,201,0.18),rgba(108,92,231,0.18))] text-3xl font-semibold tracking-[-0.08em] text-[#1A1040]">GJ</div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A84AD]">Co-founder & COO</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#1A1040]">Gwamaka Johas</h2>
              <p className="mt-4 text-sm leading-7 text-[#1A1040]/65">{company.cooBio}</p>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection className="mt-10 lg:mt-14">
          <div>
            <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Mission</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Build intelligent systems that remove friction between ideas and execution.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#1A1040]/66">We combine product strategy, interface design, applied AI, and engineering into one focused operating model. The result is software that feels premium, moves fast, and stays useful as complexity grows.</p>
          </div>
        </AnimatedSection>
      </SectionWrapper>
      <SectionWrapper tone="muted">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="eyebrow border-[#1A1040]/10 bg-white text-[#1A1040]">Team</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Lean, senior, and ready to scale as the company grows.</h2>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamTracks.map((track, i) => (
            <AnimatedSection key={track.title} delay={i + 1}>
              <div className="surface-card p-7 transition duration-300 hover:-translate-y-0.5">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1A1040]">{track.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#1A1040]/66">{track.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper tone="light">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">Values</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">Principles that keep the work sharp.</h2>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i + 1}>
              <div className="surface-card p-7">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1A1040]">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#1A1040]/66">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
