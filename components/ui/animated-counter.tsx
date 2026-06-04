"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parse(raw: string) {
  const prefixM = raw.match(/^([^0-9]*)/);
  const prefix = prefixM?.[1] ?? "";
  const rest = raw.slice(prefix.length);
  const suffixM = rest.match(/([^0-9]+)$/);
  const suffix = suffixM?.[1] ?? "";
  const numStr = rest.slice(0, rest.length - suffix.length).replace(/,/g, "");
  const number = parseFloat(numStr) || 0;
  const dotIdx = numStr.indexOf(".");
  const decimals = dotIdx >= 0 ? numStr.length - dotIdx - 1 : 0;
  return { prefix, number, suffix, decimals };
}

function fmt(n: number, decimals: number) {
  if (decimals > 0) return n.toFixed(decimals);
  return Math.round(n).toLocaleString("en-US");
}

export function AnimatedCounter({ value, className = "", duration = 1800 }: AnimatedCounterProps) {
  const { prefix, number, suffix, decimals } = parse(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(number);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setCount(eased * number);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [number, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{fmt(count, decimals)}{suffix}
    </span>
  );
}
