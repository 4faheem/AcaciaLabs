"use client";

import Link from "next/link";
import { Hero } from "@/components/site/hero";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import { PricingSection } from "@/components/site/pricing-section";
import { TiltCard3D, MagneticWrapper, staggerContainer, springCard, FadeUp } from "@/components/site/motion-primitives";
import { motion } from "framer-motion";
import {
  Package, Receipt, Wallet, Users, Contact, BarChart3,
  Clock, Boxes, Smartphone, Check, ArrowRight, X
} from "lucide-react";

/* ── Section heading helper ─────────────────────────── */
function SectionHeading({ eyebrow, headline, sub }: { eyebrow: string; headline: string | React.ReactNode; sub?: string }) {
  return (
    <FadeUp className="text-center mb-16">
      <span className="eyebrow mx-auto mb-6">{eyebrow}</span>
      <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff", fontFamily: "var(--font-display), system-ui, sans-serif" }} className="mb-5">
        {headline}
      </h2>
      {sub && <p className="max-w-xl mx-auto" style={{ color: "rgba(154,154,154,0.8)", fontSize: "1rem", lineHeight: 1.7, letterSpacing: "-0.005em" }}>{sub}</p>}
    </FadeUp>
  );
}

export default function HomeSections() {
  return (
    <>
      {/* 1. HERO (includes E-Manager conversation centerpiece) */}
      <Hero />

      {/* 2. EARLY ACCESS BAR + who it's for */}
      <section className="border-y overflow-hidden" style={{ background: "rgba(8,8,8,0.95)", borderColor: "rgba(79,124,255,0.08)" }}>
        <div className="py-7">
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(0,212,255,0.7)" }}>
            Now accepting early access clients in Dar es Salaam.
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-14 whitespace-nowrap" style={{ animation: "marquee-left 26s linear infinite", width: "max-content" }}>
              {[
                "Wholesale Traders", "Agro-Dealers", "Schools", "Property Managers", "Retail Chains", "Hardware Stores",
                "Wholesale Traders", "Agro-Dealers", "Schools", "Property Managers", "Retail Chains", "Hardware Stores",
              ].map((name, i) => (
                <span key={i} className="text-[12px] font-semibold tracking-[0.15em] uppercase cursor-default transition-colors hover:text-white" style={{ color: "rgba(154,154,154,0.45)" }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM — plain language */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.05) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-5xl px-6 lg:px-12 relative z-10">
          <FadeUp className="text-center mb-14">
            <span className="eyebrow mx-auto mb-6">The Daily Struggle</span>
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff" }}>
              Still running your business on<br />
              <span style={{ color: "rgba(154,154,154,0.45)" }}>spreadsheets and paper?</span>
            </h2>
          </FadeUp>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
          >
            {[
              "You never know your real stock until you count it by hand.",
              "Cash comes in and goes out, but the numbers never quite add up.",
              "Every branch keeps its own records — and none of them match.",
              "Reports take hours to prepare, and they're out of date by the time they're ready.",
            ].map((pain, i) => (
              <motion.div key={i} variants={springCard}>
                <div className="glass-card p-6 h-full flex items-start gap-4 cursor-default">
                  <div className="p-1.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: "rgba(255,90,90,0.1)", border: "1px solid rgba(255,90,90,0.2)" }}>
                    <X size={12} style={{ color: "rgba(255,120,120,0.9)" }} />
                  </div>
                  <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>{pain}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.3}>
            <p className="mt-10 text-center" style={{ fontSize: "1.05rem", fontWeight: 500, color: "rgba(0,212,255,0.8)" }}>
              E-Manager puts all of it in one place — and keeps it up to date automatically.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="section-container">
          <SectionHeading
            eyebrow="How It Works"
            headline="Up and running in an afternoon."
            sub="No IT department needed. No complicated setup. Just three simple steps."
          />
          <motion.div
            className="grid md:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
          >
            {[
              { icon: Clock, step: "1", title: "Set up your business in 30 minutes", desc: "Create your account, add your business details, and you're ready. No installation, no technician visit." },
              { icon: Boxes, step: "2", title: "Add your products, staff, and customers", desc: "Enter your stock, your team, and your customers once. E-Manager keeps everything connected from there." },
              { icon: Smartphone, step: "3", title: "See your business from any device", desc: "Open your real-time dashboard on your phone, tablet, or computer — from the shop, the warehouse, or home." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <motion.div key={step} variants={springCard}>
                <TiltCard3D intensity={5} className="glass-card p-8 h-full cursor-default group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded-md inline-flex" style={{ background: "rgba(79,124,255,0.1)", border: "1px solid rgba(79,124,255,0.2)" }}>
                      <Icon size={18} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                    </div>
                    <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1, color: "rgba(79,124,255,0.18)" }}>{step}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", marginBottom: "0.75rem" }} className="group-hover:text-accent-blue transition-colors">
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "rgba(154,154,154,0.65)" }}>{desc}</p>
                </TiltCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. THE 6 MODULES */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="section-container">
          <SectionHeading
            eyebrow="One Platform · Six Tools"
            headline="Everything your business needs."
            sub="E-Manager brings the six things every business runs on into a single, connected platform."
          />
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
          >
            {[
              { icon: Package, name: "Inventory", desc: "Track every product across every branch. Know exactly what's in stock, what's running low, and what's selling — in real time." },
              { icon: Receipt, name: "Sales & Invoicing", desc: "Record sales, print or send invoices, and watch your daily revenue update automatically as you trade." },
              { icon: Wallet, name: "Finance", desc: "See money in and money out at a glance. Track expenses, profit, and cash flow without touching a spreadsheet." },
              { icon: Users, name: "HR & Staff", desc: "Manage your team, roles, and permissions. See who did what, and give each person access to only what they need." },
              { icon: Contact, name: "Customer Records", desc: "Keep every customer's details and history in one place — so you can follow up, build loyalty, and sell more." },
              { icon: BarChart3, name: "Reports", desc: "Get clear reports on sales, stock, and finances whenever you want them — ready in seconds, not hours." },
            ].map(({ icon: Icon, name, desc }) => (
              <motion.div key={name} variants={springCard}>
                <TiltCard3D intensity={6} className="glass-card p-7 h-full group flex flex-col cursor-default">
                  <div className="p-2.5 rounded-md inline-flex mb-5 self-start" style={{ background: "rgba(79,124,255,0.1)", border: "1px solid rgba(79,124,255,0.2)" }}>
                    <Icon size={18} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] font-bold mb-3 group-hover:text-accent-blue transition-colors duration-200" style={{ color: "#fff", fontFamily: "var(--font-display), system-ui, sans-serif" }}>{name}</h3>
                  <p className="text-[12.5px] leading-relaxed flex-1" style={{ color: "rgba(154,154,154,0.7)" }}>{desc}</p>
                </TiltCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. BUILT FOR TANZANIA + founder */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,212,255,0.04), transparent 60%)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="eyebrow mb-8">Built for Tanzania</span>
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.05, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "1.5rem" }}>
                Made here, for how<br />
                <span style={{ color: "rgba(0,212,255,0.75)" }}>business really works.</span>
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.78, color: "rgba(154,154,154,0.65)", maxWidth: "32rem", marginBottom: "2.5rem" }}>
                E-Manager isn't a foreign tool forced to fit. It's built in Dar es Salaam, for
                Tanzanian businesses — the way you actually buy, sell, and keep records.
              </p>
              <div className="space-y-3">
                {[
                  "Works on the phone you already have.",
                  "Built for multiple branches and busy shops.",
                  "Simple enough that any staff member can use it.",
                ].map(t => (
                  <div key={t} className="flex items-start gap-3">
                    <Check size={16} style={{ color: "#00D4FF", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{t}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="glass-deep p-10 text-center">
                <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.72, fontFamily: "var(--font-display), system-ui, sans-serif", letterSpacing: "-0.02em", fontStyle: "italic" }}>
                  "Tanzanian businesses don't need more complicated software. They need one simple
                  place to run everything. That's what we built."
                </p>
                <div className="mt-8 pt-8 border-t border-glass-border/40">
                  <div className="text-sm font-bold text-white">Fahim Kiama</div>
                  <div className="text-[11px] terminal-text tracking-widest mt-1" style={{ color: "rgba(154,154,154,0.45)" }}>FOUNDER · ACACIA LABS</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <PricingSection />

      {/* 8. FINAL CTA */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.1), transparent 65%)" }} />
        <div className="section-container flex flex-col items-center text-center relative z-10">
          <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-spotlight p-14 md:p-20 max-w-4xl w-full"
            style={{ boxShadow: "0 0 100px rgba(79,124,255,0.18), 0 0 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(0,212,255,0.2)" }}>
            <span className="eyebrow mx-auto mb-8">Get Started</span>
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.05, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "1rem" }}>
              Try E-Manager free for 30 days.
            </h2>
            <p className="max-w-md mx-auto mb-3" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              No card needed. Set up in 30 minutes. See your whole business on one screen.
            </p>
            <p className="max-w-md mx-auto mb-12" style={{ color: "rgba(0,212,255,0.6)", fontSize: "0.95rem", fontWeight: 500 }}>
              Jaribu bure kwa siku 30. Hakuna malipo ya awali.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticWrapper strength={0.3}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "100px", background: "#4F7CFF", color: "#fff",
                  padding: "14px 36px", fontSize: "14px", fontWeight: 600,
                  textDecoration: "none", boxShadow: "0 0 32px rgba(79,124,255,0.4)",
                  transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6B93FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(79,124,255,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#4F7CFF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(79,124,255,0.4)"; }}
                >Start Free 30-Day Trial</Link>
              </MagneticWrapper>
              <MagneticWrapper strength={0.22}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "100px", border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.8)", padding: "14px 36px",
                  fontSize: "14px", fontWeight: 500, textDecoration: "none",
                  transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >Book a Demo</Link>
              </MagneticWrapper>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
