# Non-Indexed Pages Fix — 2026-05-14

## /memad/dira-bekoma
- HTTP status: **200** ✓
- Word count: **6,093** (excellent depth)
- Source file: `src/app/memad/dira-bekoma/page.tsx` exists (27.6 KB)
- Meta robots: `index, follow` ✓
- Already in sitemap: yes (priority 0.7, see `src/app/sitemap.ts:152`)
- **Decision:** No content fix needed. Page is healthy.
- **Action:** Submit to IndexNow after PR #4 merge + GSC "Request Indexing" via UI (Ofek manual).

## /projects
- HTTP status: **200** ✓
- Word count: **2,161** (sufficient for index page)
- Source file: `src/app/projects/page.tsx` exists (7.2 KB)
- Meta robots: `index, follow` ✓
- Already in sitemap: yes (priority 0.7, see `src/app/sitemap.ts:372`)
- **Decision:** No content fix needed. Page is healthy.
- **Action:** Same as above — IndexNow + GSC manual request.

## 3 Redirect URLs (handled in Step 3 — vercel.json)
These appeared as "non-indexed" in GSC because they were redirect entries:
- `http://hithadshut.co.il`
- `http://www.hithadshut.co.il`
- `https://www.hithadshut.co.il`

After Step 3 (vercel.json with `permanent: true` 308/301 redirect to apex), GSC will gradually drop these redirect entries. They are **not errors** — GSC was just reporting "page redirects".

## 3 Manifest/Icon Files
Ignored per V6 plan. These are PWA/icon assets, not pages. GSC flagging them as non-indexed is benign and expected — they aren't meant to be indexed.

## Summary
The "8 non-indexed" count in Day 3 GSC baseline breaks down as:
- 3 manifest/icon → benign, ignore
- 3 http/www redirects → fixed in PR #4 (vercel.json)
- 2 real pages (/memad/dira-bekoma, /projects) → 200, indexable, awaiting Google crawl. Will resolve naturally + Ofek can speed up with GSC "Request Indexing".

No content changes required. No new noindex flags. No new sitemap entries.
