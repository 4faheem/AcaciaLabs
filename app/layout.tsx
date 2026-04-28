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

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | AI Business Infrastructure`,
    template: `%s | ${company.name}`,
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
    title: `${company.name} | AI Business Infrastructure`,
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
    title: `${company.name} | AI Business Infrastructure`,
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
    <html lang="en" className="dark h-full bg-[#0a0a0a]">
      <body className={`min-h-full font-sans ${inter.variable}`}>
        <div className="flex min-h-screen flex-col">
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
