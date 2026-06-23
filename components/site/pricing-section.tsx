"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { emanagerAppUrl } from "@/lib/site";

type Tier = {
  name: string;
  stage: string;
  blurb: string;
  // Pricing. monthlyUsd null → use priceWord ("Free" / "Custom").
  monthlyUsd: number | null;
  priceWord?: string;
  priceSub: string;
  highlight: boolean;
  cta: string;
  ctaHref: string;
  ctaExternal: boolean;
  features: string[];
};

// Mirrors emanager.africa pricing: Launch (free) · Growth ($20/mo) · Enterprise (custom).
// Annual billing = 2 months free (10× monthly).
const TIERS: Tier[] = [
  {
    name: "Launch",
    stage: "Getting started",
    blurb: "For organizations getting started.",
    monthlyUsd: 0,
    priceWord: "Free",
    priceSub: "forever",
    highlight: false,
    cta: "Start free",
    ctaHref: emanagerAppUrl,
    ctaExternal: true,
    features: [
      "1 location",
      "1 staff member",
      "100 invoices / month",
      "100 customers",
      "Inventory & sales tracking",
      "Offline mode",
      "AI Copilot — 20 requests/day",
      "Basic analytics",
    ],
  },
  {
    name: "Growth",
    stage: "Scaling operations",
    blurb: "For organizations ready to run and scale.",
    monthlyUsd: 20,
    priceSub: "/ month",
    highlight: true,
    cta: "Start 14-day free trial",
    ctaHref: emanagerAppUrl,
    ctaExternal: true,
    features: [
      "Everything in Launch",
      "Unlimited invoices & customers",
      "Unlimited devices",
      "Team collaboration",
      "Unlimited AI Copilot",
      "Cloud sync & automatic backups",
      "Smart automations",
      "Advanced analytics & dashboards",
      "Excel imports & exports",
      "Document management",
    ],
  },
  {
    name: "Enterprise",
    stage: "Operating at scale",
    blurb: "For organizations operating at scale.",
    monthlyUsd: null,
    priceWord: "Custom",
    priceSub: "let's talk",
    highlight: false,
    cta: "Talk to sales",
    ctaHref: "/contact",
    ctaExternal: false,
    features: [
      "Everything in Growth",
      "Multi-location management",
      "Department management",
      "Role-based permissions",
      "Audit logs & compliance exports",
      "SLA support & dedicated manager",
      "Custom integrations & API access",
      "Industry configurations",
      "White-label capabilities",
    ],
  },
];

// "Compare every stage" matrix. `true` renders a check, `false` a dash.
const COMPARISON: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: "Locations", values: ["1", "Up to 5", "Unlimited"] },
  { label: "Staff seats", values: ["1", "Up to 10", "Unlimited"] },
  { label: "Invoices / month", values: ["100", "Unlimited", "Unlimited"] },
  { label: "Customers", values: ["100", "Unlimited", "Unlimited"] },
  { label: "Devices", values: ["1", "Unlimited", "Unlimited"] },
  { label: "Offline mode", values: [true, true, true] },
  { label: "AI Copilot", values: ["20 / day", "Unlimited", "Unlimited"] },
  { label: "Cloud sync & backups", values: [false, true, true] },
  { label: "Smart automations", values: [false, true, true] },
  { label: "Role-based permissions", values: [false, false, true] },
  { label: "Audit logs & compliance", values: [false, false, true] },
  { label: "SLA & dedicated manager", values: [false, false, true] },
];

function formatUSD(n: number) {
  return n.toLocaleString("en-US");
}

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check size={14} style={{ color: "#00D4FF" }} className="mx-auto" />;
  if (v === false) return <Minus size={14} style={{ color: "rgba(255,255,255,0.18)" }} className="mx-auto" />;
  return <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.7)" }}>{v}</span>;
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
            Start free. Scale when you&apos;re ready. No card required — free forever under 50 invoices a month.
          </p>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border p-1.5" style={{ borderColor: "rgba(79,124,255,0.18)", background: "rgba(255,255,255,0.025)" }}>
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
          <p className="text-[13px] font-semibold" style={{ color: "#34D399" }}>Save 2 months with annual billing.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TIERS.map((tier, i) => {
            const annualUsd = tier.monthlyUsd ? tier.monthlyUsd * 10 : null;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="glass-card h-full flex flex-col p-7 relative"
                  style={tier.highlight ? { borderColor: "rgba(79,124,255,0.3)", boxShadow: "0 0 40px rgba(79,124,255,0.1), 0 4px 32px rgba(0,0,20,0.6)" } : {}}
                >
                  {tier.highlight && (
                    <span className="absolute top-4 right-4 text-[9px] terminal-text font-bold tracking-widest px-2.5 py-1 rounded-full" style={{ color: "#4F7CFF", border: "1px solid rgba(79,124,255,0.3)", background: "rgba(79,124,255,0.08)" }}>
                      MOST POPULAR
                    </span>
                  )}

                  <div className="mb-6">
                    <div className="text-[9px] terminal-text uppercase tracking-widest mb-2" style={{ color: "rgba(154,154,154,0.5)" }}>{tier.stage}</div>
                    <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: "0.35rem" }}>{tier.name}</h3>
                    <p className="text-[11px]" style={{ color: "rgba(154,154,154,0.6)" }}>{tier.blurb}</p>
                  </div>

                  <div className="mb-7 pb-7 border-b" style={{ borderColor: "rgba(79,124,255,0.1)" }}>
                    {tier.monthlyUsd && tier.monthlyUsd > 0 ? (
                      <>
                        {annual && annualUsd ? (
                          <>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-[13px] font-semibold" style={{ color: "rgba(154,154,154,0.7)" }}>$</span>
                              <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{formatUSD(annualUsd)}</span>
                              <span className="text-[13px]" style={{ color: "rgba(154,154,154,0.6)" }}>/yr</span>
                            </div>
                            <div className="text-[12px] font-semibold mt-1" style={{ color: "#34D399" }}>
                              2 months free
                            </div>
                          </>
                        ) : (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[13px] font-semibold" style={{ color: "rgba(154,154,154,0.7)" }}>$</span>
                            <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{formatUSD(tier.monthlyUsd)}</span>
                            <span className="text-[13px]" style={{ color: "rgba(154,154,154,0.6)" }}>{tier.priceSub}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.15rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{tier.priceWord}</span>
                        <span className="text-[13px]" style={{ color: "rgba(154,154,154,0.6)" }}>{tier.priceSub}</span>
                      </div>
                    )}
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
                    href={tier.ctaHref}
                    {...(tier.ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

        {/* Reassurance line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mt-10 text-center text-[13px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          We never cut you off mid-day. When your organization grows — invoices climb, a teammate joins, a new branch opens — we&apos;ll show you the next stage. You decide when to move.
        </motion.p>

        {/* Compare every stage */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-center text-white mb-8" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Compare every stage
          </h3>
          <div className="glass-card overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(79,124,255,0.12)" }}>
                  <th className="text-left p-4 text-[10px] terminal-text uppercase tracking-widest font-bold" style={{ color: "rgba(154,154,154,0.6)" }}>Capability</th>
                  {TIERS.map((t) => (
                    <th key={t.name} className="p-4 text-center text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: t.highlight ? "#4F7CFF" : "rgba(255,255,255,0.85)" }}>{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, idx) => (
                  <tr key={row.label} style={{ borderBottom: idx < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td className="p-4 text-[12.5px]" style={{ color: "rgba(255,255,255,0.75)" }}>{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="p-4 text-center">
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="mt-4 text-white" style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            E-Manager is the operating system that powers modern organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
