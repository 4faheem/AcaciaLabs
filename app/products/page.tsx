import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "E-Manager — Business Management Software for Tanzania | Acacia Labs",
  description: "E-Manager is an all-in-one business management platform built for Tanzanian businesses. Manage inventory, sales, finance, staff, and reporting from one screen. Start free for 14 days.",
  alternates: {
    canonical: `${company.url}/products`,
  },
  openGraph: {
    title: "E-Manager — Business Management Software for Tanzania | Acacia Labs",
    description: "E-Manager is an all-in-one business management platform built for Tanzanian businesses. Manage inventory, sales, finance, staff, and reporting from one screen. Start free for 14 days.",
    url: `${company.url}/products`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "E-Manager — Business Management Software for Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Manager — Business Management Software for Tanzania | Acacia Labs",
    description: "E-Manager is an all-in-one business management platform built for Tanzanian businesses. Manage inventory, sales, finance, staff, and reporting from one screen. Start free for 14 days.",
    images: ["/opengraph-image.png"],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
