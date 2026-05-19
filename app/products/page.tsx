import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise Modules | Acacia Labs Systems Suite",
  description: "Explore the Acacia Labs operational ecosystem: modular, high-availability software nodes built to automate workflows, orchestrate logistics, and secure financial tracing across Sub-Saharan networks.",
  alternates: {
    canonical: `${company.url}/products`,
  },
  openGraph: {
    title: "Enterprise Modules | Acacia Labs Systems Suite",
    description: "Explore the Acacia Labs operational ecosystem: modular, high-availability software nodes built to automate workflows, orchestrate logistics, and secure financial tracing across Sub-Saharan networks.",
    url: `${company.url}/products`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Enterprise Modules - Acacia Labs Systems Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Modules | Acacia Labs Systems Suite",
    description: "Explore the Acacia Labs operational ecosystem: modular, high-availability software nodes built to automate workflows, orchestrate logistics, and secure financial tracing across Sub-Saharan networks.",
    images: ["/opengraph-image.png"],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
