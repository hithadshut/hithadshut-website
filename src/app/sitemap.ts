import type { MetadataRoute } from "next";
import { site, services, guides, compares } from "@/lib/site";
import { areas } from "@/content/areas";
import { serviceMatrix } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    // Homepage: weekly, top priority
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Contact: high intent, monthly
    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Services: primary commercial pages
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    // Areas index: geo hub
    {
      url: `${site.url}/areas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Guides: content pages
    ...guides.map((g) => ({
      url: `${site.url}/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    // Compare: all comparison pages (unified priority per spec)
    ...compares.map((c) => ({
      url: `${site.url}/compare/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Areas city pages
    ...areas.map((a) => ({
      url: `${site.url}/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Areas city × service pages
    ...areas.flatMap((a) =>
      serviceMatrix.map((s) => ({
        url: `${site.url}/areas/${a.slug}/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
    // About: brand page
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${site.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/accessibility`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // TODO (stage G+): if the URL count grows past ~10K, split into sitemap index + sub-sitemaps.
  // Currently well under the 50K Google limit.

  return entries;
}
