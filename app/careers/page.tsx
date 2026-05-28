import type { Metadata } from "next";
import { company } from "@/lib/site";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { PageIntro } from "@/components/site/page-intro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Future Vision & Careers | Acacia Labs",
  description: "Join Acacia Labs in building the foundational operational layers powering modern African enterprise.",
  alternates: {
    canonical: `${company.url}/careers`,
  },
};

export default function CareersPage() {
  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      <PageIntro 
        eyebrow="FUTURE VISION" 
        title="Building The Execution Layer." 
        description="We are engineering long-term AI infrastructure goals to support scalable African software ecosystems."
      />
      
      <SectionWrapper>
        <div className="max-w-3xl mt-16 space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-text-primary">Our Trajectory</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Acacia Labs is not building temporary software. We are engineering the long-term operational infrastructure for the African continent. Our trajectory involves deploying autonomous execution systems that can handle extreme fragmentation, network latency, and complex workflow logic without human intervention.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              The future of African enterprise is not just digital—it is intelligent, automated, and seamlessly coordinated. We are building the operational ecosystems to make that possible.
            </p>
          </div>

          <div className="border border-glass-border bg-glass-bg/20 p-8 md:p-12 rounded-sm mt-12">
            <h3 className="text-xl font-bold uppercase tracking-tight text-text-primary mb-4">Engineering Opportunities</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              We operate a disciplined, highly technical environment. We do not hire for hype. We hire systems thinkers, infrastructure engineers, and operational architects who understand the structural realities of East African commerce.
            </p>
            
            <div className="space-y-6">
              <div className="border-b border-glass-border/40 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-text-primary">Systems Integration Engineer</div>
                  <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase mt-1">Dar es Salaam / Remote</div>
                </div>
                <Link href={`mailto:${company.email}`} className="text-[10px] font-bold tracking-[0.2em] text-accent-cyan uppercase hover:text-accent-blue transition-colors">
                  Inquire &rarr;
                </Link>
              </div>
              <div className="pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-text-primary">AI Automation Architect</div>
                  <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase mt-1">Tanzania / Remote</div>
                </div>
                <Link href={`mailto:${company.email}`} className="text-[10px] font-bold tracking-[0.2em] text-accent-cyan uppercase hover:text-accent-blue transition-colors">
                  Inquire &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
}
