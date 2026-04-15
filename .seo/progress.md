# SEO Buildout Progress

## Stage B + B2 — Geo landing pages (completed)

### Created
- `src/content/areas.ts` — 28 Israeli cities with district, optional neighborhoods (real only for TLV/JER/HFA), and local notes.
- `src/content/services.ts` — 4-service matrix (building-mamad, room-reinforcement, migunit, prefab-mamad).
- `src/app/areas/page.tsx` — areas hub with 4-col responsive grid.
- `src/app/areas/[city]/page.tsx` — dynamic, statically generated, 28 city pages with LocalBusiness + Service + BreadcrumbList + FAQPage schema.
- `src/app/areas/[city]/[service]/page.tsx` — dynamic, statically generated, 112 geo×service pages with 5 rotating intro templates (hash-based).
- Sitemap updated: +1 (/areas) +28 (city) +112 (city/service) = 141 new URLs.
- Footer updated: new "אזורי שירות" column with 10 top cities + "כל האזורים" link.

### URL count delta
+141 URLs (1 index + 28 cities + 112 geo×service)

### Next stage
- Stage C: neighborhood-level pages for top 3 metros (if warranted) + guides expansion.
- Stage D: internal link audit + sitemap lastmod refresh on next content edit.
