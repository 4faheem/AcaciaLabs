/* eslint-disable @next/next/no-img-element */
export const dynamic = "force-static";

import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Acacia Labs";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const logoPath = join(process.cwd(), "public", "acacia-logo.png");
const logoData = readFileSync(logoPath);
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top left, rgba(108,92,231,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(0,209,255,0.15), transparent 35%), linear-gradient(135deg, #050505 0%, #0F0F15 60%, #08080C 100%)",
          color: "#F5F5F5",
          padding: "70px",
          position: "relative",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(rgba(245,245,245,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={logoSrc}
              alt="Acacia Labs logo"
              width={75}
              height={75}
              style={{ objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "#F5F5F5" }}>
                Acacia
              </span>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,245,245,0.5)" }}>
                Labs
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingBottom: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 62, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", textTransform: "uppercase" }}>
              <span>AI-Powered Operational</span>
              <span>Infrastructure.</span>
            </div>
            <div style={{ maxWidth: 960, fontSize: 24, fontWeight: 500, lineHeight: 1.5, color: "rgba(245,245,245,0.6)" }}>
              Acacia Labs engineers high-availability business operating systems, carrier money ledgers, and autonomous workflows for Sub-Saharan African enterprise.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

