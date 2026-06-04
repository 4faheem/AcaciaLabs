"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Workflow, Activity, Target, Eye, Layers, Settings,
  GitBranch, BarChart3, Cpu, Gauge, CheckCircle2, ChevronRight,
  Mail, Quote, ScanLine
} from "lucide-react";
import {
  TiltCard3D, MagneticWrapper, FadeUp, staggerContainer, springCard
} from "@/components/site/motion-primitives";

/* ── COO Hero — command-center aesthetic, no portrait ─ */
function COOHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#030309" }}>
      {/* Tactical grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(79,124,255,0.1), transparent 55%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(3,3,9,0.4) 100%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left — editorial */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-1.5 w-1.5 rounded-full stat-live" style={{ background: "#34D399" }} />
                <span className="text-[10px] terminal-text font-bold tracking-[0.35em] uppercase" style={{ color: "rgba(52,211,153,0.85)" }}>
                  Operations · Active
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", color: "rgba(79,124,255,0.85)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Chief Operating Officer
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h1 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.95, color: "#fff", marginBottom: "1.5rem" }}>
                Gwamaka Johas
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", fontWeight: 400, letterSpacing: "-0.005em", maxWidth: "36rem", marginBottom: "1.25rem" }}>
                Transforming strategy into repeatable execution.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "rgba(154,154,154,0.6)", maxWidth: "32rem" }}>
                Designing systems, workflows, and operational foundations that enable sustainable scale.
              </p>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                {["Process Architecture", "Execution Systems", "Operational Intelligence"].map(role => (
                  <span key={role} className="text-[10px] terminal-text font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-sm" style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(79,124,255,0.2)", backdropFilter: "blur(12px)" }}>
                    {role}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — mission control panel */}
          <FadeUp delay={0.2}>
            <div className="glass-deep p-6 relative overflow-hidden" style={{ borderRadius: "8px" }}>
              <div className="flex items-center justify-between mb-5 pb-4 border-b" style={{ borderColor: "rgba(79,124,255,0.1)" }}>
                <div className="flex items-center gap-2">
                  <ScanLine size={12} style={{ color: "#00D4FF" }} />
                  <span className="text-[9px] terminal-text font-bold tracking-[0.25em] uppercase" style={{ color: "rgba(0,212,255,0.85)" }}>
                    Ops · Telemetry
                  </span>
                </div>
                <span className="text-[8px] terminal-text font-bold tracking-widest" style={{ color: "rgba(154,154,154,0.5)" }}>
                  NODE / DAR
                </span>
              </div>

              {/* Stat rows */}
              <div className="space-y-3">
                {[
                  { label: "Workflows Active", value: "2,847", trend: "+12%", color: "#4F7CFF" },
                  { label: "Process Coverage", value: "94.2%", trend: "+3.1%", color: "#00D4FF" },
                  { label: "Error Rate", value: "0.02%", trend: "-0.4%", color: "#34D399" },
                  { label: "Avg Cycle Time", value: "1.8s", trend: "-12%", color: "#E0B341" },
                  { label: "Uptime SLA", value: "99.99%", trend: "Stable", color: "#34D399" },
                ].map(({ label, value, trend, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    className="flex items-center justify-between p-3 rounded-sm"
                    style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(79,124,255,0.05)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, boxShadow: `0 0 6px ${color}` }} />
                      <span className="text-[10px] terminal-text tracking-wider uppercase" style={{ color: "rgba(154,154,154,0.6)" }}>{label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold" style={{ color: "#fff", fontFamily: "var(--font-mono), monospace" }}>{value}</span>
                      <span className="text-[9px] terminal-text font-bold tracking-wider" style={{ color }}>{trend}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-5 pt-4 border-t text-[8px] terminal-text tracking-widest" style={{ borderColor: "rgba(79,124,255,0.08)", color: "rgba(154,154,154,0.45)" }}>
                <span>LAST SYNC · 09:42:14</span>
                <span>v5.5 · STABLE</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── Operational Scope ─────────────────────────────── */
function OperationalScope() {
  const scope = [
    { icon: Settings, name: "Process Design", desc: "Architecting repeatable, measurable workflows from first principles." },
    { icon: Workflow, name: "Execution Management", desc: "Ensuring strategy translates into consistent operational output." },
    { icon: Activity, name: "Operational Intelligence", desc: "Real-time visibility into how the organization actually runs." },
    { icon: Layers, name: "Scalability Systems", desc: "Building structures that grow without requiring linear headcount." },
    { icon: GitBranch, name: "Workflow Architecture", desc: "Mapping how decisions, data, and execution flow across teams." },
    { icon: Eye, name: "Data Visibility", desc: "Surfacing the operational signals leadership needs to act on." },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#050510", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-14">
          <span className="eyebrow mb-6">Operational Scope</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            Six domains that<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>define execution.</span>
          </h2>
        </FadeUp>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {scope.map(({ icon: Icon, name, desc }, i) => (
            <motion.div key={name} variants={springCard}>
              <TiltCard3D intensity={4} className="glass-card p-7 h-full cursor-default group" style={{ borderRadius: "6px" }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 rounded-sm" style={{ background: "rgba(79,124,255,0.08)", border: "1px solid rgba(79,124,255,0.18)" }}>
                    <Icon size={15} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                  </div>
                  <span className="terminal-text text-[9px] font-bold tracking-[0.2em]" style={{ color: "rgba(79,124,255,0.5)" }}>
                    OP · 0{i + 1}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#fff", marginBottom: "0.75rem", transition: "color 220ms ease" }} className="group-hover:text-accent-blue">
                  {name}
                </h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "rgba(154,154,154,0.6)" }}>{desc}</p>
              </TiltCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Execution Principles ──────────────────────────── */
function ExecutionPrinciples() {
  const principles = [
    { num: "01", text: "What is not measured cannot improve." },
    { num: "02", text: "Complexity is often a design failure." },
    { num: "03", text: "Systems should reduce dependency on individuals." },
    { num: "04", text: "Consistency beats intensity." },
    { num: "05", text: "Operational clarity creates strategic freedom." },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#030309", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <FadeUp className="mb-14">
          <span className="eyebrow mb-6">Execution Principles</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            Operating rules.<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>Non-negotiable.</span>
          </h2>
        </FadeUp>

        <motion.div className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {principles.map(({ num, text }, i) => (
            <motion.div key={num} variants={springCard}>
              <div className="glass-card p-6 md:p-7 flex items-center gap-6 group cursor-default" style={{ borderRadius: "4px" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform = "translateX(6px)"; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform = "translateX(0)"; }}>
                <span className="terminal-text text-[14px] font-bold tracking-[0.15em] flex-shrink-0" style={{ color: "rgba(0,212,255,0.5)", minWidth: 32 }}>
                  {num}
                </span>
                <div className="h-8 w-px flex-shrink-0" style={{ background: "rgba(79,124,255,0.18)" }} />
                <p style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.35, color: "rgba(255,255,255,0.88)", flex: 1 }}>
                  {text}
                </p>
                <ChevronRight size={16} style={{ color: "rgba(154,154,154,0.3)", flexShrink: 0 }} className="group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Current Priorities — Command-Center Dashboard ──── */
function CurrentPriorities() {
  const priorities = [
    { code: "PRI-01", name: "Process Standardization", status: "Live", pct: 84, color: "#34D399" },
    { code: "PRI-02", name: "Workflow Automation", status: "Scaling", pct: 67, color: "#00D4FF" },
    { code: "PRI-03", name: "Enterprise Operations", status: "Active", pct: 92, color: "#4F7CFF" },
    { code: "PRI-04", name: "Execution Systems", status: "Building", pct: 48, color: "#E0B341" },
    { code: "PRI-05", name: "Performance Visibility", status: "Live", pct: 78, color: "#34D399" },
    { code: "PRI-06", name: "Organizational Scale", status: "Active", pct: 56, color: "#4F7CFF" },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#050510", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="eyebrow mb-6">Current Priorities</span>
              <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
                Command board.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full stat-live" style={{ background: "#34D399" }} />
              <span className="text-[10px] terminal-text font-bold tracking-[0.25em] uppercase" style={{ color: "rgba(52,211,153,0.8)" }}>
                Live · Q3 2026
              </span>
            </div>
          </div>
        </FadeUp>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {priorities.map(({ code, name, status, pct, color }) => (
            <motion.div key={code} variants={springCard}>
              <div className="glass-card p-6 h-full cursor-default group" style={{ borderRadius: "6px" }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="terminal-text text-[9px] font-bold tracking-[0.2em]" style={{ color: "rgba(154,154,154,0.5)" }}>
                    {code}
                  </span>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-sm" style={{ background: `${color}11`, border: `1px solid ${color}30` }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, boxShadow: `0 0 5px ${color}` }} />
                    <span className="text-[9px] terminal-text font-bold tracking-widest uppercase" style={{ color }}>{status}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2, color: "#fff", marginBottom: "1.5rem", transition: "color 220ms ease" }} className="group-hover:text-accent-blue">
                  {name}
                </h3>
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[9px] terminal-text tracking-wider" style={{ color: "rgba(154,154,154,0.55)" }}>
                    <span>COMPLETION</span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>{pct}%</span>
                  </div>
                  <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color}40, ${color})`, boxShadow: `0 0 10px ${color}80` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Operational Lifecycle ─────────────────────────── */
function OperationalLifecycle() {
  const phases = [
    { name: "Plan", desc: "Design the system before building it.", icon: Target },
    { name: "Execute", desc: "Run with discipline and precision.", icon: Activity },
    { name: "Measure", desc: "Observe outputs against expected baselines.", icon: Gauge },
    { name: "Optimize", desc: "Remove friction at the source.", icon: Cpu },
    { name: "Scale", desc: "Compound the working system.", icon: BarChart3 },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#030309", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-16 text-center">
          <span className="eyebrow mx-auto mb-6">Operational Lifecycle</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            The five phases<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>of execution.</span>
          </h2>
        </FadeUp>

        {/* Horizontal animated flow */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-3 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
        >
          {phases.map(({ name, desc, icon: Icon }, i) => (
            <motion.div key={name} variants={springCard} className="relative">
              <div className="glass-card p-6 h-full cursor-default text-center group" style={{ borderRadius: "6px" }}>
                <div className="terminal-text text-[10px] font-bold tracking-[0.3em] mb-4" style={{ color: "rgba(0,212,255,0.55)" }}>
                  PHASE {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-5 rounded-full" style={{ background: "rgba(79,124,255,0.08)", border: "1px solid rgba(79,124,255,0.22)" }}>
                  <Icon size={18} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "0.5rem", transition: "color 220ms ease" }} className="group-hover:text-accent-cyan">
                  {name}
                </h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.55, color: "rgba(154,154,154,0.6)" }}>
                  {desc}
                </p>
              </div>
              {/* Connector arrow */}
              {i < phases.length - 1 && (
                <motion.div
                  className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <ChevronRight size={14} style={{ color: "rgba(0,212,255,0.45)" }} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <FadeUp delay={0.4} className="mt-12 text-center">
          <p className="text-[11px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(154,154,154,0.5)" }}>
            Then return to Plan. The cycle never ends.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Operating Framework — Systems > Outcomes ──────── */
function OperatingFramework() {
  const chain = [
    { name: "Systems", desc: "Architectural decisions" },
    { name: "Processes", desc: "Repeatable patterns" },
    { name: "Workflows", desc: "Operational sequences" },
    { name: "Actions", desc: "Discrete tasks" },
    { name: "Outcomes", desc: "Measurable results" },
  ];
  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ background: "#050510", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeUp className="mb-14 text-center">
          <span className="eyebrow mx-auto mb-6">Operating Framework</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            How execution<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>flows down.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="glass-deep p-10 md:p-12" style={{ borderRadius: "8px" }}>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_2fr_auto_2fr_auto_2fr_auto_2fr] items-center gap-y-6 md:gap-x-2">
              {chain.map(({ name, desc }, i) => (
                <Fragment key={name}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="terminal-text text-[9px] font-bold tracking-[0.3em] mb-3" style={{ color: i === chain.length - 1 ? "#34D399" : "rgba(0,212,255,0.6)" }}>
                        {i === chain.length - 1 ? "RESULT" : `LAYER 0${i + 1}`}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-display), system-ui, sans-serif",
                        fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: i === chain.length - 1 ? "#34D399" : "#fff",
                        marginBottom: "0.5rem",
                      }}>
                        {name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(154,154,154,0.55)", letterSpacing: "-0.005em" }}>
                        {desc}
                      </div>
                    </div>
                  </motion.div>
                  {i < chain.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                      className="hidden md:flex items-center justify-center"
                    >
                      <ChevronRight size={20} style={{ color: "rgba(79,124,255,0.4)" }} strokeWidth={2} />
                    </motion.div>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t text-center" style={{ borderColor: "rgba(79,124,255,0.1)" }}>
              <p style={{ fontSize: "0.9rem", color: "rgba(154,154,154,0.65)", lineHeight: 1.7, maxWidth: "38rem", margin: "0 auto" }}>
                Every outcome can be traced back to a system. Every broken outcome reveals a system to redesign.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Signature Quote ───────────────────────────────── */
function SignatureQuote() {
  return (
    <section className="relative py-32 border-t overflow-hidden" style={{ background: "#030309", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.08), transparent 60%)" }} />
      <div className="mx-auto max-w-5xl px-6 lg:px-12 relative z-10">
        <FadeUp>
          <div className="glass-spotlight p-12 md:p-20 text-center">
            <Quote size={28} style={{ color: "rgba(0,212,255,0.55)", margin: "0 auto 32px" }} strokeWidth={1.2} />
            <motion.blockquote
              animate={{ textShadow: ["0 0 0px rgba(0,212,255,0)", "0 0 28px rgba(0,212,255,0.2)", "0 0 0px rgba(0,212,255,0)"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.6rem, 4vw, 3.2rem)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.22, color: "#fff", fontStyle: "italic" }}
            >
              &ldquo;Vision creates direction.<br />
              <span style={{ color: "rgba(0,212,255,0.92)" }}>Execution creates reality.&rdquo;</span>
            </motion.blockquote>
            <div className="mt-12 pt-8 border-t inline-block px-12" style={{ borderColor: "rgba(0,212,255,0.18)" }}>
              <p className="text-[11px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(154,154,154,0.7)" }}>
                — Gwamaka Johas
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Operational Conversations / Contact ──────────── */
function OperationalConversations() {
  return (
    <section className="relative py-32 border-t overflow-hidden" style={{ background: "#050510", borderColor: "rgba(79,124,255,0.08)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.06), transparent 65%)" }} />
      <div className="mx-auto max-w-4xl px-6 lg:px-12 relative z-10">
        <FadeUp>
          <div className="glass-deep p-12 md:p-16" style={{ borderRadius: "8px" }}>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <Mail size={22} style={{ color: "#00D4FF", marginBottom: 24 }} strokeWidth={1.5} />
                <span className="eyebrow mb-6 inline-block">Operational Conversations</span>
                <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#fff", marginBottom: "1.25rem" }}>
                  Build something<br />operational.
                </h2>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(154,154,154,0.65)", marginBottom: "2rem" }}>
                  For organizations serious about turning strategy into systems that compound. Not for theoretical discussions.
                </p>
                <MagneticWrapper strength={0.28}>
                  <Link href="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    borderRadius: "4px", background: "#4F7CFF", color: "#fff",
                    padding: "13px 28px", fontSize: "13px", fontWeight: 600,
                    textDecoration: "none", boxShadow: "0 0 24px rgba(79,124,255,0.35)",
                    transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                    letterSpacing: "0.02em",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6B93FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(79,124,255,0.55)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#4F7CFF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(79,124,255,0.35)"; }}
                  >
                    Engage Operations <ArrowRight size={14} />
                  </Link>
                </MagneticWrapper>
              </div>
              <div>
                <p className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(0,212,255,0.85)" }}>
                  Engagement Areas
                </p>
                <div className="space-y-1">
                  {[
                    "Operational Architecture",
                    "Process Engineering",
                    "Workflow Automation",
                    "Scale Infrastructure",
                    "Performance Systems",
                  ].map((topic, i) => (
                    <div key={topic} className="flex items-center gap-4 py-3 border-b" style={{ borderColor: "rgba(79,124,255,0.08)" }}>
                      <span className="terminal-text text-[9px] font-bold tracking-widest flex-shrink-0" style={{ color: "rgba(0,212,255,0.55)" }}>
                        0{i + 1}
                      </span>
                      <CheckCircle2 size={12} style={{ color: "#4F7CFF", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.02em" }}>
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── MAIN ──────────────────────────────────────────── */
export function COOClient() {
  return (
    <>
      <COOHero />
      <OperationalScope />
      <ExecutionPrinciples />
      <CurrentPriorities />
      <OperationalLifecycle />
      <OperatingFramework />
      <SignatureQuote />
      <OperationalConversations />
    </>
  );
}
