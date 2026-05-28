import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { company, siteKeywords } from "@/lib/site";
import { OrganizationSchema } from "@/components/seo/SchemaMarkup";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Since Satoshi/Geist/IBM Plex Sans are requested, we'll use Inter as primary for now 
// but add a fallback variable if we were to add local fonts later.
// For now, let's stick to Inter and system fonts for performance, 
// unless we have the font files.

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
      <body className={`min-h-full font-sans antialiased bg-[#080808] text-white ${inter.variable}`}>
        <div className="flex min-h-screen flex-col relative overflow-hidden">
          {/* Global Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-[-1]">
             {/* Secondary Glow: Atmospheric radial blurs */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#6C5CE7]/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00CEC9]/5 blur-[100px]" />
          </div>
          
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <OrganizationSchema />
      </body>
    </html>
  );
}
