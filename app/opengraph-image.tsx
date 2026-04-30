export const dynamic = "force-static";

import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Sync Labs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const logoPath = join(process.cwd(), "public", "syncLabs-logo.png");
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
            "radial-gradient(circle at top left, rgba(108,92,231,0.34), transparent 35%), radial-gradient(circle at 80% 0%, rgba(0,206,201,0.22), transparent 28%), linear-gradient(135deg, #090714 0%, #1A1040 48%, #0B0820 100%)",
          color: "#F8F7FF",
          padding: "60px",
          position: "relative",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.18,
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
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <img
              src={logoSrc}
              alt="Sync Labs logo"
              width={68}
              height={68}
              style={{ borderRadius: 18 }}
            />
            <div style={{ fontSize: 30, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Sync Labs
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.04 }}>
              Run your business without the guesswork.
            </div>
            <div style={{ maxWidth: 900, fontSize: 30, lineHeight: 1.45, color: "rgba(248,247,255,0.78)" }}>
              Sync Labs builds intelligent systems that show you what is happening, what is next, and what to do.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

