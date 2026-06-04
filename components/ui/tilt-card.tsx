"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className = "", intensity = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transition = "transform 0.08s ease-out";
    el.style.transform = `perspective(900px) rotateY(${x * intensity * 2}deg) rotateX(${-y * intensity}deg) translateZ(14px)`;
    if (specRef.current) {
      const px = ((e.clientX - left) / width) * 100;
      const py = ((e.clientY - top) / height) * 100;
      specRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(147,112,255,0.10) 0%, rgba(99,102,241,0.05) 45%, transparent 72%)`;
      specRef.current.style.opacity = "1";
    }
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    if (specRef.current) specRef.current.style.opacity = "0";
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ willChange: "transform", position: "relative" }}
    >
      {children}
      {/* Specular highlight — moving light reflection that follows cursor */}
      <div
        ref={specRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          borderRadius: "inherit",
          opacity: 0,
          transition: "opacity 0.12s ease",
          zIndex: 5,
        }}
      />
    </div>
  );
}
