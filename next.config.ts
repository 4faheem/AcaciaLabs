import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: no `output: "export"`. Static export disables API routes (the
  // /api/contact email handler). Deploy on Vercel (or any Node host) so the
  // server-side Resend route runs and keeps the API key off the client.
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
