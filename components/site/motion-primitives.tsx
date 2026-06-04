"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Reduced motion check ────────────────────────── */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* ── WORD-BY-WORD REVEAL ─────────────────────────── */
export function SplitWords({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className} style={style}>{text}</span>;

  return (
    <span className={className} style={{ ...style, display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* ── MAGNETIC BUTTON ─────────────────────────────── */
export function MagneticWrapper({
  children,
  strength = 0.35,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ── TILT CARD (3D perspective hover) ───────────── */
export function TiltCard3D({
  children,
  className,
  style,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 220, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 220, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * intensity);
    ry.set(px * intensity);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        rotateX: springRx,
        rotateY: springRy,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ── STAGGER CONTAINER (spring cascade) ─────────── */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const springCard = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 22, mass: 0.8 },
  },
};

/* ── READING PROGRESS BAR ────────────────────────── */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]" style={{ background: "rgba(255,255,255,0.04)" }}>
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress / 100,
          background: "linear-gradient(90deg, #3D81E3, #38BDF8, #00d2ff)",
        }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

/* ── AMBIENT GLOW CURSOR ─────────────────────────── */
export function AmbientGlow() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[2] rounded-full"
      style={{
        width: 480,
        height: 480,
        x: useTransform(springX, v => v - 240),
        y: useTransform(springY, v => v - 240),
        background: "radial-gradient(circle, rgba(61,129,227,0.055) 0%, transparent 65%)",
      }}
    />
  );
}

/* ── FADE UP (scroll-triggered) ──────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? {} : { opacity: 0, y: 22 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
