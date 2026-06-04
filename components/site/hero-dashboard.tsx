"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";

const TABS = ["Dashboard", "Analytics", "Workflows", "Ledger", "AI Insights"];

const METRICS = [
  { label: "REVENUE TRACKED", value: "$1.2M+",  delta: "↑ +18.4% this month", color: "text-accent-success", glow: "rgba(52,211,153,0.12)" },
  { label: "YOY GROWTH RATE", value: "+142%",    delta: "↑ +23pts vs prior yr", color: "text-accent-cyan",    glow: "rgba(34,211,238,0.10)" },
  { label: "ACTIVE WORKFLOWS", value: "2,400+",  delta: "↑ +340 this month",   color: "text-accent-blue",   glow: "rgba(59,130,246,0.10)" },
  { label: "SYSTEM UPTIME",   value: "99.99%",   delta: "SLA maintained",       color: "text-accent-gold",   glow: "rgba(224,179,65,0.10)" },
];

const BAR_HEIGHTS = [32, 48, 38, 62, 55, 72, 68, 80, 74, 88, 82, 100];

const LOG = [
  { label: "M-Pesa TX verified",   time: "09:12:06", color: "text-accent-success" },
  { label: "Workflow auto-routed", time: "09:11:44", color: "text-accent-cyan" },
  { label: "Ledger sync complete",  time: "09:11:20", color: "text-accent-blue" },
  { label: "Report compiled",       time: "09:10:55", color: "text-accent-indigo" },
  { label: "Alert threshold clear", time: "09:10:32", color: "text-accent-success" },
];

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transition = "transform 0.08s ease-out";
    el.style.transform = `perspective(1400px) rotateX(${8 - y * 10}deg) rotateY(${x * 7}deg)`;
  }

  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = "perspective(1400px) rotateX(8deg) rotateY(0deg)";
  }

  return (
    <div className="relative w-full" style={{ transformStyle: "preserve-3d" }}>

      {/* Outer atmospheric glow — multiple layers for depth */}
      <div className="absolute -inset-6 rounded-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 75%)", filter: "blur(20px)" }} />
      <div className="absolute -inset-1 rounded-xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.08) 50%, rgba(34,211,238,0.08) 100%)", filter: "blur(4px)" }} />

      {/* Dashboard card */}
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative w-full rounded-xl overflow-hidden will-change-transform"
        style={{
          transform: "perspective(1400px) rotateX(8deg) rotateY(0deg)",
          boxShadow: hovered
            ? "0 60px 160px rgba(0,0,30,0.9), 0 0 80px rgba(99,102,241,0.18), inset 0 1px 0 rgba(99,102,241,0.3)"
            : "0 50px 130px rgba(0,0,30,0.85), 0 0 60px rgba(99,102,241,0.13), inset 0 1px 0 rgba(99,102,241,0.2)",
          border: "1px solid rgba(99,102,241,0.22)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Animated top border gradient */}
        <div className="absolute inset-x-0 top-0 h-[1px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 0%, #6366F1 30%, #3B82F6 60%, #22D3EE 80%, transparent 100%)" }} />

        {/* ─── TITLE BAR ─── */}
        <div className="bg-[#050E1F] border-b border-[rgba(99,102,241,0.12)] px-5 py-3 flex items-center gap-4">
          {/* macOS-style window controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_#28C840]" />
          </div>

          <div className="w-[1px] h-4 bg-[rgba(99,102,241,0.15)] flex-shrink-0" />

          {/* App identity */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-5 h-5 rounded-sm bg-accent-indigo/20 border border-accent-indigo/30 flex items-center justify-center">
              <span className="terminal-text text-[7px] font-bold text-accent-indigo">AL</span>
            </div>
            <span className="terminal-text text-[10px] font-bold text-accent-indigo tracking-widest">E-MANAGER</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent-success" style={{ animation: "pulse 2s infinite" }} />
            <span className="terminal-text text-[8px] text-accent-success tracking-widest">LIVE</span>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-0.5 flex-1 min-w-0 overflow-hidden">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`px-3 py-1.5 text-[9px] terminal-text tracking-wider rounded-sm whitespace-nowrap transition-all duration-200 ${
                  i === 0
                    ? "bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/25 font-bold"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search / date */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <div className="border border-glass-border bg-[#060B18] rounded-sm px-3 py-1 terminal-text text-[8px] text-text-muted flex items-center gap-2">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 16 16"><circle cx="7" cy="7" r="4"/><path d="M11 11l2.5 2.5"/></svg>
              Search reports…
            </div>
            <div className="border border-glass-border bg-[#060B18] rounded-sm px-3 py-1 terminal-text text-[8px] text-text-muted whitespace-nowrap">
              Last 30 Days ▾
            </div>
          </div>
        </div>

        {/* ─── DASHBOARD BODY ─── */}
        <div className="bg-[#070D1E] p-4 md:p-5 space-y-4">

          {/* KPI Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-sm border border-[rgba(99,102,241,0.1)] p-3 md:p-4 space-y-2 group transition-all duration-300 hover:border-[rgba(99,102,241,0.22)]"
                style={{ background: `linear-gradient(135deg, #060B18 0%, ${m.glow.replace('0.', '0.0')} 100%)` }}
              >
                <div className="terminal-text text-[7px] md:text-[8px] text-text-muted tracking-widest uppercase">{m.label}</div>
                <div className={`text-xl md:text-2xl font-bold tracking-tight ${m.color}`}>{m.value}</div>
                <div className="terminal-text text-[7px] md:text-[8px] text-text-muted tracking-wide">{m.delta}</div>
                {/* Mini progress bar */}
                <div className="h-[2px] bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${m.color.replace("text-", "bg-")}`}
                    style={{ width: "72%", opacity: 0.6 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid md:grid-cols-[1fr_180px] gap-3">

            {/* Revenue Bar Chart */}
            <div className="bg-[#060B18] border border-[rgba(99,102,241,0.1)] rounded-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[9px] terminal-text text-text-muted tracking-widest uppercase">Revenue Pipeline</div>
                  <div className="text-[8px] terminal-text text-text-muted mt-0.5 tracking-wider">Last 6 months · M-Pesa + Airtel Money + Tigopesa</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-accent-indigo/60" />
                    <span className="terminal-text text-[8px] text-text-muted">Revenue</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-accent-cyan/40" />
                    <span className="terminal-text text-[8px] text-text-muted">Forecast</span>
                  </div>
                  <span className="terminal-text text-[8px] text-accent-cyan tracking-widest">REAL-TIME</span>
                </div>
              </div>
              {/* Bar chart */}
              <div className="flex items-end gap-1 h-16">
                {BAR_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-300"
                    style={{
                      height: `${h}%`,
                      background: i === BAR_HEIGHTS.length - 1
                        ? "linear-gradient(180deg, #3B82F6 0%, #6366F1 100%)"
                        : i >= BAR_HEIGHTS.length - 3
                        ? "rgba(59,130,246,0.35)"
                        : "rgba(99,102,241,0.18)",
                      boxShadow: i === BAR_HEIGHTS.length - 1 ? "0 0 8px rgba(59,130,246,0.4)" : "none",
                    }}
                  />
                ))}
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between mt-2">
                {["Dec", "Jan", "Feb", "Mar", "Apr", "May"].map(m => (
                  <span key={m} className="terminal-text text-[7px] text-text-muted">{m}</span>
                ))}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-[#060B18] border border-[rgba(99,102,241,0.1)] rounded-sm p-4 space-y-2 overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[8px] terminal-text text-text-muted tracking-widest uppercase">Activity Log</div>
                <div className="flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-accent-success" style={{ animation: "pulse 1.5s infinite" }} />
                  <span className="terminal-text text-[7px] text-accent-success tracking-widest">LIVE</span>
                </div>
              </div>
              {LOG.map((item, i) => (
                <div key={i} className="flex items-start gap-2 group/log">
                  <span className={`terminal-text text-[10px] mt-0.5 flex-shrink-0 ${item.color}`}>›</span>
                  <div className="min-w-0">
                    <div className="text-[8px] text-text-secondary leading-tight truncate">{item.label}</div>
                    <div className="text-[7px] terminal-text text-text-muted">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex flex-wrap items-center gap-4 border-t border-[rgba(99,102,241,0.08)] pt-3">
            {[
              { dot: "bg-accent-success", text: "PACKET_SYS: STABLE" },
              { dot: "bg-accent-blue",    text: "LATENCY: 8ms avg" },
              { dot: "bg-accent-indigo",  text: "SYNC: 88,432 ops/sec" },
            ].map(s => (
              <div key={s.text} className="flex items-center gap-1.5">
                <span className={`h-1 w-1 rounded-full ${s.dot}`} />
                <span className="terminal-text text-[8px] text-text-muted tracking-wider">{s.text}</span>
              </div>
            ))}
            <div className="ml-auto terminal-text text-[8px] text-accent-indigo/60 tracking-widest">REF: AC-OS-8.9</div>
          </div>
        </div>
      </div>

      {/* Ground shadow / reflection */}
      <div className="absolute inset-x-8 -bottom-6 h-8 rounded-full pointer-events-none"
        style={{ background: "rgba(99,102,241,0.12)", filter: "blur(16px)" }} />
    </div>
  );
}
