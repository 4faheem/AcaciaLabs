"use client";

import Link from "next/link";
import { Hero } from "@/components/site/hero";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import { PricingSection } from "@/components/site/pricing-section";
import { TiltCard3D, MagneticWrapper, staggerContainer, springCard, FadeUp } from "@/components/site/motion-primitives";
import { motion } from "framer-motion";
import {
  Brain, Database, BarChart3, GitBranch, Search, FileText,
  Zap, TrendingUp, Users, Activity, Shield, Globe, Heart,
  GraduationCap, Building2, Truck, ShoppingBag, Factory,
  Briefcase, ArrowRight, Cpu, Network, Bot, MessageSquare,
  Lightbulb, Target, Star, Award, Check, Sparkles
} from "lucide-react";

/* ── Sparkline ──────────────────────────────────────── */
function Sparkline({ data, color = "#4F7CFF" }: { data: number[]; color?: string }) {
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
  const w = 72, h = 28;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * (h - 4) - 2}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible opacity-70">
      <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" points={pts} />
    </svg>
  );
}

function MiniBar({ data }: { data: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className="flex items-end gap-1.5 h-16">
      {data.map(d => (
        <div key={d.label} className="flex flex-col items-center gap-1 flex-1">
          <div className="w-full rounded-sm" style={{ height: `${(d.value / max) * 56}px`, background: d.color, minHeight: 3 }} />
          <span className="text-[7px] terminal-text" style={{ color: "rgba(154,154,154,0.7)" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Acacia OS Dashboard ────────────────────────────── */
function AcaciaDashboard() {
  const spark1 = [10, 16, 14, 22, 18, 28, 24, 34, 28, 40, 35, 44];
  const spark2 = [6, 11, 9, 15, 18, 13, 21, 17, 25, 21, 28, 32];
  const bars = [
    { label: "Mon", value: 65, color: "rgba(79,124,255,0.6)" },
    { label: "Tue", value: 82, color: "rgba(79,124,255,0.7)" },
    { label: "Wed", value: 74, color: "rgba(0,212,255,0.65)" },
    { label: "Thu", value: 91, color: "rgba(0,212,255,0.8)" },
    { label: "Fri", value: 88, color: "rgba(79,124,255,0.7)" },
    { label: "Sat", value: 52, color: "rgba(79,124,255,0.3)" },
    { label: "Sun", value: 38, color: "rgba(79,124,255,0.25)" },
  ];
  const stats = [
    { label: "Active Workflows", value: "2,847", change: "+12%", color: "#4F7CFF", spark: spark1 },
    { label: "AI Operations", value: "48.2K", change: "+28%", color: "#00D4FF", spark: spark2 },
    { label: "Revenue Tracked", value: "$1.4M", change: "+8%", color: "#34D399", spark: spark1 },
    { label: "System Uptime", value: "99.99%", change: "SLA", color: "#E0B341", spark: spark2 },
  ];
  const side = [
    { icon: BarChart3, label: "Executive Dashboard", active: true },
    { icon: Brain, label: "AI Assistant", active: false },
    { icon: Activity, label: "Analytics", active: false },
    { icon: GitBranch, label: "Workflow Auto.", active: false },
    { icon: Users, label: "Team Activity", active: false },
    { icon: TrendingUp, label: "Predictions", active: false },
  ];
  return (
    <div className="rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.9)]"
      style={{ background: "rgba(5,5,5,0.96)", border: "1px solid rgba(79,124,255,0.12)" }}>
      <div className="flex items-center justify-between px-5 py-3 border-b"
        style={{ background: "rgba(3,3,3,0.9)", borderColor: "rgba(79,124,255,0.08)" }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.55 }} />)}
          </div>
          <span className="terminal-text text-[10px] tracking-[0.2em]" style={{ color: "rgba(154,154,154,0.6)" }}>ACACIA OS · AI WORKSPACE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-success stat-live" />
          <span className="terminal-text text-[9px] tracking-widest text-accent-success">LIVE</span>
        </div>
      </div>
      <div className="flex" style={{ minHeight: 360 }}>
        <div className="w-44 border-r flex flex-col gap-0.5 p-2.5"
          style={{ background: "rgba(3,3,3,0.7)", borderColor: "rgba(79,124,255,0.07)" }}>
          {side.map(({ icon: Icon, label, active }) => (
            <div key={label} className={`flex items-center gap-2.5 px-3 py-2 rounded-sm cursor-pointer transition-all ${active ? "bg-accent-blue/10 text-accent-cyan" : "hover:bg-white/[0.03]"}`}
              style={{ color: active ? "#4F7CFF" : "rgba(154,154,154,0.55)" }}>
              <Icon size={11} strokeWidth={1.5} /><span className="text-[9px] terminal-text tracking-wide">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          <div className="grid grid-cols-4 gap-2">
            {stats.map(s => (
              <div key={s.label} className="rounded-sm p-3 flex flex-col gap-2"
                style={{ background: "rgba(255,255,255,0.018)", border: "1px solid rgba(79,124,255,0.06)" }}>
                <div className="text-[8px] terminal-text tracking-wide leading-tight" style={{ color: "rgba(154,154,154,0.6)" }}>{s.label}</div>
                <div className="text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-accent-success">{s.change}</span>
                  <Sparkline data={s.spark} color={s.color} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-3 flex-1">
            <div className="col-span-2 rounded-sm p-3.5 flex flex-col gap-2.5"
              style={{ background: "rgba(79,124,255,0.04)", border: "1px solid rgba(79,124,255,0.1)" }}>
              <div className="flex items-center gap-2 pb-2.5 border-b" style={{ borderColor: "rgba(79,124,255,0.08)" }}>
                <Sparkles size={11} style={{ color: "#4F7CFF" }} />
                <span className="text-[9px] terminal-text tracking-widest" style={{ color: "#4F7CFF" }}>AI ASSISTANT</span>
              </div>
              <div className="flex flex-col gap-2 text-[9px] terminal-text leading-relaxed">
                {[
                  { from: "user", text: "Analyze Q4 operations." },
                  { from: "ai", text: "Revenue +18% vs Q3. 847 tasks automated this month." },
                  { from: "user", text: "Predict next month efficiency." },
                  { from: "ai", text: "Forecast: +22% gain. Confidence: 94%." },
                ].map((msg, i) => (
                  <div key={i} className={`rounded-sm px-2.5 py-2 max-w-[92%] ${msg.from === "user" ? "self-start" : "self-end"}`}
                    style={{ background: msg.from === "user" ? "rgba(79,124,255,0.07)" : "rgba(255,255,255,0.04)" }}>
                    <span style={{ color: msg.from === "ai" ? "rgba(255,255,255,0.7)" : "rgba(154,154,154,0.7)" }}>{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 rounded-sm p-3.5 flex flex-col gap-3"
              style={{ background: "rgba(255,255,255,0.012)", border: "1px solid rgba(79,124,255,0.06)" }}>
              <div className="flex items-center justify-between pb-2.5 border-b" style={{ borderColor: "rgba(79,124,255,0.07)" }}>
                <div className="flex items-center gap-2">
                  <BarChart3 size={11} style={{ color: "#00D4FF" }} />
                  <span className="text-[9px] terminal-text tracking-widest" style={{ color: "#00D4FF" }}>WORKFLOW ANALYTICS</span>
                </div>
                <span className="text-[8px] terminal-text" style={{ color: "rgba(154,154,154,0.5)" }}>This Week</span>
              </div>
              <div className="flex-1 flex items-end"><MiniBar data={bars} /></div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t" style={{ borderColor: "rgba(79,124,255,0.06)" }}>
                {[{ label: "Automated", value: "84%", color: "#4F7CFF" }, { label: "Avg Speed", value: "1.8s", color: "#00D4FF" }, { label: "Error Rate", value: "0.02%", color: "#34D399" }].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[8px] terminal-text" style={{ color: "rgba(154,154,154,0.5)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST BAR */}
      <section className="border-y overflow-hidden" style={{ background: "rgba(8,8,8,0.95)", borderColor: "rgba(79,124,255,0.08)" }}>
        <div className="py-7">
          <p className="text-center terminal-text text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: "rgba(154,154,154,0.4)" }}>
            Trusted by ambitious teams building the next generation of business.
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 whitespace-nowrap" style={{ animation: "marquee-left 24s linear infinite", width: "max-content" }}>
              {[
                "Financial Services","Healthcare","Government","Education",
                "Logistics","Retail","Manufacturing","Professional Services",
                "Financial Services","Healthcare","Government","Education",
                "Logistics","Retail","Manufacturing","Professional Services",
              ].map((name, i) => (
                <span key={i} className="text-[11px] font-semibold tracking-[0.2em] uppercase cursor-default transition-colors hover:text-white" style={{ color: "rgba(154,154,154,0.45)" }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALLOUT — You See The Problems */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.05) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-5xl px-6 lg:px-12 relative z-10">
          <FadeUp>
            <h2 style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "3rem" }}>
              Execution is the bottleneck.
              <br />
              <span style={{ color: "rgba(154,154,154,0.45)" }}>Not ambition.</span>
            </h2>
          </FadeUp>
          {/* glass-frosted wrapper — Gestalt closure */}
          <motion.div
            className="glass-frosted grid sm:grid-cols-2 gap-px"
            style={{ border: "none" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
          >
            {[
              { label: "Hard work without intelligent systems produces diminishing returns.", num: "01" },
              { label: "Opportunity doesn't disappear. It moves to whoever executes faster.", num: "02" },
              { label: "Talent is not the constraint. Access to the right systems is.", num: "03" },
              { label: "World-class infrastructure has never been built for this market. Until now.", num: "04" },
            ].map(({ label, num }) => (
              <motion.div key={num} variants={springCard}
                className="group p-8 flex items-start gap-6 cursor-default transition-all duration-300"
                style={{ background: "rgba(8,8,8,0.9)" }}
                whileHover={{ background: "rgba(79,124,255,0.04)" }}
              >
                <span className="terminal-text text-[10px] font-bold tracking-widest pt-1 flex-shrink-0" style={{ color: "rgba(79,124,255,0.5)" }}>{num}</span>
                <p style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, letterSpacing: "-0.01em" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
          <FadeUp delay={0.3}>
            <p className="mt-10 text-center" style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(79,124,255,0.8)", letterSpacing: "-0.01em" }}>
              Acacia Labs builds the systems that remove this constraint permanently.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 4. PROBLEM — Africa Has Never Lacked Talent */}
      <section className="relative py-36 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeUp>
              <span className="eyebrow mb-8">The Foundation</span>
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.05, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "1.75rem" }}>
                Ambition is not the constraint.
                <br />
                <span style={{ color: "rgba(154,154,154,0.45)" }}>Access is.</span>
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.78, color: "rgba(154,154,154,0.6)", maxWidth: "32rem", marginBottom: "1.25rem" }}>
                Without access to intelligence systems, execution cannot scale.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.78, color: "rgba(255,255,255,0.75)", maxWidth: "32rem", fontWeight: 500, marginBottom: "2.5rem" }}>
                Acacia Labs exists to close that gap.
              </p>
              <MagneticWrapper strength={0.25}>
                <Link href="/about" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  borderRadius: "100px", border: "1px solid rgba(79,124,255,0.3)",
                  color: "rgba(79,124,255,0.9)", padding: "11px 28px",
                  fontSize: "13px", fontWeight: 600, letterSpacing: "0.02em",
                  textDecoration: "none", transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(79,124,255,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  Our Mission <ArrowRight size={13} />
                </Link>
              </MagneticWrapper>
            </FadeUp>

            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-8%" }}
            >
              {[
                { icon: Cpu, label: "Operating Systems", desc: "The coordination layer most businesses are missing — finance, logistics, and teams running on one source of truth instead of twelve spreadsheets." },
                { icon: Brain, label: "Decision Intelligence", desc: "Models that speak Swahili, understand M-Pesa reconciliation, and survive a dropped connection — not Silicon Valley demos ported overseas." },
                { icon: Zap, label: "Real Tooling", desc: "Software built around how work actually happens here: offline-first, mobile-money native, resilient by default." },
                { icon: TrendingUp, label: "Execution", desc: "The gap between a good idea and a shipped result. We close it — and we measure what closing it is worth." },
              ].map(({ icon: Icon, label, desc }) => (
                <motion.div key={label} variants={springCard}>
                  <TiltCard3D intensity={6} className="glass-card p-6 h-full cursor-default">
                    <div className="p-2 rounded-sm mb-4 inline-flex" style={{ background: "rgba(79,124,255,0.08)", border: "1px solid rgba(79,124,255,0.14)" }}>
                      <Icon size={16} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                    </div>
                    <div className="text-sm font-bold mb-2" style={{ color: "#fff" }}>{label}</div>
                    <p className="text-[11px] leading-relaxed" style={{ color: "rgba(154,154,154,0.7)" }}>{desc}</p>
                  </TiltCard3D>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PLATFORM SHOWCASE */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top center, rgba(79,124,255,0.07), transparent 60%)" }} />
        <div className="section-container">
          <SectionHeading
            eyebrow="Flagship Platform"
            headline="One workspace. Every operation."
            sub="Acacia OS brings executive intelligence, AI automation, and real-time analytics into a single command center for your organization."
          />
          <MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <AcaciaDashboard />
          </MotionDiv>
        </div>
      </section>

      {/* 6. CONNECTED ECOSYSTEM */}
      <section className="relative py-36 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="section-container">
          <SectionHeading
            eyebrow="Intelligence Ecosystem"
            headline={<>One layer.<br /><span style={{ color: "rgba(154,154,154,0.45)" }}>Every capability.</span></>}
            sub="Not isolated products. A unified intelligence layer — every system connected, every capability compounding."
          />

          {/* Connected node visualization */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central node */}
            <FadeUp className="flex justify-center mb-8">
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full" style={{ background: "radial-gradient(circle, rgba(79,124,255,0.15), rgba(79,124,255,0.04))", border: "1px solid rgba(79,124,255,0.3)", boxShadow: "0 0 40px rgba(79,124,255,0.15)" }}>
                <Brain size={28} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(79,124,255,0.06)", animationDuration: "3s" }} />
              </div>
            </FadeUp>

            {/* Ecosystem nodes */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-8%" }}
            >
              {[
                { icon: Sparkles, name: "Syncraft AI", tag: "AI Productivity", desc: "Intelligence assistant for teams — thinks, automates, and surfaces insights from your entire operation.", color: "#4F7CFF" },
                { icon: Database, name: "Enterprise Systems", tag: "Operations Intelligence", desc: "End-to-end enterprise infrastructure covering finance, logistics, and team coordination.", color: "#00D4FF" },
                { icon: Zap, name: "AI Productivity", tag: "Workflow Amplification", desc: "AI-native productivity systems that turn every team member into a high-leverage operator.", color: "#4F7CFF" },
                { icon: GitBranch, name: "Autonomous Workflows", tag: "Execution Engine", desc: "Self-running operational workflows that execute without constant human supervision.", color: "#00D4FF" },
                { icon: Network, name: "Intelligence API", tag: "Integration Layer", desc: "Connect any existing system to the Acacia intelligence layer via a unified API.", color: "#4F7CFF" },
                { icon: TrendingUp, name: "Future Products", tag: "Next Generation", desc: "Continuously evolving intelligence capabilities designed for the next decade of African business.", color: "#00D4FF" },
              ].map(({ icon: Icon, name, tag, desc, color }) => (
                <motion.div key={name} variants={springCard}>
                  <TiltCard3D intensity={6} className="glass-card p-7 h-full group flex flex-col cursor-default">
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-2.5 rounded-sm inline-flex" style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
                        <Icon size={17} style={{ color }} strokeWidth={1.5} />
                      </div>
                      <span className="text-[8px] terminal-text tracking-widest uppercase" style={{ color: "rgba(154,154,154,0.45)" }}>{tag}</span>
                    </div>
                    <h3 className="text-[15px] font-bold mb-3 group-hover:text-accent-blue transition-colors duration-200" style={{ color: "#fff", fontFamily: "var(--font-display), system-ui, sans-serif" }}>{name}</h3>
                    <p className="text-[12px] leading-relaxed flex-1" style={{ color: "rgba(154,154,154,0.7)" }}>{desc}</p>
                    <div className="flex items-center gap-1.5 mt-5 text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors group-hover:text-white" style={{ color: color }}>
                      Explore <ArrowRight size={10} />
                    </div>
                  </TiltCard3D>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. DIFFERENTIATION */}
      <section className="relative py-36 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="text-center mb-20">
            <h2 style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff" }}>
              Others build software.
              <br />
              <span style={{ color: "rgba(79,124,255,0.9)" }}>We build capability.</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Others — flat, dead */}
            <FadeUp delay={0.1}>
              <div className="p-8 rounded-2xl h-full" style={{ background: "rgba(8,8,8,0.8)", border: "1px solid rgba(154,154,154,0.07)" }}>
                <div className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase mb-7" style={{ color: "rgba(154,154,154,0.35)" }}>The market</div>
                <div className="space-y-4">
                  {["More features","Better dashboards","Faster tools","Automation templates","AI wrappers"].map(item => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-4 h-px flex-shrink-0" style={{ background: "rgba(154,154,154,0.2)" }} />
                      <span style={{ fontSize: "1rem", fontWeight: 400, color: "rgba(154,154,154,0.4)", textDecoration: "line-through" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Acacia Labs — glass-spotlight: Von Restorff isolation */}
            <FadeUp delay={0.2}>
              <div className="glass-spotlight p-8 h-full">
                <div className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase mb-7" style={{ color: "rgba(79,124,255,0.8)" }}>Acacia Labs</div>
                <div className="space-y-4">
                  {["Intelligence systems","Decision engines","Execution infrastructure","Unified capability layer","Compounding outcomes"].map(item => (
                    <div key={item} className="flex items-center gap-4">
                      <Check size={14} style={{ color: "#4F7CFF", flexShrink: 0 }} />
                      <span style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 8. EAST AFRICA IDENTITY */}
      <section className="relative py-36 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,212,255,0.04), transparent 60%)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="eyebrow mb-8">Our Origin</span>
              <h2 style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.02, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "1.5rem" }}>
                Built in East Africa.<br />
                <span style={{ color: "rgba(0,212,255,0.75)" }}>Built for the world.</span>
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(154,154,154,0.6)", maxWidth: "32rem", marginBottom: "2.5rem" }}>
                World-class technology does not require geography. It requires precision, discipline, and the refusal to accept inferior systems as the default.
              </p>
              <div className="space-y-3">
                {["We did not adapt existing platforms. We built from first principles.","Designed for real conditions — not theoretical environments.","The infrastructure others said couldn't exist here."].map(t => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#00D4FF" }} />
                    <p style={{ fontSize: "0.9rem", color: "rgba(154,154,154,0.65)", lineHeight: 1.6 }}>{t}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* glass-deep — deepest authority signal: founder quote carries maximum weight */}
            <FadeUp delay={0.15}>
              <div className="glass-deep p-10 text-center">
                <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 500, color: "rgba(255,255,255,0.82)", lineHeight: 1.72, fontFamily: "var(--font-display), system-ui, sans-serif", letterSpacing: "-0.02em", fontStyle: "italic" }}>
                  "Africa consumed systems built for someone else's reality for decades. We are building the systems built for ours."
                </p>
                <div className="mt-8 pt-8 border-t border-glass-border/40">
                  <div className="text-sm font-bold text-white">Fahim Kiama</div>
                  <div className="text-[11px] terminal-text tracking-widest mt-1" style={{ color: "rgba(154,154,154,0.45)" }}>FOUNDER & CEO · ACACIA LABS</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 9. VISION */}
      <section className="relative py-36 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.06), transparent 65%)" }} />
        <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center relative z-10">
          <FadeUp>
            <span className="eyebrow mx-auto mb-8">The Inevitable</span>
            <h2 style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "2rem" }}>
              Every economic era is defined<br />
              <span style={{ color: "rgba(79,124,255,0.85)" }}>by its infrastructure.</span>
            </h2>
          </FadeUp>

          <motion.div
            className="grid grid-cols-3 gap-4 mt-14 mb-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
          >
            {[
              { era: "Industrial Age", driver: "Machines", icon: Factory, muted: true },
              { era: "Digital Age", driver: "Software", icon: Cpu, muted: true },
              { era: "Intelligence Age", driver: "Intelligence", icon: Brain, muted: false },
            ].map(({ era, driver, icon: Icon, muted }, i) => (
              <motion.div key={era} variants={springCard}>
                <div className={muted ? "glass-card p-8 text-center" : "glass-spotlight p-8 text-center"}>
                  <Icon size={22} style={{ color: muted ? "rgba(154,154,154,0.25)" : "#4F7CFF", margin: "0 auto 16px" }} strokeWidth={1.5} />
                  <div className="text-[9px] terminal-text tracking-widest uppercase mb-2" style={{ color: muted ? "rgba(154,154,154,0.3)" : "rgba(79,124,255,0.75)" }}>{era}</div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 700, color: muted ? "rgba(154,154,154,0.28)" : "#fff", fontFamily: "var(--font-display), system-ui, sans-serif", letterSpacing: "-0.03em" }}>{driver}</div>
                  {!muted && <div className="mt-3 text-[9px] terminal-text tracking-widest" style={{ color: "rgba(0,212,255,0.7)" }}>NOW BUILDING</div>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.3}>
            <p style={{ fontSize: "1rem", color: "rgba(154,154,154,0.6)", lineHeight: 1.75, maxWidth: "34rem", margin: "0 auto" }}>
              The intelligence era is not approaching. It is here. Acacia Labs is building the infrastructure that defines it.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 10. INDUSTRIES */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="section-container">
          <SectionHeading eyebrow="Industries" headline="Built for every modern industry." />
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
            {[
              { icon: Building2, name: "Financial Services", challenge: "Fragmented transaction data", opportunity: "AI-powered reconciliation", solution: "Unified financial intelligence" },
              { icon: Heart, name: "Healthcare", challenge: "Disconnected workflows", opportunity: "Automated care coordination", solution: "Intelligent operations" },
              { icon: GraduationCap, name: "Education", challenge: "Manual admin overhead", opportunity: "AI-assisted management", solution: "Smart campus systems" },
              { icon: Globe, name: "Government", challenge: "Paper-based processes", opportunity: "Digital automation", solution: "e-Government infrastructure" },
              { icon: Truck, name: "Logistics", challenge: "Route visibility gaps", opportunity: "Real-time tracking AI", solution: "End-to-end intelligence" },
              { icon: ShoppingBag, name: "Retail", challenge: "Inventory complexity", opportunity: "Demand forecasting AI", solution: "Unified commerce ops" },
              { icon: Factory, name: "Manufacturing", challenge: "Production bottlenecks", opportunity: "Predictive maintenance", solution: "AI-powered factory systems" },
              { icon: Briefcase, name: "Professional Services", challenge: "Project coordination", opportunity: "Automated delivery", solution: "Intelligent service management" },
            ].map(({ icon: Icon, name, challenge, opportunity, solution }) => (
              <motion.div key={name} variants={springCard}>
                <TiltCard3D intensity={5} className="glass-card p-6 h-full group cursor-default flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={17} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                    <span className="text-sm font-bold group-hover:text-accent-blue transition-colors duration-200" style={{ color: "#fff", fontFamily: "var(--font-display), system-ui, sans-serif" }}>{name}</span>
                  </div>
                  <div className="flex flex-col gap-3 flex-1 text-[11px]">
                    <div>
                      <span className="terminal-text text-[8px] tracking-widest uppercase block mb-1" style={{ color: "rgba(154,154,154,0.4)" }}>Challenge</span>
                      <p style={{ color: "rgba(154,154,154,0.7)" }}>{challenge}</p>
                    </div>
                    <div>
                      <span className="terminal-text text-[8px] tracking-widest uppercase block mb-1" style={{ color: "rgba(79,124,255,0.6)" }}>AI Opportunity</span>
                      <p style={{ color: "rgba(154,154,154,0.7)" }}>{opportunity}</p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-glass-border/40">
                      <span className="terminal-text text-[8px] tracking-widest uppercase block mb-1" style={{ color: "rgba(0,212,255,0.6)" }}>Acacia Solution</span>
                      <p style={{ color: "#fff" }} className="font-medium">{solution}</p>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 11. TRUST PRINCIPLES */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <FadeUp>
            <span className="eyebrow mx-auto mb-8">Our Commitment</span>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "3rem" }}>
              No metrics without meaning.<br />
              <span style={{ color: "rgba(154,154,154,0.45)" }}>Only principles.</span>
            </h2>
          </FadeUp>
          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
          >
            {/* glass-card on each row — transparency as trust */}
            {[
              "Impact is the metric. Everything else is noise.",
              "Designed to scale without redesigning. Compounding systems, not patched tools.",
              "Capability, not productivity. We expand what is possible.",
              "Intelligence systems — not dashboards dressed as strategy.",
              "African innovation is not a vertical. It is the foundation.",
            ].map((p, i) => (
              <motion.div key={i} variants={springCard}
                className="glass-card flex items-center gap-5 p-5 text-left group cursor-default"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Check size={16} style={{ color: "#4F7CFF", flexShrink: 0 }} />
                <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 12. PRICING */}
      <PricingSection />

      {/* 13. FINAL CTA */}
      <section className="relative py-36 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.1), transparent 65%)" }} />
        <div className="section-container flex flex-col items-center text-center relative z-10">
          {/* glass-spotlight on CTA — maximum focal energy, conversion point of the entire page */}
          <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-spotlight p-14 md:p-20 max-w-4xl w-full"
            style={{ boxShadow: "0 0 100px rgba(79,124,255,0.18), 0 0 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(0,212,255,0.2)" }}>
            <span className="eyebrow mx-auto mb-8">Get Started</span>
            <h2 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, fontFamily: "var(--font-display), system-ui, sans-serif", color: "#fff", marginBottom: "0.12em" }}>
              The infrastructure exists.
            </h2>
            <h2 style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1,
              fontFamily: "var(--font-display), system-ui, sans-serif", marginBottom: "2rem",
              backgroundImage: "linear-gradient(90deg, #4F7CFF 0%, #00D4FF 50%, #4F7CFF 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", animation: "shine-sweep 4s linear infinite",
            }}>
              Use it.
            </h2>
            <p className="max-w-md mx-auto mb-12" style={{ color: "rgba(154,154,154,0.6)", fontSize: "1rem", lineHeight: 1.75, letterSpacing: "-0.005em" }}>
              Partner with Acacia Labs. We will build the intelligence layer your organization needs to execute at a level previously inaccessible to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticWrapper strength={0.3}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "100px", background: "#4F7CFF", color: "#fff",
                  padding: "14px 36px", fontSize: "13px", fontWeight: 600,
                  textDecoration: "none", boxShadow: "0 0 32px rgba(79,124,255,0.4)",
                  transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6B93FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(79,124,255,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#4F7CFF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(79,124,255,0.4)"; }}
                >Build With Us</Link>
              </MagneticWrapper>
              <MagneticWrapper strength={0.22}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "100px", border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.75)", padding: "14px 36px",
                  fontSize: "13px", fontWeight: 500, textDecoration: "none",
                  transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >Schedule Consultation</Link>
              </MagneticWrapper>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
