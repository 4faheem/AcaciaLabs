import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "E-Manager | Sovereign Financial Control & Carrier Money Ledger",
  description: "Track every transaction, secure daily carrier pipelines, and embed real-time profit intelligence directly into your African business operations.",
  alternates: {
    canonical: `${company.url}/products/e-manager`,
  },
  openGraph: {
    title: "E-Manager | Sovereign Financial Control & Carrier Money Ledger",
    description: "Track every transaction, secure daily carrier pipelines, and embed real-time profit intelligence directly into your African business operations.",
    url: `${company.url}/products/e-manager`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "E-Manager - Sovereign Financial Control & Carrier Money Ledger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Manager | Sovereign Financial Control & Carrier Money Ledger",
    description: "Track every transaction, secure daily carrier pipelines, and embed real-time profit intelligence directly into your African business operations.",
    images: ["/opengraph-image.png"],
  },
};

export default function EManagerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "E-Manager",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "An intelligent business operations platform designed to streamline workflows, improve coordination, and provide operational visibility for modern enterprises.",
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
            <span className="eyebrow">SYSTEM NODE // ACTIVE</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-primary leading-tight">
              E-Manager <br />
              <span className="text-text-secondary">Sovereign Financial Control.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Track every transaction, secure daily carrier money pipelines, and embed real-time profit intelligence directly into your Sub-Saharan enterprise operations.
            </p>
          </div>
        </div>
      </section>

      {/* LIVE APP PREVIEW */}
      <section className="section-container pb-16">
        <div className="w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden border border-glass-border shadow-2xl bg-black relative">
          <iframe 
            src="https://emanager.africa/" 
            className="absolute inset-0 w-full h-full border-0"
            title="E-Manager Live App"
          />
        </div>
      </section>

      {/* 2. SPEC SHEET */}
      <section className="section-container">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-text-primary">System Specifications</h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                E-Manager functions as the primary operational control ledger and financial intelligence operating layer. Built for the unique structural requirements and operational constraints of the African continent, it bridges the gap between fragmented transaction streams and real-time strategic visibility.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">01 // Financial Tracking</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Real-time financial tracking node operating at 99.99% ledger accuracy across mobile money networks.
                </p>
              </div>
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">02 // Operational Visibility</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Turn fragmented ledger transactions into actionable financial alerts and clear profitability pathways.
                </p>
              </div>
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">03 // High Availability</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  High-availability architecture designed to maintain operation in remote and real conditions.
                </p>
              </div>
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">04 // Ledger Consensus</h3>
                <p className="text-[11px] leading-relaxed text-text-secondary">
                  Autonomous reconciliation loops secure daily cash flow records without human overhead.
                </p>
              </div>
            </div>
          </div>

          {/* TELEMETRY & CTA */}
          <div className="border border-glass-border bg-glass-bg p-8 rounded-sm space-y-8 shadow-xl">
            <div className="space-y-4">
              <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase">E-Manager SLA Telemetry</div>
              <div className="space-y-3 font-mono text-[10px] text-text-secondary">
                <div className="flex justify-between border-b border-glass-border/40 pb-2">
                  <span>ACTIVE WORKFLOWS:</span>
                  <span className="text-text-primary font-bold">2.4k+</span>
                </div>
                <div className="flex justify-between border-b border-glass-border/40 pb-2">
                  <span>UPTIME SLA:</span>
                  <span className="text-accent-cyan font-bold">99.99%</span>
                </div>
                <div className="flex justify-between border-b border-glass-border/40 pb-2">
                  <span>LEDGER TRACE RATE:</span>
                  <span className="text-text-primary font-bold">$1.2M+</span>
                </div>
                <div className="flex justify-between">
                  <span>LATENCY TARGET:</span>
                  <span className="text-text-primary font-bold">&lt; 8ms</span>
                </div>
              </div>
              <p className="text-[9px] italic text-text-muted font-mono leading-relaxed pt-2 border-t border-glass-border/40">
                Consensus ledger node tracing carrier accounts across mobile and local infrastructures.
              </p>
            </div>
            <Link href="/contact" className="btn-accent w-full text-center uppercase tracking-[0.2em] text-[10px]">
              Initialize Deployment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
