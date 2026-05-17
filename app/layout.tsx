import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { company, siteKeywords } from "@/lib/site";

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
    default: company.name,
    template: `%s | ${company.name}`
  },
  description: company.subtext,
  applicationName: company.name,
  keywords: siteKeywords,
  authors: [{ name: company.ceo }],
  creator: company.ceo,
  publisher: company.name,
  alternates: {
    canonical: company.url,
  },
  openGraph: {
    title: company.name,
    description: company.subtext,
    url: company.url,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${company.name} website preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.subtext,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    email: company.email,
    description: company.positioning,
    founder: company.ceo,
    slogan: company.promise,
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
