"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[100] h-[2px] pointer-events-none will-change-transform"
      style={{
        width: `${pct}%`,
        background: "linear-gradient(90deg, #3B82F6 0%, #6366F1 55%, #22D3EE 100%)",
        transition: "width 0.08s linear",
      }}
    />
  );
}
