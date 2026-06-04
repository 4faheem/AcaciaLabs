"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    name: "Starter",
    tag: "For growing companies",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    highlight: false,
    features: [
      "Discovery & requirements workshop",
      "Core system implementation",
      "Team onboarding & training",
      "90-day support package",
      "Up to 3 workflows automated",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Professional",
    tag: "For scaling organizations",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    highlight: true,
    features: [
      "Deep-dive discovery engagement",
      "Full platform implementation",
      "Advanced team training program",
      "12-month priority support",
      "Unlimited workflow automation",
      "Advanced analytics & reporting",
      "AI assistant integration",
      "Custom integrations (up to 5)",
    ],
  },
  {
    name: "Enterprise",
    tag: "For large institutions",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    highlight: false,
    features: [
      "Strategic advisory engagement",
      "Enterprise-wide deployment",
      "Executive & team training",
      "Dedicated success manager",
      "Unlimited automations & AI",
      "Custom reporting & BI",
      "Full API access",
      "SLA-backed infrastructure",
      "Custom AI model fine-tuning",
    ],
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="relative py-36 overflow-hidden" style={{ background: "#0c0c0c" }}>
      {/* Watermark */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="text-[6rem] md:text-[9rem] lg:text-[12rem] font-black tracking-tighter leading-none"
          style={{ color: "rgba(61,129,227,0.025)", lineHeight: 1 }}
        >
          Build Faster.
        </span>
        <br />
        <span
          className="text-[6rem] md:text-[9rem] lg:text-[12rem] font-black tracking-tighter leading-none"
          style={{ color: "rgba(61,129,227,0.025)", lineHeight: 1 }}
        >
          Scale Smarter.
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow mx-auto mb-6">Engagement Models</span>
          <h2
            className="mb-6 text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            Choose your scale.
          </h2>
          <p className="max-w-xl mx-auto mb-10" style={{ color: "rgba(220,240,255,0.5)", fontSize: "1rem", lineHeight: 1.65, letterSpacing: "-0.005em" }}>
            Every engagement is scoped to your business. We start with discovery, design for your
            reality, and deploy systems that last.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full border border-glass-border bg-white/[0.02]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                !annual
                  ? "bg-accent-blue text-white shadow-[0_0_16px_rgba(61,129,227,0.4)]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                annual
                  ? "bg-accent-blue text-white shadow-[0_0_16px_rgba(61,129,227,0.4)]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Annual{" "}
              <span className="text-accent-success text-[9px] ml-1">–15%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`glass-card h-full flex flex-col p-8 relative ${tier.highlight ? "border-accent-blue/25" : ""}`}
                style={
                  tier.highlight
                    ? {
                        borderColor: "rgba(61,129,227,0.22)",
                        boxShadow: "0 0 40px rgba(61,129,227,0.08), 0 4px 32px rgba(0,0,20,0.6)",
                      }
                    : {}
                }
              >
                {tier.highlight && (
                  <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(61,129,227,0.8) 50%, transparent)" }} />
                )}
                {tier.highlight && (
                  <span className="absolute top-4 right-4 text-[9px] terminal-text font-bold tracking-widest text-accent-blue px-2.5 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/8">
                    MOST POPULAR
                  </span>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{tier.name}</h3>
                  <p className="text-[11px] text-text-muted terminal-text tracking-wide">
                    {tier.tag}
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-glass-border/40">
                  <div className="text-3xl font-bold text-text-primary">
                    {annual ? tier.annualPrice : tier.monthlyPrice}
                  </div>
                  <div className="text-[10px] terminal-text text-text-muted mt-1 tracking-widest">
                    Pricing scoped to your requirements
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-10">
                  <li className="text-[10px] terminal-text text-text-muted tracking-widest uppercase mb-4">
                    Includes:
                  </li>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[12px] text-text-secondary">
                      <Check size={12} className="text-accent-cyan mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full text-center py-3.5 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                    tier.highlight
                      ? "bg-accent-blue text-white hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(61,129,227,0.4)]"
                      : "border border-glass-border bg-white/[0.03] text-text-primary hover:bg-white/[0.08] hover:border-glass-border-hover"
                  }`}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Book a Demo"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
