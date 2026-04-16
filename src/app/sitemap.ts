import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { site, services, guides, compare, compares } from "@/lib/site";
import { areas } from "@/content/areas";
import { serviceMatrix } from "@/content/services";

const APP_DIR = path.join(process.cwd(), "src", "app");
const FALLBACK = new Date();

function mtime(relativeFromApp: string): Date {
  try {
    const full = path.join(APP_DIR, relativeFromApp);
    const stat = fs.statSync(full);
    return stat.mtime;
  } catch {
    return FALLBACK;
  }
}

function pageMtime(routePath: string): Date {
  const clean = routePath.replace(/^\//, "");
  return mtime(path.join(clean, "page.tsx"));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/`,
      lastModified: mtime("page.tsx"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/contact`,
      lastModified: pageMtime("/contact"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: pageMtime(`/services/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...guides.map((g) => ({
      url: `${site.url}/guides/${g.slug}`,
      lastModified: pageMtime(`/guides/${g.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/compare/${compare.slug}`,
      lastModified: pageMtime(`/compare/${compare.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...compares
      .filter((c) => c.slug !== compare.slug)
      .map((c) => ({
        url: `${site.url}/compare/${c.slug}`,
        lastModified: pageMtime(`/compare/${c.slug}`),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    {
      url: `${site.url}/about`,
      lastModified: pageMtime("/about"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: pageMtime("/privacy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: pageMtime("/terms"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/accessibility`,
      lastModified: pageMtime("/accessibility"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/areas`,
      lastModified: pageMtime("/areas"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...areas.map((a) => ({
      url: `${site.url}/areas/${a.slug}`,
      lastModified: FALLBACK,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...areas.flatMap((a) =>
      serviceMatrix.map((s) => ({
        url: `${site.url}/areas/${a.slug}/${s.slug}`,
        lastModified: FALLBACK,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
  ];
  return entries;
}
