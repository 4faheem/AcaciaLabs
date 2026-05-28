import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "syncAI | Autonomous Workflow Orchestration & Enterprise AI Systems",
  description: "Automate complex operational workflows, streamline multi-channel execution, and coordinate enterprise teams with machine-speed autonomous intelligence.",
  alternates: {
    canonical: `${company.url}/products/syncai`,
  },
  openGraph: {
    title: "syncAI | Autonomous Workflow Orchestration & Enterprise AI Systems",
    description: "Automate complex operational workflows, streamline multi-channel execution, and coordinate enterprise teams with machine-speed autonomous intelligence.",
    url: `${company.url}/products/syncai`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "syncAI - Autonomous Workflow Orchestration & Enterprise AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "syncAI | Autonomous Workflow Orchestration & Enterprise AI Systems",
    description: "Automate complex operational workflows, streamline multi-channel execution, and coordinate enterprise teams with machine-speed autonomous intelligence.",
    images: ["/opengraph-image.png"],
  },
};

export default function SyncAIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "syncAI",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "An AI-native intelligence system focused on workflow automation, operational assistance, and scalable enterprise coordination.",
    "publisher": {
      "@type": "Organization",
      "name": "Acacia Labs",
      "url": company.url
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-24 mb-16">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        <div className="section-container">
          <div className="max-w-4xl space-y-8">
            <span className="eyebrow">SYSTEM NODE // COMING SOON</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-primary leading-tight">
              syncAI <br />
              <span className="text-text-secondary">Autonomous Workflow Orchestration.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Automate complex operational workflows, streamline multi-channel execution, and coordinate enterprise teams with machine-speed autonomous intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPEC SHEET */}
      <section className="section-container">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-text-primary">System Specifications</h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                syncAI functions as the ultimate coordination and workflow automation node of the Acacia Labs ecosystem. Designed to connect complex API structures with real-world physical and digital processes, syncAI translates structural intentions into deterministic machine execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">01 // Intelligent Coordination</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Connect workflows, communications, and logistical pipelines into a unified, machine-coordinated system.
                </p>
              </div>
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">02 // Workflow Automation</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Autonomous agents trigger actions dynamically based on custom business rules and real-time operational telemetries.
                </p>
              </div>
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">03 // AI Operations</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Embedded intelligence analyzes transactional patterns to isolate bottlenecks and recommend ideal workflow structures.
                </p>
              </div>
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">04 // Machine Integrations</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Seamless data exchange across multi-platform networks and hardware nodes at sub-50ms latency targets.
                </p>
              </div>
            </div>
          </div>

          {/* TELEMETRY & CTA */}
          <div className="border border-glass-border bg-glass-bg p-8 rounded-sm space-y-8 shadow-xl">
            <div className="space-y-4">
              <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase">syncAI Target SLA</div>
              <div className="space-y-3 font-mono text-[10px] text-text-secondary">
                <div className="flex justify-between border-b border-glass-border/40 pb-2">
                  <span>SYNC SPEED:</span>
                  <span className="text-text-primary font-bold">&lt; 50ms</span>
                </div>
                <div className="flex justify-between border-b border-glass-border/40 pb-2">
                  <span>AUTOMATION INDEX:</span>
                  <span className="text-accent-cyan font-bold">88.4%</span>
                </div>
                <div className="flex justify-between border-b border-glass-border/40 pb-2">
                  <span>Consensus latency:</span>
                  <span className="text-text-primary font-bold">12ms avg</span>
                </div>
                <div className="flex justify-between">
                  <span>ROUTING UPTIME:</span>
                  <span className="text-text-primary font-bold">99.998%</span>
                </div>
              </div>
              <p className="text-[9px] italic text-text-muted font-mono leading-relaxed pt-2 border-t border-glass-border/40">
                Sovereign workflow orchestration nodes powering autonomous routing loops across carrier nodes.
              </p>
            </div>
            <Link href="/contact" className="btn-accent w-full text-center uppercase tracking-[0.2em] text-[10px]">
              Request Systems Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
