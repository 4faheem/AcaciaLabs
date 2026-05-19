export const dynamic = "force-static";

import type { MetadataRoute } from "next";

import { company } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/products/e-manager", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/products/syncai", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/systems", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${company.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

