"use client";

import { useEffect, useRef } from "react";

export function ParallaxBlobs() {
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;
    let mx = 0, my = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };

    const tick = () => {
      cx += (mx - cx) * 0.05;
      cy += (my - cy) * 0.05;
      if (b1.current) b1.current.style.transform = `translate(${cx * -40}px, ${cy * -30}px)`;
      if (b2.current) b2.current.style.transform = `translate(${cx * 55}px, ${cy * 45}px)`;
      if (b3.current) b3.current.style.transform = `translate(${cx * 22}px, ${cy * 18}px)`;
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
    <>
      {/* Electric blue — primary depth layer */}
      <div
        ref={b1}
        className="absolute top-[15%] left-[5%] w-[560px] h-[560px] rounded-full bg-[#3B82F6]/[0.09] blur-[140px] pointer-events-none will-change-transform"
      />
      {/* Indigo — secondary depth layer (Stripe/Linear proven engagement color) */}
      <div
        ref={b2}
        className="absolute bottom-[10%] right-[3%] w-[460px] h-[460px] rounded-full bg-[#6366F1]/[0.07] blur-[120px] pointer-events-none will-change-transform"
      />
      {/* Cyan — tertiary accent layer */}
      <div
        ref={b3}
        className="absolute top-[60%] left-[50%] w-[320px] h-[320px] rounded-full bg-[#22D3EE]/[0.05] blur-[100px] pointer-events-none will-change-transform"
      />
    </>
  );
}
