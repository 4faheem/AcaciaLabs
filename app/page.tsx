"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/site/hero";
import { products } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* 1. CINEMATIC HERO SECTION */}
      <Hero />

      {/* 2. OPERATIONAL REALITY (THE STRUCTURAL CHALLENGE) */}
      <section className="relative py-32 bg-secondary-bg border-y border-glass-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.2]" />
        
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
            
            {/* Left: Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="eyebrow">OPERATIONAL CONSTRAINTS</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
                The Reality <br />
                Of African <br />
                Commerce.
              </h2>
              <div className="h-[1px] w-24 bg-accent-cyan" />
            </motion.div>

            {/* Right: Technical Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-8 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                African commerce does not suffer from a lack of transactional activity; it suffers from extreme execution fragmentation. Transactions are scattered across diverse mobile money networks, local carrier pipelines, and physical logistics nodes.
              </p>
              <p>
                Without unified operational coordination, enterprise scale becomes a liability. Operational leakage, untracked cash-flow channels, and manual communication handoffs compound into massive invisible bottlenecks.
              </p>
              <p className="text-text-primary font-bold">
                Acacia Labs develops the sovereign intelligence infrastructure that bridges these gaps — transforming fragmented execution workflows into stable, automated enterprise assets.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MODULAR SYSTEMS ARCHITECTURE PREVIEW */}
      <section className="relative py-32 bg-primary-bg overflow-hidden" id="systems">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b border-glass-border pb-12"
          >
            <div className="max-w-2xl">
              <span className="eyebrow">Enterprise Modules</span>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tight">
                Unified Systems Index
              </h2>
              <p className="text-text-secondary text-base mt-4 max-w-lg">
                Acacia Labs enterprise components are engineered to integrate seamlessly, providing an active, machine-speed orchestration layer.
              </p>
            </div>
            <Link href="/systems" className="btn-secondary whitespace-nowrap self-start md:self-auto">
              View Specifications
            </Link>
          </motion.div>

          {/* Connected Grid Map */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-glass-border bg-glass-bg/40 p-8 rounded-sm hover:border-glass-border-hover transition-all duration-300 flex flex-col justify-between h-[360px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-mono tracking-widest text-accent-cyan uppercase bg-white/[0.02] border border-white/5 px-2.5 py-1">{product.status}</span>
                    <span className="text-[10px] font-mono text-text-muted">NODE // 0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary uppercase tracking-wide mb-3">{product.name}</h3>
                  <p className="text-[12px] text-text-secondary leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-glass-border/40 pt-4">
                  <div className="flex gap-4">
                    {product.metrics?.slice(0, 1).map(m => (
                      <div key={m.label}>
                        <div className="text-[8px] font-mono text-text-muted">{m.label}</div>
                        <div className="text-xs font-bold text-text-primary">{m.value}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={`/systems#${product.slug}`} className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-blue hover:text-text-primary transition-colors">
                    SPEC_MAP &gt;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UNIFIED INTELLIGENCE ARCHITECTURE SPEC */}
      <section className="relative py-32 bg-secondary-bg border-t border-glass-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.2]" />
        
        <div className="section-container">
          <div className="border border-glass-border bg-glass-bg p-8 md:p-16 relative overflow-hidden rounded-sm">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Telemetry metadata copy */}
              <div className="space-y-8 relative z-10">
                <span className="eyebrow">SYSTEM CAPABILITIES</span>
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                  Unified Business <br /> Operations.
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                  Acacia Labs builds systems that connect teams, financial ledgers, and field operations into one clear, reliable platform designed for the African continent.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    "Workflow Automation",
                    "Financial Tracking",
                    "Carrier Integrations",
                    "Real-time Syncing"
                  ].map(spec => (
                    <div key={spec} className="flex items-center gap-3 text-[11px] font-bold text-text-primary uppercase tracking-wider">
                      <span className="h-1 w-1 bg-accent-cyan rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Spec Control Panel */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative border border-glass-border bg-primary-bg/80 p-8 rounded-sm font-mono text-[10px] text-text-secondary leading-relaxed space-y-4 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-glass-border pb-3">
                  <span className="text-[9px] text-accent-cyan font-bold tracking-widest">SYSTEM_LOG</span>
                  <span className="text-text-muted">ACTIVE</span>
                </div>
                <div className="space-y-2 text-text-muted">
                  <div>[09:12:04] &gt; initializing system synchronization...</div>
                  <div>[09:12:05] &gt; m-pesa transaction stream: <span className="text-accent-cyan">CONNECTED</span></div>
                  <div>[09:12:05] &gt; financial ledger consensus: <span className="text-accent-cyan">STABLE</span></div>
                  <div className="text-text-primary">[09:12:06] &gt; system latency to Tanzania HQ: 8ms avg</div>
                  <div className="text-text-primary">[09:12:06] &gt; SYSTEM SYNC RATE: 88,432 ops/sec</div>
                </div>
                <div className="h-[2px] bg-glass-border/40 w-full" />
                <div className="flex items-center justify-between text-[9px] text-text-muted">
                  <span>PACKET_SYS: STABLE</span>
                  <span>REF: AC-OS-8.9</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT CONSULTATION INITIATION */}
      <section className="relative py-36 bg-primary-bg overflow-hidden border-t border-glass-border">
        <div className="section-container flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-8"
          >
            <span className="eyebrow mx-auto">CONSULTATION INITIATION</span>
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary uppercase tracking-tight max-w-2xl mx-auto leading-tight">
              Initialize Systems <br /> Integration.
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto leading-relaxed">
              Connect with our enterprise engineering and strategy team to discuss automated operational architectures, custom transaction grids, or custom carrier network layers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Start a Project
              </Link>
              <Link href="/systems" className="btn-secondary w-full sm:w-auto">
                Systems Spec Index
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
