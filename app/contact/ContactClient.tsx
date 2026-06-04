"use client";

import { motion } from "framer-motion";
import { company } from "@/lib/site";
import { ContactForm } from "@/components/site/contact-form";

export default function ContactClient() {
  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Cinematic Intro Header */}
      <section className="relative overflow-hidden border-b border-glass-border bg-secondary-bg py-20 mb-16">
        <div className="absolute inset-0 grid-pattern opacity-[0.25]" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] section-rule" />
        
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <span className="eyebrow">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
              Start a <span className="text-gradient-accent">Conversation.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Discuss operational systems, infrastructure, or enterprise intelligence solutions with Acacia Labs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Details & Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Contact details */}
            <div className="border border-glass-border bg-white/[0.01] p-8 rounded-sm space-y-6">
              <div className="space-y-1">
                <div className="terminal-text text-[10px] text-text-muted tracking-widest uppercase">Email Channel</div>
                <a
                  href={`mailto:${company.email}`}
                  className="text-xl md:text-2xl font-bold text-text-primary hover:text-accent-cyan transition-colors duration-300 break-words"
                  style={{ transition: `color 220ms var(--ease-premium)` }}
                >
                  {company.email}
                </a>
              </div>

              <div className="space-y-1 pt-4 border-t border-glass-border/40">
                <div className="terminal-text text-[10px] text-text-muted tracking-widest uppercase">Office Location</div>
                <div className="text-sm font-medium text-text-primary">{company.location}</div>
              </div>
            </div>

            {/* How We Work Section */}
            <div className="space-y-5">
              <div className="terminal-text text-[10px] text-text-muted tracking-[0.3em] uppercase">Our Process</div>
              <ol className="space-y-3">
                {[
                  { num: "01", label: "Operational Assessment", desc: "We map your current workflows and identify friction points.", color: "text-accent-indigo", bg: "bg-accent-indigo/10 border-accent-indigo/20" },
                  { num: "02", label: "Systems Analysis",       desc: "Deep-dive into your financial and coordination gaps.",          color: "text-accent-blue",   bg: "bg-accent-blue/10 border-accent-blue/20" },
                  { num: "03", label: "Infrastructure Planning", desc: "We design the architecture tailored to your reality.",         color: "text-accent-cyan",   bg: "bg-accent-cyan/10 border-accent-cyan/20" },
                  { num: "04", label: "Deployment & Handoff",   desc: "We ship, train your team, and stay on-call.",                  color: "text-accent-success", bg: "bg-accent-success/10 border-accent-success/20" },
                ].map(step => (
                  <li
                    key={step.num}
                    className="flex items-start gap-4 border border-glass-border bg-white/[0.01] p-4 rounded-sm hover:border-[rgba(99,102,241,0.25)] hover:bg-accent-indigo/[0.02] group"
                    style={{ transition: `border-color 220ms var(--ease-premium), background 220ms var(--ease-premium)` }}
                  >
                    <div className={`terminal-text text-[10px] font-bold min-w-[28px] h-6 flex items-center justify-center rounded-sm border ${step.bg} ${step.color} flex-shrink-0 mt-0.5`}>
                      {step.num}
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wide text-text-primary group-hover:${step.color}`} style={{ transition: `color 220ms var(--ease-premium)` }}>{step.label}</div>
                      <div className="text-[11px] text-text-secondary mt-0.5 leading-relaxed">{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
