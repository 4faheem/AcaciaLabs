import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { CursorGlow } from "@/components/site/cursor-glow";
import { ReadingProgress, AmbientGlow } from "@/components/site/motion-primitives";
import { company, siteKeywords } from "@/lib/site";
import { OrganizationSchema } from "@/components/seo/SchemaMarkup";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// IBM Plex Sans: engineering, systems thinking, research, institutional trust — display/headlines
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

// JetBrains Mono: premium monospace for data labels, status indicators, terminal text
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Acacia Labs | AI-Powered Operational Infrastructure",
    template: `%s | Acacia Labs`
  },
  description: "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
  applicationName: "Acacia Labs",
  keywords: siteKeywords,
  authors: [{ name: company.ceo }, { name: company.coo }],
  creator: company.ceo,
  publisher: company.name,
  alternates: {
    canonical: company.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#00D1FF",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Acacia Labs | AI-Powered Operational Infrastructure",
    description: "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
    url: company.url,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${company.name} - AI-Powered Operational Infrastructure for African Enterprise`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acacia Labs | AI-Powered Operational Infrastructure",
    description: "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full scroll-smooth">
      <body suppressHydrationWarning className={`min-h-full font-sans antialiased bg-[#050505] text-white ${inter.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>

        {/* Global SVG noise filter — used by shiny headline text */}
        <svg className="pointer-events-none absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <filter id="c3-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
              <feComposite in2="SourceGraphic" operator="in" result="noise" />
              <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
            </filter>
          </defs>
        </svg>

        {/* Vertical guide lines (Aura-style) */}
        <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/[0.06] z-[5]" />
        <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/[0.06] z-[5]" />

        {/* Reading progress bar */}
        <ReadingProgress />
        {/* Ambient cursor glow */}
        <AmbientGlow />
        {/* Interactive cursor glow */}
        <CursorGlow />

        <div className="flex min-h-screen flex-col relative overflow-hidden">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <OrganizationSchema />
      </body>
    </html>
  );
}
