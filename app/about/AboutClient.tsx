"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { operationalPrinciples } from "@/lib/site";

const milestones = [
  { date: "Aug 2024", title: "Company Founded", desc: "Acacia Labs incorporated in Dar es Salaam.", color: "text-accent-indigo", dot: "bg-accent-indigo" },
  { date: "Oct 2024", title: "E-Manager Development Begins", desc: "Product research and architecture started.", color: "text-accent-blue", dot: "bg-accent-blue" },
  { date: "Feb 2025", title: "MVP Completed", desc: "First working version of E-Manager built and tested.", color: "text-accent-cyan", dot: "bg-accent-cyan" },
  { date: "Jun 2026", title: "Early Access Launch", desc: "Accepting first clients in Dar es Salaam.", color: "text-accent-success", dot: "bg-accent-success" },
];

export default function AboutClient() {
  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">

      {/* 1. CINEMATIC ABOUT HERO */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-24 mb-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#6366F1]/[0.05] blur-[120px] pointer-events-none" />

        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-8"
          >
            <span className="eyebrow">INSTITUTIONAL STRATEGY</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
              Engineering Operational <br />
              <span className="text-gradient-accent">Intelligence.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Acacia Labs builds AI-native systems designed to transform fragmented business operations into scalable infrastructure built for the realities of African commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1.5 MILESTONES */}
      <section className="border-b border-glass-border bg-primary-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-text-muted mb-10">
              Company Milestones
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-glass-border hidden md:block" />
              <div className="grid md:grid-cols-4 gap-8 md:gap-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.date}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="md:pl-8 relative"
                  >
                    {/* Dot */}
                    <div className={`absolute left-[-4.5px] top-[10px] w-[9px] h-[9px] rounded-full ${m.dot} hidden md:block`} />
                    <div className={`terminal-text text-[10px] tracking-widest mb-2 ${m.color}`}>{m.date}</div>
                    <div className="text-[14px] font-bold text-text-primary leading-snug mb-1">{m.title}</div>
                    <div className="text-[12px] text-text-muted leading-relaxed">{m.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STRATEGIC LEADERSHIP BLOCK */}
      <section className="section-container py-16">
        <div className="max-w-4xl space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="eyebrow">LEADERSHIP GRID</span>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-text-primary">
              Institutional Direction.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 pt-6">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 border-l-2 border-accent-indigo/40 pl-6 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent-indigo/10 border border-accent-indigo/25 flex items-center justify-center mb-4">
                <span className="terminal-text text-[10px] font-bold text-accent-indigo">FK</span>
              </div>
              <div className="terminal-text text-[10px] text-text-muted tracking-widest uppercase">Founder & CEO</div>
              <div className="text-2xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent-indigo" style={{ transition: `color 220ms var(--ease-premium)` }}>
                <Link href="/founder">Fahim Kiama →</Link>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary/80 border-l border-accent-indigo/20 pl-4">
                &ldquo;Leading the development of AI-native operational infrastructure for African enterprise systems.&rdquo;
              </p>
              <Link href="/founder" className="terminal-text text-[10px] text-accent-indigo tracking-wider uppercase hover:text-text-primary" style={{ transition: `color 200ms var(--ease-premium)` }}>
                View Strategic Profile →
              </Link>
            </motion.div>

            {/* COO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-4 border-l-2 border-accent-cyan/40 pl-6 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center mb-4">
                <span className="terminal-text text-[10px] font-bold text-accent-cyan">GJ</span>
              </div>
              <div className="terminal-text text-[10px] text-text-muted tracking-widest uppercase">Chief Operating Officer</div>
              <div className="text-2xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent-cyan" style={{ transition: `color 220ms var(--ease-premium)` }}>
                <Link href="/coo">Gwamaka Johas →</Link>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary/80 border-l border-accent-cyan/20 pl-4">
                &ldquo;Focused on operational execution, systems coordination, and scalable enterprise processes.&rdquo;
              </p>
              <Link href="/coo" className="terminal-text text-[10px] text-accent-cyan tracking-wider uppercase hover:text-text-primary" style={{ transition: `color 200ms var(--ease-premium)` }}>
                View Operations Profile →
              </Link>
            </motion.div>
          </div>

          {/* Founding summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-deep p-8 md:p-12 max-w-3xl relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[1px] section-rule" />
            <p className="mb-5 text-base md:text-lg leading-relaxed font-medium text-text-primary">
              Acacia Labs was founded to build systems that eliminate guesswork, centralize operations, and orchestrate execution. We replace fragmented workflows with unified strategic visibility designed specifically for the unique environment of East African commerce.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium text-white/80">
              By starting with regional realities — low-bandwidth networks, mobile payment infrastructure, and complex distribution channels — we create systems that work where other solutions fail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. OPERATIONAL PRINCIPLES */}
      <section className="section-container py-16 border-t border-glass-border/40 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary mb-2">
            Operational Principles
          </div>
          <p className="text-xs text-text-secondary max-w-md">
            Our framework is governed by strict rules designed for stable enterprise execution in real-world environments.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {operationalPrinciples.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -2, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="glass-card p-6 space-y-3 group relative"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 section-rule" />
              <div className="flex items-start gap-3">
                <span className="terminal-text text-[10px] text-accent-indigo/60 min-w-[20px] pt-0.5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="text-[11px] font-bold terminal-text text-accent-cyan tracking-widest uppercase">
                  {principle.title}
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-text-secondary pl-8">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
