import type { Metadata } from "next";
import SystemsClient from "./SystemsClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Systems Architecture & Technical Specs | Acacia Labs",
  description: "Technical specifications, latency SLAs, and ledger trace rates for Acacia Labs sovereign business operating layer. High-performance enterprise modules engineered for physical operations.",
  alternates: {
    canonical: `${company.url}/systems`,
  },
  openGraph: {
    title: "Systems Architecture & Technical Specs | Acacia Labs",
    description: "Technical specifications, latency SLAs, and ledger trace rates for Acacia Labs sovereign business operating layer. High-performance enterprise modules engineered for physical operations.",
    url: `${company.url}/systems`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Systems Architecture & Technical Specs - Acacia Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Architecture & Technical Specs | Acacia Labs",
    description: "Technical specifications, latency SLAs, and ledger trace rates for Acacia Labs sovereign business operating layer. High-performance enterprise modules engineered for physical operations.",
    images: ["/opengraph-image.png"],
  },
};

export default function SystemsPage() {
  return <SystemsClient />;
}
