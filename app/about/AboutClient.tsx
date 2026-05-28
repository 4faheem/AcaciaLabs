"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { operationalPrinciples } from "@/lib/site";

export default function AboutClient() {
  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* 1. CINEMATIC ABOUT HERO */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-24 mb-16">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-8"
          >
            <span className="eyebrow">INSTITUTIONAL STRATEGY</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-primary leading-tight">
              Engineering Operational <br />
              <span className="text-text-secondary">Intelligence for African Enterprise.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Acacia Labs builds AI-native systems designed to transform fragmented business operations into scalable infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STRATEGIC LEADERSHIP BLOCK */}
      <section className="section-container py-12">
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
              className="space-y-4 border-l-2 border-accent-blue/30 pl-6 group"
            >
              <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase">
                Founder & CEO
              </div>
              <div className="text-2xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent-blue transition-colors">
                <Link href="/founder">Fahim Kiama →</Link>
              </div>
              <p className="text-xs leading-relaxed text-text-secondary font-mono italic">
                “Leading the development of AI-native operational infrastructure for African enterprise systems.”
              </p>
              <div>
                <Link href="/founder" className="text-[9px] font-mono text-accent-blue tracking-wider uppercase hover:underline">
                  View Strategic Profile
                </Link>
              </div>
            </motion.div>

            {/* COO */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-4 border-l-2 border-accent-cyan/30 pl-6 group"
            >
              <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase">
                Chief Operating Officer
              </div>
              <div className="text-2xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent-cyan transition-colors">
                <Link href="/coo">Gwamaka Johas →</Link>
              </div>
              <p className="text-xs leading-relaxed text-text-secondary font-mono italic">
                “Focused on operational execution, systems coordination, and scalable enterprise processes.”
              </p>
              <div>
                <Link href="/coo" className="text-[9px] font-mono text-accent-cyan tracking-wider uppercase hover:underline">
                  View Operations Profile
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Founding summary paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-glass-border bg-glass-bg p-8 md:p-12 rounded-sm max-w-3xl text-sm leading-relaxed text-text-secondary"
          >
            <p className="mb-4">
              Acacia Labs was founded to build systems that eliminate guesswork, centralize operations, and orchestrate execution. We replace fragmented workflows with unified strategic visibility designed specifically for the unique environment of East African commerce.
            </p>
            <p>
              By starting with regional realities—low-bandwidth networks, mobile payment infrastructure, and complex distribution channels—we create systems that work where other solutions fail.
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operationalPrinciples.map((principle, idx) => (
            <motion.div 
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="border border-glass-border bg-white/[0.01] p-6 rounded-sm space-y-3"
            >
              <div className="text-[10px] font-mono text-accent-cyan tracking-widest uppercase font-bold">
                {principle.title}
              </div>
              <p className="text-xs leading-relaxed text-text-secondary">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
