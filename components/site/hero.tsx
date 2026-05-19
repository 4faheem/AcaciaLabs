"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/site";
import dynamic from "next/dynamic";

const TelemetryCanvas = dynamic(() => import("./telemetry-canvas").then((m) => m.TelemetryCanvas), {
  ssr: false,
  loading: () => (
    <div className="h-[450px] w-full bg-glass-bg/10 animate-pulse border border-glass-border rounded-sm flex items-center justify-center font-mono text-[9px] text-text-muted tracking-widest uppercase">
      Loading Systems Telemetry...
    </div>
  )
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-primary-bg">
      {/* Engineered System Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
        {/* Extreme subtle radial vignette to convey restraint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)]" />
      </div>

      <div className="section-container relative z-10 w-full grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center py-16">
        
        {/* LEFT COLUMN: Swiss oversized typography structure */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left space-y-8"
        >
          <span className="eyebrow w-fit">
            OPERATIONAL INTELLIGENCE INFRASTRUCTURE
          </span>

          <h1 className="oversized-heading text-gradient-monochrome">
            Infrastructure <br />
            <span className="text-text-secondary/45">For African</span> <br />
            Enterprise.
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            {company.subtext} {company.promise} Acacia Labs deploys sovereign, highly resilient operating systems engineered for the unique structural realities of African commerce.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link href="/contact" className="btn-primary text-center">
              Start a Project
            </Link>
            <Link href="/systems" className="btn-secondary text-center">
              Explore Systems
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Telemetry visualizer & high-density panels */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 flex flex-col justify-center"
        >
          {/* Telemetry Canvas Panel */}
          <div className="rounded-sm border border-glass-border overflow-hidden bg-glass-bg shadow-2xl">
            <TelemetryCanvas />
          </div>

          {/* Floating High-Density Systems Metric Panels */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "SYSTEM THROUGHPUT", value: "4.8GB/s", detail: "Sub-50ms sync latency" },
              { label: "AUTOMATION LOAD", value: "18.4M", detail: "Active task executions" },
              { label: "SME NETWORK", value: "2,400+", detail: "Coordinated workflows" },
              { label: "SYNC INDEX", value: "98.2%", detail: "Ledger accuracy" },
            ].map((metric) => (
              <div 
                key={metric.label}
                className="border border-glass-border bg-white/[0.01] p-5 rounded-sm hover:border-glass-border-hover transition-colors"
              >
                <div className="text-[9px] font-mono tracking-widest text-text-muted uppercase mb-1">{metric.label}</div>
                <div className="text-2xl font-bold tracking-tight text-text-primary">{metric.value}</div>
                <div className="text-[9px] font-mono text-accent-cyan/80 tracking-wider mt-1">{metric.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* System Scroll Telemetry Pulse */}
      <div className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-4 font-mono text-[9px] text-text-muted tracking-widest uppercase z-10 select-none">
        <span className="telemetry-pulse">SCROLL_TELEMETRY</span>
        <div className="w-16 h-[1px] bg-glass-border" />
      </div>
    </section>
  );
}
