"use client";

import { useRef, useEffect } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf: number;
    let tx = -800, ty = -800, cx = -800, cy = -800;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.075;
      cy += (ty - cy) * 0.075;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(56,189,248,0.048) 0%, rgba(56,189,248,0.018) 40%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
