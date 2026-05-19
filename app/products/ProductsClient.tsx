"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsClient() {
  const productsList = [
    {
      title: "E-Manager",
      status: "LIVE",
      statusColor: "bg-emerald-500 shadow-[0_0_8px_#10B981]",
      description:
        "An intelligent business operations platform designed to streamline workflows, improve coordination, and provide operational visibility for modern enterprises.",
      features: [
        "Workflow management",
        "Operational coordination",
        "Real-time visibility",
        "AI-assisted processes",
        "Enterprise scalability",
      ],
      cta: "Explore Platform",
      href: "/contact",
      disabled: false,
    },
    {
      title: "syncAI",
      status: "COMING SOON",
      statusColor: "bg-accent-blue shadow-[0_0_8px_#2563FF]",
      description:
        "An AI-native intelligence system focused on workflow automation, operational assistance, and scalable enterprise coordination.",
      features: [
        "AI operational assistant",
        "Workflow intelligence",
        "Smart automation",
        "Enterprise AI systems",
        "Intelligent coordination",
      ],
      cta: "Coming Soon",
      href: "#",
      disabled: true,
    },
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-24 mb-16">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-8"
          >
            <span className="eyebrow">OPERATIONAL ECOSYSTEM</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-primary leading-tight">
              Operational Systems <br />
              <span className="text-text-secondary">Built for Modern African Enterprise.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              AI-native systems engineered for scalable business operations. Custom-built for the operational realities of modern commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCTS SPECIFICATION LIST */}
      <section className="section-container space-y-24">
        {productsList.map((product, idx) => (
          <motion.div 
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-glass-border bg-glass-bg/60 p-8 md:p-12 rounded-sm grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start"
          >
            {/* Left Col: Info & Badges */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${product.statusColor}`} />
                <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                  {product.status}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-primary">
                {product.title}
              </h2>
              
              <p className="text-sm leading-relaxed text-text-secondary">
                {product.description}
              </p>

              <div className="pt-4">
                {product.disabled ? (
                  <span className="inline-flex items-center justify-center rounded-sm border border-glass-border bg-white/[0.01] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-text-muted cursor-not-allowed">
                    {product.cta}
                  </span>
                ) : (
                  <Link href={product.href} className="btn-secondary uppercase tracking-[0.2em]">
                    {product.cta}
                  </Link>
                )}
              </div>
            </div>

            {/* Right Col: Technical Spec Sheet */}
            <div className="border-t lg:border-t-0 lg:border-l border-glass-border/40 pt-8 lg:pt-0 lg:pl-12 space-y-6">
              <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase">
                System Highlights & Capabilities
              </div>
              <ul className="space-y-4 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-accent-cyan rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="border-t border-glass-border/40 pt-6 text-[8px] font-mono text-text-muted uppercase tracking-widest">
                INTEGRATED NODE // AL-SPEC-{(product.title === "E-Manager" ? "EMGR" : "SAI")}
              </div>
            </div>

          </motion.div>
        ))}
      </section>

      {/* 3. CALM ECOSYSTEM FOOTNOTE */}
      <section className="section-container py-16 border-t border-glass-border/40 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-4"
        >
          <div className="text-[9px] font-mono text-text-muted tracking-widest uppercase">Ecosystem Architecture</div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Acacia Labs designs these systems to function as a modular, growing operational ecosystem. Every system node routes coordinate payloads natively across regional networks.
          </p>
        </motion.div>
      </section>
      
    </div>
  );
}
