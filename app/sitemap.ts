export const dynamic = "force-static";

import type { MetadataRoute } from "next";

import { company } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/products", "/contact"].map((path) => ({
    url: `${company.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

