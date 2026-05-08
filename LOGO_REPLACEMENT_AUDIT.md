# Logo Replacement Audit — 2026-05-08

## Asset files

Logo files were uploaded to project root, **not** to `public/`. Moved them
to `public/` (Next.js requirement):

| File                          | Now at                           |
|-------------------------------|----------------------------------|
| `logo-header.png`             | `public/logo-header.png`         |
| `logo-header@2x.png`          | `public/logo-header@2x.png`      |
| `logo-transparent-full.png`   | `public/logo-transparent-full.png` |
| `logo-white-bg.png`           | `public/logo-white-bg.png`       |
| `logo-white-bg.jpg`           | `public/logo-white-bg.jpg`       |
| `og-image-with-logo.jpg`      | `public/og-image-with-logo.jpg`  |
| `icon-{16,32,180,192,512}.png`| `public/icon-*.png`              |

## Brand text occurrences

The literal `התחדשותבינוי` (no space) does NOT appear anywhere in `src/`.
The actual rendered text is "התחדשות" + "בינוי ויזמות" stacked, produced by
the SVG-based **`src/components/Logo.tsx`** component.

## Logo touch points

| File                              | Current rendering                        | Action |
|-----------------------------------|------------------------------------------|--------|
| `src/components/Logo.tsx`         | SVG shield + text                        | Rewrite to `<Image>` |
| `src/components/Header.tsx` (105) | `<Logo size="md" />` (default dark)      | No change — Logo cascades |
| `src/components/Footer.tsx` (40)  | `<Logo variant="light" size="md" />`     | No change — Logo cascades |
| `src/app/icon.tsx`                | Dynamic 32×32 (next/og ImageResponse)    | Delete + replace |
| `src/app/apple-icon.tsx`          | Dynamic 180×180 (next/og ImageResponse)  | Delete + replace |
| `src/app/icon.svg`                | Static SVG mark                          | Delete (replaced by PNG) |
| `src/app/layout.tsx`              | metadata.openGraph.images → `site.ogImage` | Add explicit metadata.icons block |
| `src/lib/schema.ts` (line 34)     | `Organization.logo.url = /icon.svg`      | Switch to `/logo-transparent-full.png` |
| `src/lib/site.ts` (line 23)       | `ogImage: "/og-image.jpg"`               | Keep — but overwrite the file |
| `public/manifest.webmanifest`     | Static manifest pointing at `/icon.svg`  | Replace with `src/app/manifest.ts` (Next 15 convention) |
| `public/og-image.jpg`             | Old OG image (no logo)                   | Overwrite with `og-image-with-logo.jpg` |

## Plan

1. Rewrite `src/components/Logo.tsx` to use `<Image src="/logo-header.png">`.
2. Delete `src/app/icon.tsx`, `src/app/apple-icon.tsx`, `src/app/icon.svg`.
3. Add explicit `metadata.icons` block in `src/app/layout.tsx`.
4. Replace `public/manifest.webmanifest` with `src/app/manifest.ts`.
5. Overwrite `public/og-image.jpg` with `og-image-with-logo.jpg`.
   Same for `public/twitter-image.jpg`.
6. Update `Organization.logo` URL in `src/lib/schema.ts`.
7. Build → commit → push → verify production.
