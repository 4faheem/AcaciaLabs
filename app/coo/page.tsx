import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { PageIntro } from "@/components/site/page-intro";
import { PersonSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Gwamaka Johas | Chief Operating Officer, Acacia Labs",
  description: "Executive profile, operational deployment strategy, and coordination systems execution of Gwamaka Johas, COO of Acacia Labs.",
  alternates: {
    canonical: `${company.url}/coo`,
  },
  openGraph: {
    title: "Gwamaka Johas | Chief Operating Officer, Acacia Labs",
    description: "Executive profile, operational deployment strategy, and coordination systems execution of Gwamaka Johas, COO of Acacia Labs.",
    url: `${company.url}/coo`,
    siteName: company.name,
    type: "profile",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gwamaka Johas - Acacia Labs COO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwamaka Johas | Chief Operating Officer, Acacia Labs",
    description: "Executive profile, operational deployment strategy, and coordination systems execution of Gwamaka Johas, COO of Acacia Labs.",
    images: ["/opengraph-image.png"],
  },
};

export default function CooPage() {
  const bio = "Gwamaka Johas is the Chief Operating Officer of Acacia Labs. He directs operational execution and enterprise coordination, ensuring that software infrastructure translates into measurable operational discipline.";

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      <PersonSchema 
        name={company.coo} 
        role="Chief Operating Officer" 
        bio={bio}
        url={`${company.url}/coo`}
      />
      
      <PageIntro 
        eyebrow="EXECUTIVE LEADERSHIP" 
        title="Gwamaka Johas" 
        description="Chief Operating Officer // Enterprise Coordination & Operations"
      />
      
      <SectionWrapper>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 mt-16 items-start">
          {/* Main Biography and Operations Focus */}
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight text-text-primary border-b border-glass-border pb-3">
                01 // Operational Execution & Deployment Focus
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                As Chief Operating Officer, Gwamaka Johas oversees the transition of Acacia Labs' systems from abstract software designs into production environments. He specializes in designing coordination engines and financial ledger integrations that map to real business activities.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Gwamaka maintains that technology is only as effective as the processes it guides. By managing enterprise implementation pipelines across East Africa, he ensures that the ledger accuracy of platforms like E-Manager fits seamlessly into daily physical operations, mobile-money carrier reconciliation, and inventory tracking.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight text-text-primary border-b border-glass-border pb-3">
                02 // Core Operational Philosophy
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                  <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">Process-Software Alignment</h3>
                  <p className="text-[11px] leading-relaxed text-text-secondary">
                    Rejecting technology for technology's sake. Every operational system must align with physical logistics, mobile-money pipelines, and team structure.
                  </p>
                </div>
                <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                  <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">SLA Integrity & Trust</h3>
                  <p className="text-[11px] leading-relaxed text-text-secondary">
                    Enforcing absolute operational metrics. Systems are measured by throughput, reduction in administrative latency, and data integrity.
                  </p>
                </div>
              </div>
            </section>


          </div>

          {/* Telemetry and Sidebar Info */}
          <div className="space-y-8">
            <div className="border border-glass-border bg-glass-bg p-8 rounded-sm space-y-6 shadow-xl">
              <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase pb-2 border-b border-glass-border/40">
                Node Identity & Alignment
              </div>
              <div className="space-y-4 text-xs font-mono text-text-secondary">
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">Title</span>
                  <span className="text-text-primary font-bold">Chief Operating Officer</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">Key Alignments</span>
                  <span className="text-text-primary">Workflow Architecture, Integration Operations, Systems Optimization</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">HQ Node Location</span>
                  <span className="text-text-primary">Dar es Salaam, Tanzania</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">Operational Collaboration</span>
                  <a href={`mailto:${company.email}`} className="text-accent-cyan hover:underline">{company.email}</a>
                </div>
              </div>
              <div className="pt-4 border-t border-glass-border/40">
                <Link href="/contact" className="btn-primary w-full text-center py-2 text-[10px] font-mono tracking-widest uppercase">
                  Initiate System Deployment
                </Link>
              </div>
            </div>

            <div className="border border-glass-border/60 p-6 rounded-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">Institutional Core</h3>
              <p className="text-xs leading-relaxed text-text-secondary">
                "We measure our success by the absolute reduction in operational friction. If a piece of software doesn't improve workflow reliability, it shouldn't exist."
              </p>
              <div className="text-[9px] font-mono text-text-muted">— Gwamaka Johas, COO</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
