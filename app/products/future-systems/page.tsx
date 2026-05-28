import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "Future Systems & Infrastructure Roadmap | Acacia Labs",
  description: "Explore the technical roadmap of Acacia Labs: Edge hardware co-design, autonomous agent networks, and carrier reconciliation modules scheduled for deployment.",
  alternates: {
    canonical: `${company.url}/products/future-systems`,
  },
  openGraph: {
    title: "Future Systems & Infrastructure Roadmap | Acacia Labs",
    description: "Explore the technical roadmap of Acacia Labs: Edge hardware co-design, autonomous agent networks, and carrier reconciliation modules scheduled for deployment.",
    url: `${company.url}/products/future-systems`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Acacia Labs Future Systems Roadmap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Systems & Infrastructure Roadmap | Acacia Labs",
    description: "Explore the technical roadmap of Acacia Labs: Edge hardware co-design, autonomous agent networks, and carrier reconciliation modules scheduled for deployment.",
    images: ["/opengraph-image.png"],
  },
};

export default function FutureSystemsPage() {
  const roadmapItems = [
    {
      quarter: "Q3 2026",
      status: "DEVELOPMENT PHASE",
      title: "Acacia Edge Node (AEN)",
      description: "Low-power hardware appliance designed for regional warehouses, transport hubs, and wholesale centers. The AEN caches transactions locally and replicates ledger states asynchronously over SMS, radio frequency, or cellular links, ensuring operational stability during complete network drops.",
      specifications: [
        "Dynamic Edge Sync (Offline-first data buffers)",
        "Low-frequency radio transceiver capability",
        "Encrypted hardware security enclave",
        "Backup battery cell backup up to 48 hours"
      ]
    },
    {
      quarter: "Q4 2026",
      status: "DESIGN & AUDIT",
      title: "syncAI Agent Orchestrator",
      description: "Autonomous task routers and coordination agents that connect to messaging nodes. The orchestrator listens to status changes across systems, automatically drafts work tickets, re-routes logistics pipelines based on congestion, and communicates status directly to micro-retailers over local SMS gateways.",
      specifications: [
        "Deterministic agent routing state machine",
        "SMS gateway direct hook integration",
        "Automatic courier capacity load balancing",
        "Proactive stock level anomaly alerts"
      ]
    },
    {
      quarter: "Q1 2027",
      status: "PLANNING PHASE",
      title: "Core Carrier Ledger Engine (CCLE)",
      description: "High-performance transactional processor designed to handle massive volumes of mobile money carrier ledgers. The CCLE acts as a high-speed broker resolving incoming webhooks and USSD reconciliation codes, compiling them into audit-grade reports with zero processing overhead.",
      specifications: [
        "Microsecond latency webhook queuing",
        "Carrier transaction hash validation",
        "Multi-network ledger aggregation",
        "Automated compliance audit output"
      ]
    }
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      <PageIntro 
        eyebrow="SYSTEM ROADMAP" 
        title="Future Systems." 
        description="A technical view of upcoming edge hardware and automated coordination software scheduled for future enterprise deployment."
      />

      <SectionWrapper>
        <div className="mt-16 space-y-16 max-w-4xl">
          <div className="border-l border-glass-border/60 pl-8 space-y-16 py-4">
            {roadmapItems.map((item) => (
              <div key={item.title} className="relative space-y-4">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-[#050505] border-2 border-accent-cyan flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm font-mono text-accent-cyan font-bold tracking-widest">{item.quarter}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="text-[10px] font-mono text-text-muted bg-white/[0.02] border border-glass-border px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-text-primary">
                  {item.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Target Architecture Specs:</span>
                  <ul className="grid sm:grid-cols-2 gap-2 max-w-2xl">
                    {item.specifications.map((spec, idx) => (
                      <li key={idx} className="text-[10px] text-text-secondary flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent-cyan" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Access Request Card */}
      <SectionWrapper>
        <div className="mt-24 border border-glass-border bg-glass-bg p-8 md:p-12 rounded-sm text-center max-w-4xl mx-auto space-y-6">
          <span className="eyebrow">PARTNERSHIP INQUIRY</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight text-text-primary">
            Request Early System Access
          </h2>
          <p className="text-xs text-text-secondary max-w-xl mx-auto leading-relaxed">
            Interested in deploying our edge node hardware or co-testing dynamic agent networks? Join our partner testing program for Q3 deployments.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-accent px-8 py-3 rounded-full uppercase text-xs tracking-widest">
              Request Alpha Access
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
