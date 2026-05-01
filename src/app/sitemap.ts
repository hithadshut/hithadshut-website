import type { MetadataRoute } from "next";
import { site, services, guides, compares } from "@/lib/site";
import { areas } from "@/content/areas";
import { serviceMatrix } from "@/content/services";
import { isGeoPairIndexable } from "@/content/indexable-geo";
import { projects } from "@/content/projects";

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
    // Areas city pages — skip cities flagged with noindexReason (failed
    // the doorway-page audit; see seo/AREA_PAGES.md).
    ...areas
      .filter((a) => !a.noindexReason)
      .map((a) => ({
        url: `${site.url}/areas/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    // Areas city × service pages — only the allowlisted, content-
    // differentiated pairs ship to the sitemap. The rest are noindex
    // (see src/content/indexable-geo.ts) to prevent doorway-page risk.
    ...areas.flatMap((a) =>
      serviceMatrix
        .filter((s) => isGeoPairIndexable(a.slug, s.slug))
        .map((s) => ({
          url: `${site.url}/areas/${a.slug}/${s.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }))
    ),
    // Projects: real-work portfolio
    {
      url: `${site.url}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Per-project pages — index list page + each project detail.
    // Detail pages stay in the sitemap even when their JPG isn't on disk
    // yet; the page renders a placeholder. Removing them later would
    // create needless 404s in GSC if Google has already discovered them.
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // About: brand page
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Author page (Ofek Mazor) — anchors Person schema for E-E-A-T
    {
      url: `${site.url}/about/ofek-mazor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.55,
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
