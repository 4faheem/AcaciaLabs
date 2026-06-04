"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Brain, Layers, BookOpen, Sparkles, Workflow,
  Activity, Target, Mail, Quote
} from "lucide-react";
import {
  TiltCard3D, MagneticWrapper, FadeUp, staggerContainer, springCard
} from "@/components/site/motion-primitives";

/* ── Hero ──────────────────────────────────────────── */
function FounderHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 20%, rgba(79,124,255,0.12), transparent 55%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 85% 80%, rgba(0,212,255,0.07), transparent 60%)" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          <div>
            <FadeUp><span className="eyebrow mb-8">Founder Profile · 01</span></FadeUp>
            <FadeUp delay={0.1}>
              <h1 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.95, color: "#fff", marginBottom: "0.5rem" }}>
                Fahim Kiama
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "rgba(79,124,255,0.85)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "2rem" }}>
                Founder & CEO · Acacia Labs
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", fontWeight: 400, letterSpacing: "-0.005em", maxWidth: "36rem", marginBottom: "1.25rem" }}>
                Building intelligence infrastructure for African enterprise.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "rgba(154,154,154,0.6)", maxWidth: "32rem" }}>
                Focused on operational systems, enterprise architecture, and AI-native execution platforms.
              </p>
            </FadeUp>
            <FadeUp delay={0.55}>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                {["Systems Thinker", "Enterprise Architect", "Long-Term Operator"].map(role => (
                  <span key={role} className="text-[10px] terminal-text font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full" style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(79,124,255,0.18)", backdropFilter: "blur(12px)" }}>
                    {role}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-4 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.18), transparent 70%)", filter: "blur(40px)" }} />
              <div className="relative h-full w-full overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(79,124,255,0.18)", boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>
                <Image src="/ceo-portrait.png" alt="Fahim Kiama, Founder & CEO of Acacia Labs" fill className="object-cover" priority />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.4) 100%)" }} />
                <div className="absolute inset-x-0 top-0 h-[2px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.7) 50%, transparent)" }} />
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full" style={{ background: "rgba(5,5,5,0.92)", border: "1px solid rgba(79,124,255,0.25)", backdropFilter: "blur(20px)" }}>
                <span className="text-[9px] terminal-text font-bold tracking-[0.22em] uppercase" style={{ color: "rgba(0,212,255,0.9)" }}>
                  Dar es Salaam · 2024
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── Founder Statement ─────────────────────────────── */
function FounderStatement() {
  return (
    <section className="py-24" style={{ background: "#050505" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeUp>
          <div className="glass-deep p-12 md:p-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Quote size={14} style={{ color: "rgba(0,212,255,0.85)" }} />
              <span className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(0,212,255,0.85)" }}>Founder Statement</span>
            </div>
            <blockquote style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.6rem, 4vw, 3.2rem)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.18, color: "#fff" }}>
              &ldquo;The future of African business will not be<br />
              built on more software.<br />
              <span style={{ color: "rgba(79,124,255,0.9)" }}>It will be built on better systems.&rdquo;</span>
            </blockquote>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Founder Thesis ────────────────────────────────── */
function FounderThesis() {
  return (
    <section className="relative py-28 border-t" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.05), transparent 65%)" }} />
      <div className="mx-auto max-w-5xl px-6 lg:px-12 relative z-10">
        <FadeUp className="mb-14">
          <span className="eyebrow mb-6">Founder Thesis</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#fff" }}>
            Every generation is defined<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>by its infrastructure.</span>
          </h2>
        </FadeUp>
        <motion.div className="space-y-1" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {[
            { driver: "Roads enabled trade.", color: "rgba(154,154,154,0.45)" },
            { driver: "Electricity enabled industry.", color: "rgba(154,154,154,0.55)" },
            { driver: "The internet enabled information.", color: "rgba(255,255,255,0.7)" },
            { driver: "The next era will be defined by intelligence infrastructure.", color: "#fff", emphasis: true },
          ].map(({ driver, color, emphasis }) => (
            <motion.div key={driver} variants={springCard}>
              <p style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: emphasis ? "clamp(1.4rem, 2.8vw, 2.2rem)" : "clamp(1.2rem, 2.2vw, 1.8rem)", fontWeight: emphasis ? 700 : 500, letterSpacing: "-0.025em", lineHeight: 1.4, color, paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                {driver}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <FadeUp delay={0.4}>
          <div className="mt-16 pt-10 border-t" style={{ borderColor: "rgba(79,124,255,0.12)" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, maxWidth: "36rem" }}>
              Acacia Labs exists to help organizations operate through that transition.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── What I Believe ────────────────────────────────── */
function WhatIBelieve() {
  const beliefs = [
    { num: "01", title: "Infrastructure Before Applications", body: "Most organizations do not need more software. They need stronger operational foundations." },
    { num: "02", title: "Execution Beats Ideas", body: "Ideas are abundant. Execution systems are rare." },
    { num: "03", title: "Local Context Matters", body: "Technology designed for different realities often fails in African environments." },
    { num: "04", title: "Systems Scale", body: "People eventually become bottlenecks. Systems create leverage." },
    { num: "05", title: "AI Must Create Utility", body: "Artificial intelligence should improve operations, not generate hype." },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-14">
          <span className="eyebrow mb-6">What I Believe</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            Five convictions that<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>shape what we build.</span>
          </h2>
        </FadeUp>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {beliefs.map(({ num, title, body }, i) => (
            <motion.div key={num} variants={springCard} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <TiltCard3D intensity={5} className="glass-card p-8 h-full cursor-default group">
                <div className="flex items-center justify-between mb-6">
                  <span className="terminal-text text-[10px] font-bold tracking-[0.25em]" style={{ color: "rgba(79,124,255,0.55)" }}>{num}</span>
                  <div className="h-px w-12" style={{ background: "rgba(79,124,255,0.15)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2, color: "#fff", marginBottom: "1rem", transition: "color 220ms ease" }} className="group-hover:text-accent-blue">
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "rgba(154,154,154,0.65)" }}>{body}</p>
              </TiltCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Building Now ──────────────────────────────────── */
function BuildingNow() {
  const work = [
    { icon: Sparkles, name: "Syncraft", body: "AI workflow infrastructure for modern organizations." },
    { icon: Layers, name: "Acacia Operating Systems", body: "Execution frameworks and enterprise operating models." },
    { icon: BookOpen, name: "Research & Intelligence", body: "Studying the future of enterprise intelligence infrastructure in Africa." },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-14">
          <span className="eyebrow mb-6">Building Now</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            What I am working on<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>this decade.</span>
          </h2>
        </FadeUp>
        <motion.div className="grid md:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {work.map(({ icon: Icon, name, body }, i) => (
            <motion.div key={name} variants={springCard}>
              <TiltCard3D intensity={6} className="glass-card p-9 h-full cursor-default group">
                <div className="p-2.5 rounded-md inline-flex mb-7" style={{ background: "rgba(79,124,255,0.1)", border: "1px solid rgba(79,124,255,0.2)" }}>
                  <Icon size={18} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                </div>
                <div className="terminal-text text-[9px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(154,154,154,0.45)" }}>
                  Workstream · 0{i + 1}
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.2, color: "#fff", marginBottom: "1rem", transition: "color 220ms ease" }} className="group-hover:text-accent-blue">
                  {name}
                </h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "rgba(154,154,154,0.65)" }}>{body}</p>
              </TiltCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Journey Timeline ──────────────────────────────── */
function JourneyTimeline() {
  const milestones = [
    { year: "2024", text: "Researching operational inefficiencies across SMEs.", state: "past" },
    { year: "2025", text: "Founded Acacia Labs.", state: "past" },
    { year: "2025", text: "Began building AI-native operational systems.", state: "past" },
    { year: "2026", text: "Focused on intelligence infrastructure and enterprise execution architecture.", state: "current" },
    { year: "Future", text: "Building the operating layer for the next generation of African organizations.", state: "future" },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <FadeUp className="mb-16">
          <span className="eyebrow mb-6">A Progression of Ideas</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            Not a resume.<br />
            <span style={{ color: "rgba(154,154,154,0.45)" }}>A trajectory.</span>
          </h2>
        </FadeUp>
        <div className="relative">
          <div className="absolute left-[15px] md:left-[27px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg, rgba(79,124,255,0.4), rgba(79,124,255,0.05))" }} />
          <motion.div className="space-y-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }}>
            {milestones.map(({ year, text, state }, i) => (
              <motion.div key={i} variants={springCard} className="relative flex items-start gap-6 md:gap-10 group">
                <div className="relative flex-shrink-0 z-10 mt-1">
                  <div className="flex items-center justify-center" style={{
                    width: state === "current" ? 32 : 24, height: state === "current" ? 32 : 24,
                    marginLeft: state === "current" ? -4 : 0, marginTop: state === "current" ? -4 : 0,
                    borderRadius: "50%",
                    background: state === "future" ? "rgba(8,8,8,0.95)" : state === "current" ? "rgba(0,212,255,0.18)" : "rgba(79,124,255,0.12)",
                    border: state === "future" ? "1px dashed rgba(154,154,154,0.35)" : state === "current" ? "1px solid rgba(0,212,255,0.6)" : "1px solid rgba(79,124,255,0.4)",
                    boxShadow: state === "current" ? "0 0 24px rgba(0,212,255,0.35)" : "none",
                  }}>
                    <div style={{
                      width: state === "current" ? 8 : 6, height: state === "current" ? 8 : 6,
                      borderRadius: "50%",
                      background: state === "future" ? "rgba(154,154,154,0.4)" : state === "current" ? "#00D4FF" : "#4F7CFF",
                      boxShadow: state === "current" ? "0 0 12px #00D4FF" : "none",
                    }} />
                  </div>
                  {state === "current" && (
                    <motion.div className="absolute inset-0 rounded-full pointer-events-none" animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }} style={{ background: "rgba(0,212,255,0.35)", marginLeft: -4, marginTop: -4 }} />
                  )}
                </div>
                <div className="flex-1 pb-10 group-last:pb-0">
                  <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                    <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: state === "current" ? "clamp(1.5rem, 2.5vw, 2.2rem)" : "clamp(1.25rem, 2vw, 1.7rem)", fontWeight: 700, letterSpacing: "-0.03em", color: state === "future" ? "rgba(154,154,154,0.5)" : state === "current" ? "#00D4FF" : "rgba(255,255,255,0.85)" }}>
                      {year}
                    </span>
                    {state === "current" && (
                      <span className="text-[9px] terminal-text font-bold tracking-[0.25em] uppercase px-2 py-0.5 rounded-full" style={{ color: "rgba(0,212,255,0.9)", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.3)" }}>Active</span>
                    )}
                    {state === "future" && (
                      <span className="text-[9px] terminal-text font-bold tracking-[0.25em] uppercase px-2 py-0.5 rounded-full" style={{ color: "rgba(154,154,154,0.5)", border: "1px dashed rgba(154,154,154,0.3)" }}>Horizon</span>
                    )}
                  </div>
                  <p style={{ fontSize: state === "current" ? "1.1rem" : "1rem", lineHeight: 1.65, color: state === "future" ? "rgba(154,154,154,0.55)" : state === "current" ? "rgba(255,255,255,0.78)" : "rgba(154,154,154,0.7)", fontWeight: state === "current" ? 500 : 400, maxWidth: "36rem" }}>
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Operating Principles ──────────────────────────── */
function OperatingPrinciples() {
  const principles = [
    { icon: Brain, name: "Think in systems." },
    { icon: Target, name: "Build for reality." },
    { icon: Activity, name: "Prioritize execution." },
    { icon: BookOpen, name: "Create institutional value." },
    { icon: Workflow, name: "Optimize for long-term outcomes." },
  ];
  return (
    <section className="relative py-28 border-t" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-14 text-center">
          <span className="eyebrow mx-auto mb-6">Operating Principles</span>
          <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff" }}>
            How I think.
          </h2>
        </FadeUp>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-8%" }}>
          {principles.map(({ icon: Icon, name }, i) => (
            <motion.div key={name} variants={springCard}>
              <TiltCard3D intensity={5} className="glass-card p-6 h-full cursor-default group flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Icon size={16} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                  <span className="terminal-text text-[9px] font-bold tracking-[0.2em]" style={{ color: "rgba(79,124,255,0.5)" }}>0{i + 1}</span>
                </div>
                <p style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.25, color: "#fff", transition: "color 220ms ease" }} className="group-hover:text-accent-blue">
                  {name}
                </p>
              </TiltCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Signature Quote ───────────────────────────────── */
function SignatureQuote() {
  return (
    <section className="relative py-32 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.1), transparent 60%)" }} />
      <div className="mx-auto max-w-5xl px-6 lg:px-12 relative z-10">
        <FadeUp>
          <div className="glass-spotlight p-12 md:p-20 text-center">
            <Quote size={28} style={{ color: "rgba(0,212,255,0.5)", margin: "0 auto 32px" }} strokeWidth={1.2} />
            <motion.blockquote
              animate={{ textShadow: ["0 0 0px rgba(79,124,255,0)", "0 0 32px rgba(79,124,255,0.18)", "0 0 0px rgba(79,124,255,0)"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.5rem, 3.6vw, 3rem)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.2, color: "#fff", fontStyle: "italic" }}
            >
              &ldquo;The organizations that win in the next decade<br />
              will not be the ones with the most information.<br />
              <span style={{ color: "rgba(79,124,255,0.95)" }}>They will be the ones that convert<br />intelligence into action fastest.&rdquo;</span>
            </motion.blockquote>
            <div className="mt-12 pt-8 border-t inline-block px-12" style={{ borderColor: "rgba(79,124,255,0.18)" }}>
              <p className="text-[11px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(154,154,154,0.7)" }}>
                — Fahim Kiama
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Strategic Conversations ───────────────────────── */
function StrategicConversations() {
  return (
    <section className="relative py-32 border-t overflow-hidden" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.05), transparent 65%)" }} />
      <div className="mx-auto max-w-4xl px-6 lg:px-12 relative z-10">
        <FadeUp>
          <div className="glass-deep p-12 md:p-16">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <Mail size={22} style={{ color: "#00D4FF", marginBottom: 24 }} strokeWidth={1.5} />
                <span className="eyebrow mb-6 inline-block">Strategic Conversations</span>
                <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#fff", marginBottom: "1.25rem" }}>
                  Start a<br />conversation.
                </h2>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(154,154,154,0.65)", marginBottom: "2rem" }}>
                  Not for cold outreach or generic inquiries — for substantive conversations about systems, infrastructure, and where this is going.
                </p>
                <MagneticWrapper strength={0.28}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 100, background: "#4F7CFF", color: "#fff", padding: "13px 28px", fontSize: "13px", fontWeight: 600, textDecoration: "none", boxShadow: "0 0 24px rgba(79,124,255,0.35)", transition: "all 240ms cubic-bezier(0.22,1,0.36,1)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6B93FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(79,124,255,0.55)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#4F7CFF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(79,124,255,0.35)"; }}
                  >
                    Start a Conversation <ArrowRight size={14} />
                  </Link>
                </MagneticWrapper>
              </div>
              <div>
                <p className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(0,212,255,0.85)" }}>
                  Interested in conversations around
                </p>
                <div className="space-y-3">
                  {["Intelligence Infrastructure", "Enterprise Systems", "AI-Native Operations", "African Innovation", "Long-Term Technology Building"].map((topic) => (
                    <div key={topic} className="flex items-center gap-4 py-3 border-b" style={{ borderColor: "rgba(79,124,255,0.08)" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F7CFF", boxShadow: "0 0 8px #4F7CFF", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.05rem", fontWeight: 500, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.02em" }}>
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
export function FounderClient() {
  return (
    <>
      <FounderHero />
      <FounderStatement />
      <FounderThesis />
      <WhatIBelieve />
      <BuildingNow />
      <JourneyTimeline />
      <OperatingPrinciples />
      <SignatureQuote />
      <StrategicConversations />
    </>
  );
}
