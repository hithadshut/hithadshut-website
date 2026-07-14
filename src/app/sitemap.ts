import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { statSync } from "node:fs";
import { resolve } from "node:path";
import { site, services, guides, compares } from "@/lib/site";
import { areas } from "@/content/areas";
import { serviceMatrix } from "@/content/services";
import { isGeoPairIndexable } from "@/content/indexable-geo";
import { projects } from "@/content/projects";

/**
 * Per-URL lastmod fidelity.
 *
 * Default Next.js behavior emits a single `new Date()` for every entry,
 * which signals "everything changed simultaneously" to crawlers and hurts
 * crawl prioritization. We resolve each URL's lastmod from git history
 * (the committer date of the most recent commit touching the URL's source
 * file(s)), with a filesystem-mtime fallback when git is unavailable.
 *
 * Computed at build time. Vercel ships .git during the build, so git log
 * is available; the result is baked into the static sitemap.
 */
const lastmodCache = new Map<string, number>();

function gitLastModifiedMs(filePath: string): number | null {
  if (lastmodCache.has(filePath)) return lastmodCache.get(filePath)!;
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!iso) {
      lastmodCache.set(filePath, -1);
      return null;
    }
    const ms = new Date(iso).getTime();
    lastmodCache.set(filePath, ms);
    return ms;
  } catch {
    lastmodCache.set(filePath, -1);
    return null;
  }
}

function fileMtimeMs(filePath: string): number | null {
  try {
    return statSync(resolve(process.cwd(), filePath)).mtimeMs;
  } catch {
    return null;
  }
}

/** Most recent modification across the page source + any content data files. */
function lastModifiedFor(...sourcePaths: string[]): Date {
  const candidates = sourcePaths
    .map((p) => gitLastModifiedMs(p) ?? fileMtimeMs(p))
    .filter((ms): ms is number => ms !== null && ms > 0);
  if (candidates.length === 0) return new Date();
  return new Date(Math.max(...candidates));
}

/**
 * Priority distribution (per seo/SITEMAP_AUDIT 2026-05-03):
 *   1.0  homepage
 *   0.9  pillar/hub pages - /services/*, /guides/*, /compare/*, /about,
 *        /contact, /areas
 *   0.7  city standalone pages, indexable city × service pairs,
 *        /projects index
 *   0.6  project detail pages
 *   0.3  legal pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: `${site.url}/`,
      lastModified: lastModifiedFor("src/app/page.tsx"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Contact (high commercial intent - pillar tier)
    {
      url: `${site.url}/contact`,
      lastModified: lastModifiedFor("src/app/contact/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Pillar pages - urban-renewal pillar (each pillar + sub-page
    // registered explicitly when it ships).
    {
      url: `${site.url}/pinui-binui`,
      lastModified: lastModifiedFor("src/app/pinui-binui/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/pinui-binui/temurot`,
      lastModified: lastModifiedFor("src/app/pinui-binui/temurot/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/chok-67`,
      lastModified: lastModifiedFor("src/app/pinui-binui/chok-67/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/kshishim`,
      lastModified: lastModifiedFor("src/app/pinui-binui/kshishim/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/yorshim`,
      lastModified: lastModifiedFor("src/app/pinui-binui/yorshim/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/machshvon-temurot`,
      lastModified: lastModifiedFor("src/app/pinui-binui/machshvon-temurot/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/pinui-binui/eravut`,
      lastModified: lastModifiedFor("src/app/pinui-binui/eravut/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/yazam`,
      lastModified: lastModifiedFor("src/app/pinui-binui/yazam/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/sarvan`,
      lastModified: lastModifiedFor("src/app/pinui-binui/sarvan/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/pinui-binui/mechirat-dira`,
      lastModified: lastModifiedFor("src/app/pinui-binui/mechirat-dira/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Memad depth sub-pages - authority cluster under /memad/*
    {
      url: `${site.url}/memad/bayit-prati`,
      lastModified: lastModifiedFor("src/app/memad/bayit-prati/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/memad/dira-bekoma`,
      lastModified: lastModifiedFor("src/app/memad/dira-bekoma/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/memad/binyan-meshutaf`,
      lastModified: lastModifiedFor("src/app/memad/binyan-meshutaf/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/memad/binyan-yashan`,
      lastModified: lastModifiedFor("src/app/memad/binyan-yashan/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/memad/koma-elyona`,
      lastModified: lastModifiedFor("src/app/memad/koma-elyona/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/memad/tat-karkai`,
      lastModified: lastModifiedFor("src/app/memad/tat-karkai/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Tama 38 cluster
    {
      url: `${site.url}/tama-38`,
      lastModified: lastModifiedFor("src/app/tama-38/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/tama-38/pkia-2026`,
      lastModified: lastModifiedFor("src/app/tama-38/pkia-2026/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/tama-38/sug-1`,
      lastModified: lastModifiedFor("src/app/tama-38/sug-1/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/tama-38/sug-2`,
      lastModified: lastModifiedFor("src/app/tama-38/sug-2/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/chalufat-shaked`,
      lastModified: lastModifiedFor("src/app/chalufat-shaked/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Hashvaa cluster (urban-renewal comparison pages)
    {
      url: `${site.url}/hashvaa/pinui-vs-tama`,
      lastModified: lastModifiedFor("src/app/hashvaa/pinui-vs-tama/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/hashvaa/shaked-vs-tama`,
      lastModified: lastModifiedFor("src/app/hashvaa/shaked-vs-tama/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/hashvaa/migun-vs-pinui`,
      lastModified: lastModifiedFor("src/app/hashvaa/migun-vs-pinui/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Madrichim hub
    {
      url: `${site.url}/madrichim`,
      lastModified: lastModifiedFor("src/app/madrichim/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Hashvaa hub
    {
      url: `${site.url}/hashvaa`,
      lastModified: lastModifiedFor("src/app/hashvaa/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Madrichim cluster (urban-renewal deep articles)
    {
      url: `${site.url}/madrichim/sof-tama-38-ma-laasot`,
      lastModified: lastModifiedFor("src/app/madrichim/sof-tama-38-ma-laasot/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/10-shealot-le-yazam`,
      lastModified: lastModifiedFor("src/app/madrichim/10-shealot-le-yazam/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/eravut-bankait-vs-chok-mehor`,
      lastModified: lastModifiedFor("src/app/madrichim/eravut-bankait-vs-chok-mehor/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/matey-shipur-migun-adif`,
      lastModified: lastModifiedFor("src/app/madrichim/matey-shipur-migun-adif/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/zechut-baalut-vs-zechut-yorshim`,
      lastModified: lastModifiedFor("src/app/madrichim/zechut-baalut-vs-zechut-yorshim/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/hashvaa-yazamim-mobililim-2026`,
      lastModified: lastModifiedFor("src/app/madrichim/hashvaa-yazamim-mobililim-2026/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/luach-zmanim-pinui-binui-2026`,
      lastModified: lastModifiedFor("src/app/madrichim/luach-zmanim-pinui-binui-2026/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/sheelot-shalemot-leyazam-pinui-binui`,
      lastModified: lastModifiedFor("src/app/madrichim/sheelot-shalemot-leyazam-pinui-binui/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/heskem-pinui-binui-shel-2-amudim`,
      lastModified: lastModifiedFor("src/app/madrichim/heskem-pinui-binui-shel-2-amudim/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/tax-meturgam-pinui-binui-2026`,
      lastModified: lastModifiedFor("src/app/madrichim/tax-meturgam-pinui-binui-2026/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/dirot-temura-vs-dirot-mukdamot`,
      lastModified: lastModifiedFor("src/app/madrichim/dirot-temura-vs-dirot-mukdamot/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/madrichim/mechirat-dira-beyerusha`,
      lastModified: lastModifiedFor("src/app/madrichim/mechirat-dira-beyerusha/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Services
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: lastModifiedFor(`src/app/services/${s.slug}/page.tsx`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    // Areas hub
    {
      url: `${site.url}/areas`,
      lastModified: lastModifiedFor("src/app/areas/page.tsx", "src/content/areas.ts"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Guides (authority / pillar tier). /guides/mamad-cost is the flagship
    // money page (V6 plan, 2026-05-14) and gets the highest non-homepage
    // priority on the site.
    ...guides.map((g) => ({
      url: `${site.url}/guides/${g.slug}`,
      lastModified: lastModifiedFor(`src/app/guides/${g.slug}/page.tsx`),
      changeFrequency: "monthly" as const,
      priority: g.slug === "mamad-cost" ? 0.95 : 0.9,
    })),
    // Compare (authority tier)
    ...compares.map((c) => ({
      url: `${site.url}/compare/${c.slug}`,
      lastModified: lastModifiedFor(`src/app/compare/${c.slug}/page.tsx`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    // City standalone pages - exclude noindexed cities.
    ...areas
      .filter((a) => !a.noindexReason)
      .map((a) => ({
        url: `${site.url}/areas/${a.slug}`,
        lastModified: lastModifiedFor(
          "src/app/areas/[city]/page.tsx",
          "src/content/areas.ts"
        ),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    // City × service indexable pairs - only allowlisted, content-
    // differentiated pairs ship to the sitemap. The rest stay noindex
    // (see src/content/indexable-geo.ts).
    ...areas.flatMap((a) =>
      serviceMatrix
        .filter((s) => isGeoPairIndexable(a.slug, s.slug))
        .map((s) => ({
          url: `${site.url}/areas/${a.slug}/${s.slug}`,
          lastModified: lastModifiedFor(
            "src/app/areas/[city]/[service]/page.tsx",
            "src/content/areas.ts",
            "src/content/services.ts",
            "src/content/indexable-geo.ts"
          ),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
    ),
    // Projects index
    {
      url: `${site.url}/projects`,
      lastModified: lastModifiedFor(
        "src/app/projects/page.tsx",
        "src/content/projects.ts"
      ),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Per-project pages
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: lastModifiedFor(
        "src/app/projects/[slug]/page.tsx",
        "src/content/projects.ts"
      ),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // About hub (pillar tier - primary brand page)
    {
      url: `${site.url}/about`,
      lastModified: lastModifiedFor("src/app/about/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Press kit - public-facing journalist resource. Modest priority
    // (0.5) because it's not a money page, but it's discoverable + the
    // verified-stats section is a citation magnet.
    {
      url: `${site.url}/press`,
      lastModified: lastModifiedFor("src/app/press/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Legal pages omitted from the sitemap (privacy, terms, accessibility):
    // crawlers find them via the footer; including them inflates the URL
    // count and dilutes the crawl signal on money pages. 2026-05-14.
  ];

  // Sitemap-index threshold: split into multiple sub-sitemaps when the
  // count approaches Google's 50K-URL ceiling. Currently far below.
  return entries;
}
