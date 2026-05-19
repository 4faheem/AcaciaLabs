"use client";

import Link from "next/link";
import { products } from "@/lib/site";

export default function SystemsClient() {
  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* 1. CINEMATIC OVERVIEW & ARCHITECTURE MAP */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-20">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        
        <div className="section-container">
          <div className="max-w-4xl space-y-6">
            <span className="eyebrow">SYSTEMS ARCHITECTURE INDEX</span>
            <h1 className="oversized-heading text-gradient-monochrome">
              Ecosystem <br />
              Map.
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Acacia Labs products are not isolated applications; they are interconnected components of a modular enterprise operating system designed to automate, verify, and orchestrate the layers of Sub-Saharan commerce.
            </p>
          </div>

          {/* Interactive Connected Architecture Flow Map (SVG) */}
          <div className="mt-20 border border-glass-border bg-primary-bg/85 p-8 relative rounded-sm overflow-x-auto shadow-2xl select-none">
            <div className="min-w-[800px] h-[320px] flex items-center justify-between relative px-12">
              
              {/* Flow Arrows / Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Path 1: syncAI to E-Manager */}
                <path d="M 250 160 Q 400 100 550 160" fill="none" stroke="rgba(0, 209, 255, 0.2)" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 250 160 Q 400 100 550 160" fill="none" stroke="#00D1FF" strokeWidth="2" strokeDasharray="6 200" strokeDashoffset="100">
                  <animate attributeName="stroke-dashoffset" values="200;0" dur="4s" repeatCount="indefinite" />
                </path>
              </svg>

              {/* Node 1: syncAI */}
              <div className="w-[180px] border border-glass-border bg-glass-bg p-5 rounded-sm relative z-10 flex flex-col justify-between h-[150px]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[7px] font-mono text-accent-cyan tracking-widest bg-white/[0.02] border border-white/5 px-2 py-0.5">ACTIVE</span>
                    <span className="text-[8px] font-mono text-text-muted">NODE_01</span>
                  </div>
                  <div className="text-[12px] font-bold text-text-primary uppercase tracking-wider">SYNCAI</div>
                  <div className="text-[9px] text-text-secondary mt-1 leading-relaxed">Task & workload orchestration layer.</div>
                </div>
                <div className="text-[8px] font-mono text-text-muted border-t border-glass-border/40 pt-2 uppercase">SYNC_LATENCY: &lt;50ms</div>
              </div>

              {/* Node 2: E-Manager */}
              <div className="w-[180px] border border-accent-cyan/30 bg-glass-bg p-5 rounded-sm relative z-10 flex flex-col justify-between h-[150px] shadow-[0_0_20px_rgba(0,209,255,0.05)]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[7px] font-mono text-accent-blue tracking-widest bg-white/[0.02] border border-white/5 px-2 py-0.5">PRIMARY</span>
                    <span className="text-[8px] font-mono text-text-muted">NODE_02</span>
                  </div>
                  <div className="text-[12px] font-bold text-text-primary uppercase tracking-wider">E-MANAGER</div>
                  <div className="text-[9px] text-text-secondary mt-1 leading-relaxed">Carrier money & profit ledger.</div>
                </div>
                <div className="text-[8px] font-mono text-text-muted border-t border-glass-border/40 pt-2 uppercase">INTEGRITY: 99.998%</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION GRIDS FOR EACH SYSTEM */}
      <section className="section-container space-y-36 mt-12">
        {products.map((product, idx) => (
          <div key={product.slug} id={product.slug} className="scroll-mt-32">
            
            {/* System Title Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-glass-border pb-6 mb-12 gap-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[9px] font-mono text-text-muted uppercase">SYSTEM PROTOCOL 0{idx + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                  <span className="text-[9px] font-mono text-accent-cyan uppercase tracking-widest bg-white/[0.02] border border-white/5 px-2 py-0.5">{product.status}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary">{product.name}</h2>
              </div>
              <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-loose">
                REF: AL-NODE-{product.slug.toUpperCase()}<br />
                ACCENT_INDEX: {product.accent.toUpperCase()}
              </div>
            </div>

            {/* Core 4-Column Technical Specification Map */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              
              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase mb-4">01 // Operational Problem</div>
                <p className="text-[12px] leading-relaxed text-text-secondary">{product.problem}</p>
              </div>

              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase mb-4">02 // Intelligence Layer</div>
                <p className="text-[12px] leading-relaxed text-text-secondary">{product.intelligenceLayer}</p>
              </div>

              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase mb-4">03 // Coordination Value</div>
                <p className="text-[12px] leading-relaxed text-text-secondary">{product.coordinationValue}</p>
              </div>

              <div className="border border-glass-border bg-white/[0.01] p-6 rounded-sm">
                <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase mb-4">04 // Infrastructure Role</div>
                <p className="text-[12px] leading-relaxed text-text-secondary">{product.infrastructureRole}</p>
              </div>

            </div>

            {/* Detailed System Specifications & Specs List */}
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 border-t border-glass-border/40 pt-12">
              <div className="space-y-6">
                <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-primary">Operational Summary</h4>
                <p className="text-text-secondary text-base leading-relaxed max-w-xl">{product.summary}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {product.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-[10px] font-mono text-text-primary uppercase border border-glass-border bg-white/[0.01] px-4 py-2 rounded-sm">
                      <span className="h-1 w-1 bg-accent-cyan rounded-full" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-glass-border bg-glass-bg p-8 rounded-sm flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase">System SLA & Telemetry</div>
                  <div className="space-y-3">
                    {product.metrics?.map(m => (
                      <div key={m.label} className="flex items-center justify-between border-b border-glass-border/40 pb-2">
                        <span className="text-[10px] font-mono text-text-secondary uppercase">{m.label}:</span>
                        <span className="text-xs font-bold text-text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  {product.proof && (
                    <div className="mt-4 pt-4 border-t border-glass-border/60 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-text-muted uppercase">
                        <span>Ledger Trace Rate:</span>
                        <span className="text-accent-cyan font-bold">{product.proof.revenue}</span>
                      </div>
                      <p className="text-[10px] italic text-text-muted">{product.proof.insight}</p>
                    </div>
                  )}
                </div>
                <Link href="/contact" className="btn-secondary text-center uppercase tracking-[0.2em] text-[10px]">
                  {product.cta}
                </Link>
              </div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}
