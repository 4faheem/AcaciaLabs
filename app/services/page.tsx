import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "Enterprise Services & Integrations | Acacia Labs",
  description: "Explore professional systems integration, workflow automation, custom AI consultation, and high-availability SLA tiers for East African enterprises.",
  alternates: {
    canonical: `${company.url}/services`,
  },
  openGraph: {
    title: "Enterprise Services & Integrations | Acacia Labs",
    description: "Explore professional systems integration, workflow automation, custom AI consultation, and high-availability SLA tiers for East African enterprises.",
    url: `${company.url}/services`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Acacia Labs Enterprise Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Services & Integrations | Acacia Labs",
    description: "Explore professional systems integration, workflow automation, custom AI consultation, and high-availability SLA tiers for East African enterprises.",
    images: ["/opengraph-image.png"],
  },
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      code: "01",
      title: "Systems Integration Engineering",
      description: "Connect legacy databases, local ERP architectures, and fragmented enterprise systems into a unified operational dashboard. We build custom API layers, webhooks, and secure sync nodes designed to operate under low-bandwidth and high-latency edge conditions.",
      features: [
        "Local database bridging (SQL / ERP systems)",
        "Mobile money & bank carrier network integration",
        "Edge caching & queuing for resilient network operations",
        "Unified REST/GraphQL API layer design"
      ]
    },
    {
      code: "02",
      title: "Workflow Automation & AI Orchestration",
      description: "Transform manual processes, handoffs, and operational bottlenecks into autonomous software loops. We deploy intelligent agents and scheduled micro-actions that eliminate administrative drag and error rates across multi-hub organizations.",
      features: [
        "Automated reconciliation of cash & carrier records",
        "Intelligent task dispatch & team notification flows",
        "Cross-departmental state machine tracking",
        "Natural language workflow triggering"
      ]
    },
    {
      code: "03",
      title: "Enterprise Systems Consultation",
      description: "Evaluate your existing operational architecture, uncover systemic vulnerabilities, and define a roadmap for digital modernization. We provide rigorous engineering assessments that measure performance bottlenecks, data leakage, and process overhead.",
      features: [
        "Operational readiness & latency audits",
        "Structured system mapping and data flow modeling",
        "Technology stack modernization plans",
        "Local governance & compliance reports"
      ]
    }
  ];

  const supportTiers = [
    {
      name: "Sovereign Tier",
      description: "Designed for mid-market organizations scaling operational capabilities.",
      sla: "99.9% Uptime Target // Next-day response",
      features: [
        "Standard software system updates",
        "Email & secure chat support",
        "Monthly performance review",
        "Shared node hosting"
      ]
    },
    {
      name: "Enterprise Core Tier",
      description: "Designed for critical business operations requiring high availability and fast resolution.",
      sla: "99.99% Uptime Target // 4-hour critical issue response",
      features: [
        "Dedicated infrastructure instance",
        "Continuous telemetry logging & monitoring",
        "Prioritized engineering support queue",
        "Bi-weekly alignment & system optimization reviews"
      ]
    }
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      <PageIntro 
        eyebrow="ENTERPRISE SERVICES" 
        title="Operational Systems Integration." 
        description="SLA-backed systems engineering, workflow automation, and custom integration modules built for Sub-Saharan enterprise."
      />
      
      {/* Overview section */}
      <SectionWrapper>
        <div className="max-w-3xl mt-12 space-y-6">
          <p className="text-sm leading-relaxed text-text-secondary">
            Off-the-shelf software packages rarely align with the physical realities of African business operations. Acacia Labs provides specialized integration engineering and custom workflow design services to bridge the gaps between your physical logistics, local networks, carrier accounts, and executive control dashboards.
          </p>
          <div className="h-[1px] bg-glass-border/40 w-full" />
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="mt-16 space-y-12">
          <div className="text-[10px] font-mono text-accent-cyan tracking-widest uppercase">Service Offerings</div>
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceCategories.map((service) => (
              <div key={service.code} className="border border-glass-border bg-glass-bg/30 p-8 rounded-sm space-y-6 hover:border-glass-border-hover transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-accent-cyan">CODE: S-{service.code}</span>
                  <span className="text-[9px] font-mono text-text-muted">ACTIVE</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-text-primary">{service.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{service.description}</p>
                <div className="border-t border-glass-border/40 pt-4 space-y-2">
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Scope Deliverables:</span>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-[10px] text-text-secondary flex items-start gap-2">
                        <span className="text-accent-cyan font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Support SLA Tiers */}
      <SectionWrapper>
        <div className="mt-24 space-y-12">
          <div className="text-[10px] font-mono text-accent-blue tracking-widest uppercase">SLA & Support Infrastructure</div>
          <div className="grid gap-8 md:grid-cols-2">
            {supportTiers.map((tier) => (
              <div key={tier.name} className="border border-glass-border bg-white/[0.01] p-8 rounded-sm space-y-6 hover:border-glass-border-hover transition-colors">
                <div className="flex justify-between items-start border-b border-glass-border/40 pb-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">{tier.name}</h3>
                    <p className="text-xs text-text-muted mt-1">{tier.description}</p>
                  </div>
                  <span className="text-[9px] font-mono bg-accent-cyan/10 text-accent-cyan px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                    SLA-ACTIVE
                  </span>
                </div>
                <div className="text-xs font-mono text-accent-cyan leading-relaxed">
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider mb-0.5">Parameters:</span>
                  {tier.sla}
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Included Support Features:</span>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="text-[10px] text-text-secondary flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent-blue" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="mt-24 border border-glass-border bg-glass-bg p-8 md:p-12 rounded-sm text-center max-w-4xl mx-auto space-y-6">
          <span className="eyebrow">READY TO DEPLOY</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-text-primary">
            Request an Operational Audit
          </h2>
          <p className="text-xs text-text-secondary max-w-xl mx-auto leading-relaxed">
            Let's evaluate your organization's workflow bottlenecks and design an integration roadmap. Engage our engineering team for an in-depth system audit.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-accent px-8 py-3 rounded-full uppercase text-xs tracking-widest">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
