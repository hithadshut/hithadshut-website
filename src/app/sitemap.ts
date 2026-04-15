import type { MetadataRoute } from "next";
import { site, services, guides, compare } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: `/compare/${compare.slug}`, priority: 0.8, changeFrequency: "monthly" },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];
  return paths.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
