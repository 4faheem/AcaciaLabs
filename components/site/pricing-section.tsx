"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

type Tier = {
  name: string;
  tag: string;
  monthlyUsd: number | null;
  annualUsd: number | null;
  expectedRange?: string;
  highlight: boolean;
  target: string[];
  limits: string[];
  features: string[];
  cta: string;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    tag: "Small businesses · single-location operations",
    monthlyUsd: 19,
    annualUsd: 182,
    highlight: false,
    cta: "Start Free 30-Day Trial",
    target: ["Small businesses", "Single-location operations", "Early-stage organizations"],
    limits: ["1 branch", "Up to 5 staff accounts"],
    features: [
      "Inventory management",
      "Sales management",
      "Customer records",
      "Debt tracking",
      "Basic finance tracking",
      "Standard reports",
      "Mobile money integration",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tag: "Growing SMEs · multiple departments",
    monthlyUsd: 59,
    annualUsd: 566,
    highlight: true,
    cta: "Start Free 30-Day Trial",
    target: ["Growing SMEs", "Businesses with multiple departments"],
    limits: ["Up to 3 branches", "Up to 20 staff accounts"],
    features: [
      "Everything in Starter",
      "Advanced finance",
      "Procurement",
      "Staff roles & permissions",
      "Workflow automation",
      "Advanced analytics",
      "Custom invoices",
      "Priority support",
    ],
  },
  {
    name: "Professional",
    tag: "Multi-branch organizations · regional operations",
    monthlyUsd: 179,
    annualUsd: 1718,
    highlight: false,
    cta: "Start Free 30-Day Trial",
    target: ["Multi-branch organizations", "Regional operations", "Established companies"],
    limits: ["Up to 10 branches", "Up to 100 staff accounts"],
    features: [
      "Everything in Growth",
      "AI insights",
      "Executive dashboards",
      "Business forecasting",
      "Audit logs",
      "Advanced reporting",
      "Cross-branch analytics",
      "Dedicated onboarding",
      "Phone & WhatsApp support",
    ],
  },
  {
    name: "Enterprise",
    tag: "Corporations · institutions · networks",
    monthlyUsd: null,
    annualUsd: null,
    expectedRange: "$500-$5,000+/month",
    highlight: false,
    cta: "Contact Us",
    target: ["Corporations", "School networks", "Hospital groups", "Cooperatives", "Manufacturers", "NGOs", "Government institutions"],
    limits: ["Unlimited branches", "Unlimited staff"],
    features: [
      "Everything in Professional",
      "Custom modules",
      "Custom workflows",
      "Dedicated infrastructure options",
      "SLA agreements",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "Enterprise security controls",
      "On-site training",
      "White label options",
    ],
  },
];

const EXPANSION_REVENUE = [
  "Additional staff seats",
  "Additional branches",
  "AI credit packages",
  "Premium analytics",
  "API access",
  "Custom integrations",
  "Dedicated support plans",
  "Data migration services",
  "Training services",
  "White label licensing",
];

const TRIAL_INDUSTRIES = ["Business", "School", "Real Estate", "AgroMarket", "Manufacturing", "Healthcare"];
const ANNUAL_BENEFITS = ["Price lock guarantee", "Priority onboarding", "Early feature access", "Enhanced support benefits"];

function formatUSD(n: number) {
  return n.toLocaleString("en-US");
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden border-t" style={{ background: "#0c0c0c", borderColor: "rgba(79,124,255,0.07)" }}>
      {/* Watermark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none pointer-events-none" aria-hidden="true">
        <span className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-none" style={{ color: "rgba(79,124,255,0.025)", lineHeight: 1 }}>
          Business OS.
        </span>
        <br />
        <span className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-none" style={{ color: "rgba(79,124,255,0.025)", lineHeight: 1 }}>
          Executive Control.
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mx-auto mb-6">Pricing</span>
          <h2 className="mb-5 text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display), system-ui, sans-serif" }}>
            Simple, transparent pricing.
          </h2>
          <p className="max-w-2xl mx-auto mb-9" style={{ color: "rgba(154,154,154,0.76)", fontSize: "1rem", lineHeight: 1.75 }}>
            Start free for 30 days. No credit card required. Pick the plan that fits your business size — upgrade or downgrade anytime.
          </p>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border p-1.5" style={{ borderColor: "rgba(79,124,255,0.18)", background: "rgba(255,255,255,0.025)" }}>
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${!annual ? "text-white" : "text-text-secondary hover:text-white"}`}
              style={!annual ? { background: "#4F7CFF", boxShadow: "0 0 16px rgba(79,124,255,0.4)" } : {}}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${annual ? "text-white" : "text-text-secondary hover:text-white"}`}
              style={annual ? { background: "#4F7CFF", boxShadow: "0 0 16px rgba(79,124,255,0.4)" } : {}}
            >
              Annual
            </button>
          </div>
          <p className="mb-6 text-[13px] font-semibold" style={{ color: "#34D399" }}>Save 20% with annual billing.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier, i) => {
            const annualMonthlyEquivalent = tier.annualUsd !== null ? Math.floor(tier.annualUsd / 12) : null;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className={`glass-card h-full flex flex-col p-7 relative ${tier.highlight ? "" : ""}`}
                  style={tier.highlight ? { borderColor: "rgba(79,124,255,0.3)", boxShadow: "0 0 40px rgba(79,124,255,0.1), 0 4px 32px rgba(0,0,20,0.6)" } : {}}
                >
                  {tier.highlight && (
                    <span className="absolute top-4 right-4 text-[9px] terminal-text font-bold tracking-widest px-2.5 py-1 rounded-full" style={{ color: "#4F7CFF", border: "1px solid rgba(79,124,255,0.3)", background: "rgba(79,124,255,0.08)" }}>
                      MOST POPULAR
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: "0.35rem" }}>{tier.name}</h3>
                    <p className="text-[11px]" style={{ color: "rgba(154,154,154,0.6)" }}>{tier.tag}</p>
                  </div>

                  <div className="mb-7 pb-7 border-b" style={{ borderColor: "rgba(79,124,255,0.1)" }}>
                    {tier.monthlyUsd !== null ? (
                      <>
                        {annual && tier.annualUsd !== null ? (
                          <>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-[13px] font-semibold" style={{ color: "rgba(154,154,154,0.7)" }}>$</span>
                              <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{formatUSD(tier.annualUsd)}</span>
                              <span className="text-[13px]" style={{ color: "rgba(154,154,154,0.6)" }}>/yr</span>
                            </div>
                            <div className="text-[12px] font-semibold mt-1" style={{ color: "#34D399" }}>
                              (${annualMonthlyEquivalent}/month billed annually)
                            </div>
                          </>
                        ) : (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[13px] font-semibold" style={{ color: "rgba(154,154,154,0.7)" }}>$</span>
                            <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{formatUSD(tier.monthlyUsd)}</span>
                            <span className="text-[13px]" style={{ color: "rgba(154,154,154,0.6)" }}>/mo</span>
                          </div>
                        )}
                        <div className="text-[10px] terminal-text mt-2 tracking-wide" style={{ color: "rgba(154,154,154,0.5)" }}>
                          {annual ? "Annual billing · two months free equivalent" : "Monthly billing · switch anytime"} · local equivalent at checkout
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Custom</div>
                        <div className="text-[10px] terminal-text mt-2 tracking-wide" style={{ color: "rgba(154,154,154,0.5)" }}>Expected range: {tier.expectedRange}</div>
                      </>
                    )}
                  </div>

                  <div className="mb-5">
                    <div className="text-[9px] terminal-text uppercase tracking-widest mb-2" style={{ color: "rgba(154,154,154,0.48)" }}>Target customer</div>
                    <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>{tier.target.join(" · ")}</p>
                  </div>

                  <div className="mb-5">
                    <div className="text-[9px] terminal-text uppercase tracking-widest mb-2" style={{ color: "rgba(154,154,154,0.48)" }}>Limits</div>
                    <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>{tier.limits.join(" · ")}</p>
                  </div>

                  <ul className="flex-1 space-y-2.5 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[12.5px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <Check size={13} style={{ color: "#00D4FF", marginTop: 2, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full text-center py-3.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300"
                    style={tier.highlight
                      ? { background: "#4F7CFF", color: "#fff", boxShadow: "0 0 24px rgba(79,124,255,0.35)" }
                      : { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.03)" }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-7"
          >
            <h3 className="text-white mb-3" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>Billing currency</h3>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.66)" }}>
              Use USD as the master billing currency, with Tanzania, Kenya, Uganda, and Rwanda equivalents displayed dynamically by region.
            </p>
            <div className="flex flex-wrap gap-2">
              {["TZS", "KES", "UGX", "RWF"].map((currency) => (
                <span key={currency} className="rounded-full border px-3 py-1 text-[10px] font-bold" style={{ borderColor: "rgba(0,212,255,0.2)", color: "#00D4FF" }}>{currency}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="glass-card p-7"
          >
            <h3 className="text-white mb-3" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>Expansion revenue</h3>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.66)" }}>
              Monetization scales with organization size and business value, without locking essential business functionality behind excessive paywalls.
            </p>
            <div className="flex flex-wrap gap-2">
              {EXPANSION_REVENUE.map((item) => (
                <span key={item} className="rounded-full border px-3 py-1 text-[10px]" style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.64)" }}>{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="glass-card p-7"
          >
            <h3 className="text-white mb-3" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>Trial strategy</h3>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.66)" }}>
              Offer a 30-day free trial with no credit card required. Trial onboarding configures dashboards based on industry.
            </p>
            <div className="flex flex-wrap gap-2">
              {TRIAL_INDUSTRIES.map((industry) => (
                <span key={industry} className="rounded-full border px-3 py-1 text-[10px]" style={{ borderColor: "rgba(79,124,255,0.18)", color: "rgba(255,255,255,0.64)" }}>{industry}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card mt-5 p-7"
          style={{ borderColor: "rgba(52,211,153,0.22)", background: "rgba(52,211,153,0.035)" }}
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-white mb-3" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.25rem", fontWeight: 700 }}>
                Annual billing strategy
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
                Annual billing is the default pricing view to maximize ARR while giving long-term customers meaningful incentives and clear monthly-equivalent value.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ANNUAL_BENEFITS.map((benefit) => (
                <span key={benefit} className="rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em]" style={{ borderColor: "rgba(52,211,153,0.24)", color: "#34D399" }}>
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="mt-4 text-white" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            E-Manager is the operating system that powers modern organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
