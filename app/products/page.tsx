import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI-Powered Systems & Infrastructure | Acacia Labs",
  description: "Explore the Acacia Labs operational infrastructure ecosystem: AI-native systems engineered to automate workflows, provide business visibility, and solve execution challenges for East African enterprise.",
  alternates: {
    canonical: `${company.url}/products`,
  },
  openGraph: {
    title: "AI-Powered Systems & Infrastructure | Acacia Labs",
    description: "Explore the Acacia Labs operational infrastructure ecosystem: AI-native systems engineered to automate workflows, provide business visibility, and solve execution challenges for East African enterprise.",
    url: `${company.url}/products`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Acacia Labs Systems & Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Systems & Infrastructure | Acacia Labs",
    description: "Explore the Acacia Labs operational infrastructure ecosystem: AI-native systems engineered to automate workflows, provide business visibility, and solve execution challenges for East African enterprise.",
    images: ["/opengraph-image.png"],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
