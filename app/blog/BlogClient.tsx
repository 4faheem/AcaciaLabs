"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Clock, ChevronLeft, Search, FileText, BookOpen,
  Sparkles, Layers, Database, Brain, Workflow, Activity, Mail
} from "lucide-react";
import { company } from "@/lib/site";
import { ReadingProgress, TiltCard3D, MagneticWrapper, FadeUp, staggerContainer, springCard } from "@/components/site/motion-primitives";

type ResearchType = "Research Paper" | "Technical Brief" | "Framework" | "Perspective" | "Field Notes" | "Case Study" | "White Paper";

type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  researchType: ResearchType;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  featured?: boolean;
};

const posts: Post[] = [
  {
    id: "0",
    slug: "intelligence-infrastructure-thesis",
    title: "The Intelligence Infrastructure Thesis",
    category: "Intelligence Systems",
    researchType: "Research Paper",
    date: "June 2026",
    excerpt: "Why every company will eventually operate through an intelligence layer — and what that means for organizations building today.",
    content: `Every economic era is defined by its infrastructure. Railways defined the industrial age. Electrical grids defined the manufacturing age. Internet protocols defined the information age. The intelligence era will be no different — and the infrastructure being built for it, in most cases, is wrong.

Current AI infrastructure optimizes for model capability. It does not optimize for organizational capability. The result is a market saturated with impressive models deployed in environments that cannot meaningfully use them.

At Acacia Labs, our thesis is structural: intelligence infrastructure is not about the model. It is about the execution layer surrounding the model — the systems that allow organizations to act on intelligence consistently, at scale, without continuous human supervision in every decision loop.

This means building execution engines, not just reasoning engines. It means designing for the African enterprise context — not adapting tools built for Silicon Valley use cases and hoping they translate. And it means accepting that the infrastructure layer requires more rigor, not less, than the applications built on top of it.

We are building the layer. The applications will follow.

The next decade of competitive advantage will not be won by access to AI. It will be won by access to intelligence infrastructure that turns AI into reliable organizational capability.`,
    author: company.ceo,
    readTime: "25 min",
    featured: true,
  },
  {
    id: "1",
    slug: "sovereign-intelligence-east-africa",
    title: "Sovereign Intelligence: Designing AI for East African Operations",
    category: "African Enterprise",
    researchType: "Technical Brief",
    date: "May 2026",
    excerpt: "Why traditional cloud AI fails in low-bandwidth environments — and how local inference changes the equation entirely.",
    content: `For too long, enterprise technology in Sub-Saharan Africa has been treated as a downstream consumer of Western cloud paradigms. The structural realities of operating here — intermittent carrier networks, volatile latency, transaction pipelines integrated directly into mobile money APIs — require a complete inversion of standard architectural assumptions.

Generative AI models running on servers in North Virginia or Western Europe are inherently fragile for real-time logistics and execution in East Africa. An agent-based dispatch system that takes 8 seconds to round-trip through an API fails to coordinate dynamic routes at scale. This is not an edge case. It is the baseline condition.

At Acacia Labs, we design sovereign intelligence grids. This means embedding localized decision-support nodes directly onto on-premise infrastructure and caching operational states. Our Syncraft platform relies on micro-inference engines that operate deterministically — keeping transactions aligned without requiring a persistent, high-speed connection to the global internet.

The future of African enterprise is not on a remote cloud. It runs at the edge of the local carrier node.`,
    author: company.ceo,
    readTime: "12 min",
  },
  {
    id: "2",
    slug: "reconciliations-engine-mobile-money",
    title: "The Reconciliations Engine: Solving Mobile Money Fragmentation",
    category: "Infrastructure Economics",
    researchType: "Case Study",
    date: "May 2026",
    excerpt: "A technical analysis of double-spend risks and synchronization latencies across M-Pesa, Airtel Money, and Tigopesa grids.",
    content: `Reconciliation is the silent constraint on growth for mid-market African companies. When a business processes thousands of mobile money payments daily across different carriers, the absence of a synchronized ledger API makes reporting a manual, error-prone process.

Carriers frequently delay confirmation webhooks. If a customer sends a payment but the carrier API fails to notify your database within the checkout window, you face double-allocation risk or order cancellation. This is not an occasional failure. It is a structural flaw in how mobile money infrastructure was built.

Our E-Manager ledger addresses this through a high-authority transactional pipeline. We use a deterministic queue architecture that pools pending transactions and validates ledger hashes. Every transaction is indexed against carrier metadata — no ledger entry is written without cryptographic verification. By treating carrier latency as a structural rule rather than an exception, our reconciliation engines achieve 99.99% automated accuracy.

The result: finance teams that previously spent hours on manual reconciliation now operate with a real-time, verified ledger.`,
    author: company.coo,
    readTime: "16 min",
  },
  {
    id: "3",
    slug: "deterministic-workflows-vs-stochastic-ai",
    title: "Deterministic Workflows vs. Stochastic AI",
    category: "Product Architecture",
    researchType: "Framework",
    date: "April 2026",
    excerpt: "When probabilistic AI introduces unacceptable variance, deterministic workflow engines provide the execution guarantee enterprises require.",
    content: `The dominant narrative in enterprise AI positions large language models as replacements for structured business logic. This is a category error that produces systems impressive in demos and unreliable in production.

LLMs are stochastic. The same input, processed twice, can produce different outputs. For creative tasks this is a feature. For operational workflows — payroll, inventory allocation, compliance reporting — it is unacceptable risk.

Acacia Labs builds deterministic workflow engines alongside AI inference systems. The distinction is intentional. Our architecture treats AI as a reasoning layer that produces structured outputs, which are then executed by deterministic engines that guarantee consistent behavior regardless of load, time, or context drift.

The pattern: AI classifies, reasons, and recommends. The workflow engine executes, records, and confirms. Neither component compromises the contract of the other. This separation produces systems that are simultaneously intelligent and reliable — a combination stochastic-only architectures cannot achieve.

For enterprises in regulated industries or high-stakes operational environments, this is not academic. It is the difference between a system you trust and one you must constantly supervise.`,
    author: company.ceo,
    readTime: "14 min",
  },
  {
    id: "4",
    slug: "intelligence-maturity-model",
    title: "The Enterprise Intelligence Maturity Model",
    category: "Acacia Research",
    researchType: "Framework",
    date: "April 2026",
    excerpt: "A five-stage model for measuring how deeply intelligence is embedded in an organization's operational fabric.",
    content: `Most organizations think about AI adoption in binary terms — are we using AI or not. This framing obscures the more important question: how deeply has intelligence been embedded into the operational fabric of the organization?

We propose a five-level maturity model:

Level 1 — Manual: Decisions made entirely by humans referencing static information.
Level 2 — Digital: Decisions assisted by dashboards and reports. Intelligence stays human-bound.
Level 3 — Automated: Rule-based systems execute known patterns. AI augments specific decisions.
Level 4 — Intelligent: AI participates in decisions across the operational layer. Humans set direction, not transactions.
Level 5 — Autonomous: Systems execute, monitor, and adapt continuously. Humans operate at the strategy layer only.

Most African enterprises sit between Level 1 and Level 2. The opportunity is not to leap to Level 5. It is to identify the highest-leverage transitions and build the infrastructure that compounds.`,
    author: company.ceo,
    readTime: "10 min",
  },
  {
    id: "5",
    slug: "future-of-work-east-africa",
    title: "Field Notes: Building From Dar es Salaam",
    category: "Future of Work",
    researchType: "Field Notes",
    date: "March 2026",
    excerpt: "Observations from building intelligence infrastructure in East Africa — what works, what doesn't, and what almost nobody talks about.",
    content: `Building world-class infrastructure from East Africa is not an act of overcoming geography. It is an act of refusing to inherit the assumptions baked into infrastructure built elsewhere.

The most common assumption we have had to discard: that engineering teams require constant high-speed connectivity to deliver enterprise-grade systems. They do not. They require precision, focus, and a refusal to ship anything that cannot survive the operational conditions of the market they serve.

Working from Dar es Salaam has forced us to design for resilience as a default. Systems that work here will work anywhere. Systems built for ideal conditions tend to fail under real ones.

This is not a story about Africa catching up. It is a story about Africa building from the right premise from day one.`,
    author: company.ceo,
    readTime: "8 min",
  },
];

const categories = ["All", "Intelligence Systems", "African Enterprise", "Infrastructure Economics", "Product Architecture", "Future of Work", "Acacia Research"];

const featured = posts.find(p => p.featured)!;
const regular = posts.filter(p => !p.featured);

/* ── Article view ───────────────────────────────────── */
function ArticleView({ post, onBack }: { post: Post; onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ background: "#050505" }}>
      <ReadingProgress />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-36 pb-32">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-16 cursor-pointer"
          style={{ color: "rgba(154,154,154,0.6)", fontSize: "13px", fontWeight: 500, background: "none", border: "none" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(154,154,154,0.6)")}
        >
          <ChevronLeft size={14} />
          Back to Journal
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] terminal-text font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full" style={{ color: "rgba(79,124,255,0.95)", background: "rgba(79,124,255,0.08)", border: "1px solid rgba(79,124,255,0.2)" }}>
              {post.researchType}
            </span>
            <span className="text-[10px] terminal-text tracking-widest uppercase" style={{ color: "rgba(154,154,154,0.5)" }}>{post.category}</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#fff", marginBottom: "1.5rem" }}>
            {post.title}
          </h1>

          <div className="flex items-center gap-5 mb-12 pb-12 border-b" style={{ borderColor: "rgba(79,124,255,0.08)" }}>
            <span style={{ fontSize: "12px", color: "rgba(154,154,154,0.55)", fontWeight: 500 }}>{post.author}</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(154,154,154,0.3)" }} />
            <span style={{ fontSize: "12px", color: "rgba(154,154,154,0.55)" }}>{post.date}</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(154,154,154,0.3)" }} />
            <div className="flex items-center gap-1.5" style={{ color: "rgba(154,154,154,0.55)" }}>
              <Clock size={11} />
              <span style={{ fontSize: "12px" }}>{post.readTime}</span>
            </div>
          </div>

          <div className="space-y-6">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.85, color: i === 0 ? "rgba(255,255,255,0.78)" : "rgba(154,154,154,0.72)", letterSpacing: "-0.005em", fontWeight: i === 0 ? 500 : 400 }}>
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── MAIN JOURNAL PAGE ──────────────────────────────── */
export function BlogClient() {
  const [active, setActive] = useState<Post | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  if (active) return <ArticleView post={active} onBack={() => setActive(null)} />;

  const filtered = regular.filter(p => {
    const matchCat = category === "All" || p.category === category;
    const matchQ = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen" style={{ background: "#050505" }}>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: "rgba(79,124,255,0.07)" }}>
        {/* Animated mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 30%, rgba(79,124,255,0.12), transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 70%, rgba(0,212,255,0.08), transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(224,179,65,0.04), transparent 60%)" }} />
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${(i * 73) % 100}%`,
                top: `${(i * 47) % 100}%`,
                width: i % 3 === 0 ? 3 : 1.5,
                height: i % 3 === 0 ? 3 : 1.5,
                background: i % 2 === 0 ? "rgba(79,124,255,0.5)" : "rgba(0,212,255,0.4)",
                boxShadow: `0 0 ${i % 2 === 0 ? 8 : 4}px currentColor`,
                color: i % 2 === 0 ? "#4F7CFF" : "#00D4FF",
              }}
              animate={{ y: [0, -25, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-44 pb-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <span className="eyebrow mb-8">Acacia Labs Research</span>
            <h1 style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              color: "#fff",
              marginBottom: "1.75rem",
            }}>
              The Acacia<br />
              <span style={{
                backgroundImage: "linear-gradient(to right, #4F7CFF 0%, #00D4FF 50%, #4F7CFF 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                animation: "shine-sweep 5s linear infinite",
              }}>
                Journal.
              </span>
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,0.6)", maxWidth: "44rem", fontWeight: 400, marginBottom: "1rem" }}>
              Research, frameworks, and perspectives on intelligence infrastructure, enterprise systems, and African innovation.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(154,154,154,0.55)", maxWidth: "38rem" }}>
              We publish ideas that help organizations think more clearly, execute more effectively, and prepare for the next era of intelligence-driven enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURED RESEARCH ═══ */}
      <section className="relative py-24" style={{ background: "#050505" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Sparkles size={14} style={{ color: "#00D4FF" }} />
              <span className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(0,212,255,0.85)" }}>
                Featured Research
              </span>
            </div>
            <div className="hidden sm:block h-px flex-1 ml-8" style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.25), transparent)" }} />
          </FadeUp>

          <FadeUp delay={0.1}>
            <button
              onClick={() => setActive(featured)}
              className="glass-spotlight w-full text-left p-10 md:p-16 group cursor-pointer block"
              style={{ background: "rgba(79,124,255,0.05)", border: "none" }}
            >
              <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #00D4FF 50%, transparent)" }} />
              <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-7">
                    <span className="text-[9px] terminal-text font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full" style={{ color: "#fff", background: "rgba(79,124,255,0.25)", border: "1px solid rgba(79,124,255,0.4)" }}>
                      {featured.researchType}
                    </span>
                    <span className="text-[10px] terminal-text tracking-widest uppercase" style={{ color: "rgba(154,154,154,0.6)" }}>{featured.category}</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(154,154,154,0.4)" }} />
                    <span className="text-[10px] terminal-text tracking-widest uppercase" style={{ color: "rgba(154,154,154,0.6)" }}>{featured.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.6rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff", marginBottom: "1.25rem" }} className="group-hover:text-accent-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: "2rem", maxWidth: "42rem" }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3" style={{ color: "#00D4FF", fontSize: "13px", fontWeight: 600, letterSpacing: "-0.005em" }}>
                    <span>Read Research</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-center justify-center gap-2 px-12 border-l" style={{ borderColor: "rgba(79,124,255,0.15)" }}>
                  <BookOpen size={32} style={{ color: "#4F7CFF" }} strokeWidth={1.3} />
                  <span className="text-[10px] terminal-text tracking-widest uppercase mt-3" style={{ color: "rgba(154,154,154,0.55)" }}>Read time</span>
                  <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{featured.readTime}</span>
                </div>
              </div>
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ═══ THESIS OF THE MONTH ═══ */}
      <section className="relative py-24 border-y" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.06)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.05), transparent 60%)" }} />
        <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center relative z-10">
          <FadeUp>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles size={12} style={{ color: "#E0B341" }} />
              <span className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(224,179,65,0.9)" }}>
                Thesis of the Month
              </span>
              <Sparkles size={12} style={{ color: "#E0B341" }} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <motion.blockquote
              animate={{ textShadow: ["0 0 0px rgba(79,124,255,0)", "0 0 24px rgba(79,124,255,0.15)", "0 0 0px rgba(79,124,255,0)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
                color: "#fff",
                fontStyle: "italic",
              }}
            >
              "The next generation of competitive advantage will not come from information.
              It will come from the ability to act on it."
            </motion.blockquote>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-10 text-[11px] terminal-text tracking-[0.3em] uppercase" style={{ color: "rgba(154,154,154,0.55)" }}>
              — Acacia Labs Research
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══ ARCHIVE — search + filter ═══ */}
      <section className="relative pt-24 pb-12" style={{ background: "#050505" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <span className="eyebrow mb-4">Research Archive</span>
                <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>
                  All publications.
                </h2>
              </div>
              <div className="relative w-full sm:w-auto sm:min-w-[320px]">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(154,154,154,0.4)" }} />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search research, frameworks, and insights..."
                  style={{
                    width: "100%", paddingLeft: 40, paddingRight: 16, paddingTop: 11, paddingBottom: 11,
                    background: "rgba(8,8,8,0.9)", border: "1px solid rgba(79,124,255,0.1)",
                    borderRadius: 100, fontSize: "12.5px", color: "#fff", outline: "none",
                    backdropFilter: "blur(12px)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(79,124,255,0.35)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(79,124,255,0.1)")}
                />
              </div>
            </div>
          </FadeUp>

          {/* Category pills */}
          <FadeUp delay={0.1}>
            <div className="flex gap-2 flex-wrap mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className="cursor-pointer transition-all"
                  style={{
                    padding: "8px 18px", borderRadius: 100, fontSize: "11px", fontWeight: 600,
                    letterSpacing: "0.04em", border: "1px solid",
                    background: category === cat ? "rgba(79,124,255,0.18)" : "rgba(8,8,8,0.6)",
                    borderColor: category === cat ? "rgba(79,124,255,0.5)" : "rgba(79,124,255,0.1)",
                    color: category === cat ? "#fff" : "rgba(154,154,154,0.6)",
                    boxShadow: category === cat ? "0 0 20px rgba(79,124,255,0.2)" : "none",
                    backdropFilter: "blur(12px)",
                    transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={e => { if (category !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,124,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; } }}
                  onMouseLeave={e => { if (category !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,124,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(154,154,154,0.6)"; } }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ MAGAZINE GRID ═══ */}
      <section className="pb-32" style={{ background: "#050505" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={category + query}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {filtered.length === 0 ? (
                <motion.div variants={springCard} className="col-span-full text-center py-20">
                  <p style={{ color: "rgba(154,154,154,0.45)", fontSize: "1rem" }}>No publications match that search.</p>
                </motion.div>
              ) : filtered.map((post, i) => {
                // Magazine pattern: every 5th card is wider (md:col-span-2)
                const isWide = i === 0 || i % 5 === 0;
                return (
                  <motion.div key={post.id} variants={springCard} className={isWide ? "md:col-span-2" : ""}>
                    <TiltCard3D intensity={4} className="glass-card h-full">
                      <button
                        onClick={() => setActive(post)}
                        className="w-full text-left p-7 md:p-8 flex flex-col h-full group cursor-pointer"
                        style={{ background: "none", border: "none", color: "inherit" }}
                      >
                        {/* Top label */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <span className="terminal-text text-[9px] font-bold tracking-[0.2em]" style={{ color: "rgba(79,124,255,0.6)" }}>
                              RESEARCH · 0{i + 1}
                            </span>
                          </div>
                          <ArrowRight size={15} style={{ color: "rgba(154,154,154,0.35)", flexShrink: 0 }} className="transition-all group-hover:text-accent-blue group-hover:translate-x-1" />
                        </div>

                        {/* Type badge + category */}
                        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                          <span className="text-[9px] terminal-text font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full" style={{ color: "rgba(0,212,255,0.95)", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.18)" }}>
                            {post.researchType}
                          </span>
                          <span className="text-[9px] terminal-text tracking-widest uppercase" style={{ color: "rgba(154,154,154,0.45)" }}>{post.category}</span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontFamily: "var(--font-display), system-ui, sans-serif",
                          fontSize: isWide ? "clamp(1.4rem, 2.5vw, 1.85rem)" : "clamp(1.15rem, 1.8vw, 1.4rem)",
                          fontWeight: 700,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.15,
                          color: "#fff",
                          marginBottom: "1rem",
                          transition: "color 220ms ease",
                        }} className="group-hover:text-accent-blue">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "rgba(154,154,154,0.6)", marginBottom: "auto", paddingBottom: "1.75rem" }}>
                          {post.excerpt}
                        </p>

                        {/* Metadata */}
                        <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(79,124,255,0.08)" }}>
                          <span style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{post.author}</span>
                          <span style={{ width: 2, height: 2, borderRadius: "50%", background: "rgba(154,154,154,0.3)" }} />
                          <span style={{ fontSize: "10.5px", color: "rgba(154,154,154,0.5)" }}>{post.date}</span>
                          <div className="flex items-center gap-1 ml-auto" style={{ color: "rgba(154,154,154,0.45)" }}>
                            <Clock size={10} />
                            <span style={{ fontSize: "10.5px" }}>{post.readTime}</span>
                          </div>
                        </div>
                      </button>
                    </TiltCard3D>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ FRAMEWORKS ═══ */}
      <section className="relative py-32 border-t" style={{ background: "#080808", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="text-center mb-16">
            <span className="eyebrow mx-auto mb-6">Acacia Frameworks</span>
            <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff", marginBottom: "1.25rem" }}>
              Frameworks we built.<br />
              <span style={{ color: "rgba(154,154,154,0.45)" }}>Models that scale.</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(154,154,154,0.6)", lineHeight: 1.7, maxWidth: "34rem", margin: "0 auto" }}>
              Original models we use internally and share publicly. Built from real engagements with operators, founders, and institutions.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Intelligence Stack */}
            <FadeUp delay={0.1}>
              <div className="glass-deep p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <Layers size={16} style={{ color: "#4F7CFF" }} strokeWidth={1.5} />
                  <span className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(79,124,255,0.9)" }}>
                    Framework · 01
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "0.5rem" }}>
                  Acacia Intelligence Stack
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(154,154,154,0.65)", lineHeight: 1.65, marginBottom: "2.5rem" }}>
                  The four-layer architecture every intelligence-driven enterprise eventually converges on.
                </p>
                <div className="space-y-2.5">
                  {[
                    { layer: "Execution Layer", icon: Activity, desc: "Acts on decisions in real time", color: "#00D4FF" },
                    { layer: "Decision Layer", icon: Brain, desc: "Reasoning, classification, recommendation", color: "#4F7CFF" },
                    { layer: "Knowledge Layer", icon: BookOpen, desc: "Structured organizational memory", color: "#6366F1" },
                    { layer: "Data Layer", icon: Database, desc: "Raw inputs from every operational source", color: "#8B5CF6" },
                  ].map(({ layer, icon: Icon, desc, color }, idx) => (
                    <div key={layer} className="flex items-center gap-4 p-4 rounded-lg transition-all hover:translate-x-1" style={{ background: "rgba(255,255,255,0.018)", border: `1px solid ${color}22` }}>
                      <div className="p-2 rounded-md flex-shrink-0" style={{ background: `${color}12`, border: `1px solid ${color}30` }}>
                        <Icon size={14} style={{ color }} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold" style={{ color: "#fff" }}>{layer}</div>
                        <div className="text-[10.5px]" style={{ color: "rgba(154,154,154,0.6)" }}>{desc}</div>
                      </div>
                      <span className="terminal-text text-[10px] font-bold" style={{ color }}>0{4 - idx}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Maturity Model */}
            <FadeUp delay={0.2}>
              <div className="glass-deep p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <Workflow size={16} style={{ color: "#00D4FF" }} strokeWidth={1.5} />
                  <span className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(0,212,255,0.9)" }}>
                    Framework · 02
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "0.5rem" }}>
                  Enterprise Intelligence Maturity Model
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(154,154,154,0.65)", lineHeight: 1.65, marginBottom: "2.5rem" }}>
                  Five levels of depth at which intelligence becomes embedded in operational fabric.
                </p>
                <div className="space-y-2.5">
                  {[
                    { lv: "5", name: "Autonomous", desc: "Systems execute and adapt continuously", intensity: 1 },
                    { lv: "4", name: "Intelligent", desc: "AI participates in operational decisions", intensity: 0.8 },
                    { lv: "3", name: "Automated", desc: "Rule-based systems execute known patterns", intensity: 0.6 },
                    { lv: "2", name: "Digital", desc: "Dashboards and reports assist humans", intensity: 0.4 },
                    { lv: "1", name: "Manual", desc: "Decisions made entirely by humans", intensity: 0.2 },
                  ].map(({ lv, name, desc, intensity }) => (
                    <div key={lv} className="flex items-center gap-4 p-3.5 rounded-lg transition-all hover:translate-x-1" style={{
                      background: `rgba(79,124,255,${0.02 + intensity * 0.05})`,
                      border: `1px solid rgba(79,124,255,${0.08 + intensity * 0.15})`,
                    }}>
                      <div className="flex items-center justify-center rounded-md flex-shrink-0" style={{
                        width: 32, height: 32,
                        background: `rgba(79,124,255,${0.1 + intensity * 0.2})`,
                        border: `1px solid rgba(79,124,255,${0.2 + intensity * 0.3})`,
                      }}>
                        <span style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "13px", fontWeight: 700, color: intensity > 0.5 ? "#fff" : "rgba(154,154,154,0.7)" }}>
                          {lv}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold" style={{ color: intensity > 0.5 ? "#fff" : "rgba(255,255,255,0.7)" }}>{name}</div>
                        <div className="text-[10.5px]" style={{ color: "rgba(154,154,154,0.55)" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ RESEARCH DISPATCH (newsletter) ═══ */}
      <section className="relative py-32 border-t overflow-hidden" style={{ background: "#050505", borderColor: "rgba(79,124,255,0.07)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(79,124,255,0.1), transparent 60%)" }} />
        <div className="mx-auto max-w-3xl px-6 lg:px-12 relative z-10">
          <FadeUp>
            <div className="glass-spotlight p-12 md:p-16 text-center">
              <Mail size={22} style={{ color: "#00D4FF", margin: "0 auto 24px" }} strokeWidth={1.5} />
              <span className="text-[10px] terminal-text font-bold tracking-[0.3em] uppercase mb-6 inline-block" style={{ color: "rgba(0,212,255,0.9)" }}>
                Research Dispatch
              </span>
              <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#fff", marginBottom: "1.25rem" }}>
                Original research,<br />delivered.
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(154,154,154,0.65)", lineHeight: 1.7, maxWidth: "30rem", margin: "0 auto 2.5rem" }}>
                Receive original research, frameworks, and perspectives from Acacia Labs. One dispatch per month. No noise.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => { e.preventDefault(); alert("Thank you — you will receive the next Research Dispatch."); }}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  style={{
                    flex: 1, padding: "13px 22px", borderRadius: 100,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(79,124,255,0.18)",
                    fontSize: "13px", color: "#fff", outline: "none", backdropFilter: "blur(12px)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(79,124,255,0.45)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(79,124,255,0.18)")}
                />
                <MagneticWrapper strength={0.25}>
                  <button type="submit" style={{
                    padding: "13px 28px", borderRadius: 100, background: "#4F7CFF", color: "#fff",
                    fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer",
                    boxShadow: "0 0 24px rgba(79,124,255,0.35)",
                    transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6B93FF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(79,124,255,0.55)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#4F7CFF"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(79,124,255,0.35)"; }}
                  >
                    Subscribe
                  </button>
                </MagneticWrapper>
              </form>
              <p className="mt-6 text-[10px] terminal-text tracking-widest uppercase" style={{ color: "rgba(154,154,154,0.4)" }}>
                Monthly · Zero spam · Unsubscribe anytime
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
