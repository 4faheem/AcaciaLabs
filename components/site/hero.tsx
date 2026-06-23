"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticWrapper } from "@/components/site/motion-primitives";
import { AcaciaConversation } from "@/components/ui/acacia-conversation";
import { emanagerAppUrl } from "@/lib/site";

function WordReveal({
  text,
  delay = 0,
  style,
}: {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span style={{ display: "block", ...style }}>
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: delay + i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < text.split(" ").length - 1 && (
            <span style={{ display: "inline-block", width: "0.28em" }} />
          )}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ background: "#050505" }}
    >
      {/* ── VIDEO BACKGROUND ─────────────────────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
      </div>

      {/* ── OVERLAYS ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.68)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at top center, rgba(79,124,255,.16), transparent 58%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at bottom center, rgba(0,212,255,.07), transparent 70%)" }} />
      </div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[76rem] mx-auto pt-32 pb-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "7px 18px", borderRadius: "100px",
            fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(79,124,255,0.95)",
            background: "rgba(79,124,255,0.07)",
            border: "1px solid rgba(79,124,255,0.2)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F7CFF", boxShadow: "0 0 10px #4F7CFF", flexShrink: 0 }} />
            Now in early access · Dar es Salaam
          </span>
        </motion.div>

        {/* Headline — clear value, plain language */}
        <h1 style={{
          fontFamily: "var(--font-display), system-ui, sans-serif",
          fontSize: "clamp(2.6rem, 6.5vw, 6rem)",
          fontWeight: 700,
          letterSpacing: "-0.045em",
          lineHeight: 0.98,
          marginBottom: "1.5rem",
        }}>
          <WordReveal
            text="Run your entire business"
            delay={0.2}
            style={{ color: "#fff" }}
          />
          <WordReveal
            text="from one screen."
            delay={0.45}
            style={{
              backgroundImage: "linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              filter: "url(#c3-noise)",
              animation: "shine-sweep 6s linear infinite",
              marginTop: "0.04em",
            }}
          />
        </h1>

        {/* Swahili subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            color: "rgba(0,212,255,0.7)",
            fontWeight: 500,
            letterSpacing: "0.01em",
            marginBottom: "1.75rem",
          }}
        >
          Endesha biashara yako yote kwa skrini moja.
        </motion.p>

        {/* Subheadline — plain English */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "40rem",
            fontWeight: 400,
            letterSpacing: "-0.005em",
            marginBottom: "2.5rem",
          }}
        >
          E-Manager replaces spreadsheets, paper records, and disconnected tools with one
          platform — inventory, sales, finance, staff, and reporting, all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <MagneticWrapper strength={0.28}>
            <Link href={emanagerAppUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              borderRadius: "100px", background: "#4F7CFF", color: "#fff",
              padding: "14px 36px", fontSize: "14px", fontWeight: 600,
              letterSpacing: "-0.005em", textDecoration: "none",
              transition: "all 260ms cubic-bezier(0.22,1,0.36,1)",
              boxShadow: "0 0 28px rgba(79,124,255,0.35)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6B93FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(79,124,255,0.55)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#4F7CFF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(79,124,255,0.35)"; }}
            >
              Start Free 14-Day Trial
            </Link>
          </MagneticWrapper>
          <MagneticWrapper strength={0.22}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              borderRadius: "100px", border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.8)", padding: "14px 36px",
              fontSize: "14px", fontWeight: 500, letterSpacing: "-0.005em",
              textDecoration: "none", transition: "all 260ms cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)"; }}
            >
              Book a Demo
            </Link>
          </MagneticWrapper>
        </motion.div>

        {/* --- ACACIA CONVERSATION CENTERPIECE --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 w-full z-20 relative flex justify-center"
        >
          <AcaciaConversation />
        </motion.div>

        {/* Origin */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.7 }}
          style={{
            marginTop: "3.5rem",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(154,154,154,0.35)",
          }}
        >
          Dar es Salaam · Built for Tanzanian businesses
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="12" height="22" rx="6" stroke="rgba(154,154,154,0.25)" strokeWidth="1.5" />
            <motion.rect x="5.5" y="5" width="3" height="5" rx="1.5" fill="rgba(79,124,255,0.7)"
              animate={{ y: [0, 7, 0], opacity: [0.9, 0.2, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
