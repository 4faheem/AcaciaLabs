import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acacia Labs | AI-Powered Operational Infrastructure for African Enterprise",
  description: "Acacia Labs engineers high-availability, AI-powered business operating systems, carrier money ledgers, and autonomous workflow infrastructure for modern African commerce.",
  alternates: {
    canonical: company.url,
  },
  openGraph: {
    title: "Acacia Labs | AI-Powered Operational Infrastructure for African Enterprise",
    description: "Acacia Labs engineers high-availability, AI-powered business operating systems, carrier money ledgers, and autonomous workflow infrastructure for modern African commerce.",
    url: company.url,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Acacia Labs - AI-Powered Operational Infrastructure for African Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acacia Labs | AI-Powered Operational Infrastructure for African Enterprise",
    description: "Acacia Labs engineers high-availability, AI-powered business operating systems, carrier money ledgers, and autonomous workflow infrastructure for modern African commerce.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Acacia Labs",
    "alternateName": "Acacia Labs East Africa",
    "url": company.url,
    "description": "AI-powered operational infrastructure and business operating systems engineered for modern African enterprise.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${company.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
