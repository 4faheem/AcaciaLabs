"use client";

import { useRef, useEffect } from "react";

// Natural oval dimensions — width < height simulates a physical disc viewed from above
const W = 115;
const H = 180;

// 7 ovals in a ring. Container 410×460, ring-center ≈ (205,230), radius ≈ 102
// left = cx + r·cos(a) − W/2,  top = cy + r·sin(a) − H/2
// Angles start at top (−90°), step +51.43° clockwise.
const DISCS = [
  //  left  top   z  delay  dur   rotZ
  { left: 148, top:  41, z: 1, delay: 0.0, dur:  9.0, rotZ:  4 }, // top
  { left: 228, top:  78, z: 3, delay: 1.2, dur:  8.0, rotZ: -6 }, // top-right
  { left: 247, top: 163, z: 6, delay: 0.5, dur: 10.0, rotZ:  2 }, // right — brightest
  { left: 193, top: 230, z: 5, delay: 2.0, dur: 11.0, rotZ: -5 }, // bottom-right
  { left: 107, top: 230, z: 7, delay: 0.8, dur:  9.5, rotZ:  5 }, // bottom-left
  { left:  48, top: 163, z: 4, delay: 1.5, dur: 10.0, rotZ: -3 }, // left
  { left:  68, top:  78, z: 2, delay: 3.0, dur:  8.5, rotZ:  8 }, // top-left
] as const;

// Flat glass disc gradient:
//   Layer 1 (top): sharp specular rim highlight at upper edge
//   Layer 2 (bottom): smooth top-bright → bottom-dark sweep (directional light from above)
function discGradient(bright: boolean): string {
  if (bright) {
    // Right/face-on disc — catches most light, nearly white face
    return [
      `radial-gradient(ellipse 62% 34% at 64% 14%, rgba(255,255,255,1.00) 0%, rgba(222,242,255,0.88) 40%, rgba(155,208,255,0.55) 65%, transparent 82%)`,
      `linear-gradient(to top, rgba(16,58,178,1.0) 0%, rgba(62,132,255,1.0) 26%, rgba(158,212,255,0.95) 56%, rgba(240,250,255,0.97) 82%, rgba(255,255,255,1.00) 96%)`,
    ].join(", ");
  }
  return [
    `radial-gradient(ellipse 40% 22% at 74% 10%, rgba(255,255,255,0.92) 0%, rgba(200,230,255,0.50) 48%, transparent 70%)`,
    `linear-gradient(to top, rgba(4,11,60,1.0) 0%, rgba(12,44,160,1.0) 22%, rgba(36,104,244,1.0) 50%, rgba(112,180,255,0.92) 76%, rgba(200,232,255,0.88) 96%)`,
  ].join(", ");
}

export function ThreeDDiscs() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;
    let mx = 0, my = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cx += (mx - cx) * 0.035;
      cy += (my - cy) * 0.035;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${cx * 10}px, ${cy * 6}px)`;
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
      className="relative flex items-center justify-center w-full"
      style={{ height: 500 }}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 62% 52% at 52% 52%, rgba(30,90,235,0.13) 0%, rgba(80,100,241,0.05) 55%, transparent 76%)",
          filter: "blur(22px)",
        }}
      />

      {/* Parallax outer — JS-controlled translate */}
      <div
        ref={parallaxRef}
        style={{ position: "relative", width: 410, height: 460, willChange: "transform" }}
      >
        {/* Ring spinner — slow rotation of entire cluster (CSS-controlled, no conflict with parallax) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            animation: "ring-slow-spin 52s linear infinite",
            transformOrigin: "205px 230px",
          }}
        >
          {DISCS.map((d, i) => (
            // Float wrapper — individual vertical bob
            <div
              key={i}
              style={{
                position: "absolute",
                left: d.left,
                top: d.top,
                zIndex: d.z,
                animation: `disc-float ${d.dur}s ease-in-out ${d.delay}s infinite`,
                willChange: "transform",
              }}
            >
              {/* The oval disc — natural W×H shape, slight rotateZ tilt */}
              <div
                style={{
                  width: W,
                  height: H,
                  borderRadius: "50%",
                  background: discGradient(i === 2),
                  transform: `rotateZ(${d.rotZ}deg)`,
                  boxShadow: [
                    `0 18px 52px rgba(0,3,38,0.88)`,
                    `0 6px 18px rgba(28,85,232,0.30)`,
                    `inset 0 1px 3px rgba(255,255,255,0.08)`,
                  ].join(", "),
                  border: "1.5px solid rgba(100,168,255,0.14)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
