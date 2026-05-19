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
        
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <span className="eyebrow">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-primary leading-tight">
              Start a Conversation.
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
            <div className="border border-glass-border bg-white/[0.01] p-8 rounded-2xl space-y-6">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Email Channel</div>
                <a 
                  href={`mailto:${company.email}`} 
                  className="text-xl md:text-2xl font-bold text-text-primary hover:text-accent-blue transition-colors duration-300 break-words"
                >
                  {company.email}
                </a>
              </div>

              <div className="space-y-1 pt-4 border-t border-glass-border/40">
                <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Office Location</div>
                <div className="text-sm font-medium text-text-primary">
                  {company.location}
                </div>
              </div>
            </div>

            {/* How We Work Section */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-text-primary">How We Work</h3>
              <ul className="space-y-4 font-mono text-[10px] text-text-secondary uppercase tracking-wider">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  Operational Assessment
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  Workflow & Systems Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  Infrastructure Planning
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  Deployment Strategy
                </li>
              </ul>
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
