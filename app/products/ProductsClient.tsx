"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { emanagerAppUrl } from "@/lib/site";

export default function ProductsClient() {
  const productsList = [
    {
      title: "E-Manager",
      status: "Live",
      statusColor: "bg-emerald-500",
      badge: "Web Application",
      description: "A complete operational and financial tracking system. Know exactly where every shilling is and what's happening across your entire business in real-time.",
      tags: ["React", "Node.js", "PostgreSQL"],
      cta: "Start Free 30-Day Trial",
      href: emanagerAppUrl,
      media: (
        <iframe 
          src="https://emanager.africa/" 
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          title="E-Manager Preview"
        />
      )
    },
    {
      title: "syncAI",
      status: "Coming Soon",
      statusColor: "bg-blue-500",
      badge: "Intelligence Layer",
      description: "Your intelligent automated assistant. Automates your workflows, routes tasks to the right people, and surfaces decisions — so your team executes faster.",
      tags: ["Python", "FastAPI", "React"],
      cta: "Join Waitlist",
      href: "/contact",
      media: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] to-[#1a2b4c] flex items-center justify-center">
          <div className="absolute inset-0 grid-pattern opacity-[0.1]" />
          <span className="terminal-text text-accent-blue/40 tracking-[0.3em] text-sm font-bold">AWAITING_VISUALS</span>
        </div>
      )
    },
  ];

  return (
    <div className="bg-[#050810] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative overflow-hidden border-b border-glass-border bg-[#070b14] py-24 mb-16">
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
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight text-white">
              Products That <br />
              <span className="text-gradient-accent">Eliminate Guesswork.</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              We build systems that show you where your money is, what&apos;s happening, and what to do next—automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCTS SPECIFICATION LIST */}
      <section className="section-container space-y-20 max-w-[72rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {productsList.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0f1c] rounded-2xl overflow-hidden flex flex-col border border-white/[0.04] shadow-2xl"
            >
              {/* Media Section */}
              <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-white/[0.04]">
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium tracking-wide">
                    {product.badge}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-white font-bold text-xs shadow-lg ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                {/* Embedded Media */}
                <div className="absolute inset-0">
                  {product.media}
                </div>
                {/* Subtle inner shadow overlay to blend edges */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
                  {product.title}
                </h2>
                <p className="text-base leading-relaxed text-white/60 mb-6 flex-1">
                  {product.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={product.href}
                  {...(product.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm text-center font-semibold transition-all"
                >
                  {product.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ECOSYSTEM FOOTNOTE */}
      <section className="section-container py-16 border-t border-glass-border/40 mt-16">
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
