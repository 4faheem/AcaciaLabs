"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { emanagerAppUrl } from "@/lib/site";

const ChevronRight = () => (
  <svg className="w-3 h-3 flex-shrink-0 mt-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 2.5L8 6l-3.5 3.5" />
  </svg>
);

export default function ProductsClient() {
  const productsList = [
    {
      title: "E-Manager",
      status: "LIVE",
      statusColor: "bg-emerald-500 shadow-[0_0_8px_#10B981]",
      accent: "text-accent-cyan",
      accentHex: "#22D3EE",
      description: "A complete operational and financial tracking system. Know exactly where every shilling is and what's happening across your entire business in real-time.",
      features: [
        "Real-time financial tracking across mobile money networks",
        "Workflow management and team coordination",
        "Unified operational visibility dashboard",
        "AI-assisted reconciliation and reporting",
        "Enterprise-grade uptime at 99.99% SLA",
      ],
      proof: null,
      cta: "Start Free 30-Day Trial",
      href: emanagerAppUrl,
    },
    {
      title: "syncAI",
      status: "COMING SOON",
      statusColor: "bg-accent-blue shadow-[0_0_8px_#3B82F6]",
      accent: "text-accent-blue",
      accentHex: "#3B82F6",
      description: "Your intelligent automated assistant. Automates your workflows, routes tasks to the right people, and surfaces decisions — so your team executes faster with less guesswork.",
      features: [
        "Natural language workflow commands in Swahili & English",
        "Autonomous task routing and team coordination",
        "Predictive cash flow and inventory alerts",
        "Integrates natively with E-Manager data layer",
      ],
      proof: null,
      cta: "Join Waitlist",
      href: "/contact",
    },
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">

      {/* 1. CINEMATIC HERO */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-24 mb-16">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] section-rule" />

        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-8"
          >
            <span className="eyebrow">OUR SYSTEMS</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
              Products That <br />
              <span className="text-gradient-accent">Eliminate Guesswork.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              We build systems that show you where your money is, what&apos;s happening, and what to do next—automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCTS SPECIFICATION LIST */}
      <section className="section-container space-y-20">
        {productsList.map((product, idx) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard
              intensity={4}
              className="glass-card p-8 md:p-12 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start relative overflow-hidden"
            >
              {/* Status accent stripe */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${product.accentHex}50, transparent)`,
                }}
              />

              {/* Left Col: Info & CTA */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${product.statusColor}`} />
                  <span className={`terminal-text text-[10px] tracking-widest uppercase ${product.accent}`}>
                    {product.status}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-primary">
                  {product.title}
                </h2>

                <p className="text-sm leading-relaxed text-text-secondary">
                  {product.description}
                </p>

                <div className="pt-2">
                  <Link
                    href={product.href}
                    {...(product.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="btn-primary"
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>

              {/* Right Col: Feature list */}
              <div className="border-t lg:border-t-0 lg:border-l border-glass-border/40 pt-8 lg:pt-0 lg:pl-12 space-y-5">
                <div className="terminal-text text-[10px] text-text-muted tracking-widest uppercase">
                  System Capabilities
                </div>
                <ul className="space-y-3">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed group/feat">
                      <span className={`${product.accent} mt-0.5 flex-shrink-0 opacity-70 group-hover/feat:opacity-100 transition-opacity`}>
                        <ChevronRight />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-glass-border/40 pt-5 terminal-text text-[9px] text-text-muted uppercase tracking-widest">
                  AL-SPEC // {product.title === "E-Manager" ? "EMGR-NODE" : "SAI-NODE"}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </section>

      {/* 3. ECOSYSTEM FOOTNOTE */}
      <section className="section-container py-16 border-t border-glass-border/40 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center gap-8 max-w-3xl"
        >
          <div className="flex-1 space-y-2">
            <div className="terminal-text text-[10px] text-text-muted tracking-widest uppercase">Ecosystem Architecture</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              E-Manager and syncAI are designed as a unified operational ecosystem — each system feeds the next. Start with E-Manager to establish your data foundation, then unlock syncAI to act on it.
            </p>
          </div>
          <Link href="/systems" className="btn-secondary whitespace-nowrap self-start sm:self-auto">
            View Full Specs
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
