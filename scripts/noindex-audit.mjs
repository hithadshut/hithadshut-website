#!/usr/bin/env node
/**
 * Permanent gate: fails the build if any URL listed in sitemap.xml is
 * shipped with a noindex signal in its prerendered output.
 *
 * Added 2026-07-17 after Stage 0 of that cycle diagnosed how a prior
 * noindex flag (deliberate, on /areas/* thin-content pages, see
 * src/content/areas.ts and src/content/indexable-geo.ts) could in
 * principle drift out of sync with the sitemap with nothing catching it:
 * sitemap.ts and generateMetadata() both read from the same source
 * fields, but nothing previously verified the *rendered* output agreed
 * with the *listed* output. This script closes that gap by checking the
 * real prerendered HTML, not the source code.
 *
 * Design note: an earlier version of this script spun up `next start`
 * and fetched over HTTP. That fought src/middleware.ts, which 301s any
 * request whose Host header isn't the canonical production domain -
 * correct behavior in production, but it meant a local server always
 * got redirected before rendering, regardless of Host header overrides
 * (confirmed: curl -H "Host: hithadshut.co.il" still got 301'd, because
 * the redirect is also true for the default matcher on any host mismatch
 * at the network layer in this environment). Reading `next build`'s own
 * prerendered output directly avoids the whole problem and is a more
 * direct check anyway: it inspects exactly the files that ship.
 *
 * Requires a completed `npm run build` (reads .next/server/app/**).
 * Usage: node scripts/noindex-audit.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");
const SITEMAP_BODY = join(APP_DIR, "sitemap.xml.body");

// Informational-only sample of routes to report on regardless of sitemap
// membership (a page absent from the sitemap may be intentionally
// noindex, e.g. /admin/seo-dashboard - that's fine, just reported).
const SAMPLE_ROUTES = [
  "/areas/tel-aviv",
  "/areas/jerusalem",
  "/areas/haifa",
  "/areas/kfar-saba/room-reinforcement",
  "/areas/ramat-gan/building-mamad",
  "/pinui-binui/yorshim",
  "/pinui-binui/yorshim-mechira",
  "/guides/home-front-command-approval",
  "/services/room-reinforcement",
  "/admin/seo-dashboard", // known intentional noindex - reported, not a failure
];

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

function pathToHtmlFile(pathname) {
  const clean = pathname.replace(/\/+$/, "");
  const rel = clean === "" ? "index" : clean.replace(/^\//, "");
  return join(APP_DIR, `${rel}.html`);
}

function checkPath(pathname) {
  const file = pathToHtmlFile(pathname);
  if (!existsSync(file)) {
    return { pathname, exists: false, noindex: null };
  }
  const html = readFileSync(file, "utf8");
  const metaMatches = [...html.matchAll(/<meta[^>]+name=["']robots["'][^>]*>/gi)];
  const noindex = metaMatches.some((m) => /noindex/i.test(m[0]));
  return { pathname, exists: true, noindex };
}

function main() {
  if (!existsSync(join(process.cwd(), ".next", "BUILD_ID"))) {
    console.error("noindex-audit: .next/BUILD_ID not found. Run `npm run build` first.");
    process.exit(1);
  }
  if (!existsSync(SITEMAP_BODY)) {
    console.error(`noindex-audit: FAIL - ${SITEMAP_BODY} not found. Sitemap did not build.`);
    process.exit(1);
  }

  const xml = readFileSync(SITEMAP_BODY, "utf8");
  const locs = extractLocs(xml);
  console.log(`noindex-audit: ${locs.length} URLs in sitemap.`);

  console.log("noindex-audit: checking every sitemap URL for noindex (hard gate)...");
  let failed = false;
  for (const loc of locs) {
    const pathname = loc.replace(/^https?:\/\/[^/]+/, "") || "/";
    const result = checkPath(pathname);
    if (!result.exists) {
      failed = true;
      console.error(`  FAIL: ${pathname} is in sitemap.xml but no prerendered output was found.`);
    } else if (result.noindex) {
      failed = true;
      console.error(`  FAIL: ${pathname} is in sitemap.xml but its prerendered HTML carries noindex.`);
    }
  }

  console.log("\nnoindex-audit: sampling known route patterns (informational only)...");
  for (const pathname of SAMPLE_ROUTES) {
    const result = checkPath(pathname);
    const inSitemap = locs.some((l) => l.replace(/^https?:\/\/[^/]+/, "") === pathname);
    if (!result.exists) {
      console.log(`  MISSING ${pathname}${inSitemap ? " [in sitemap]" : " [not in sitemap]"}`);
      continue;
    }
    console.log(
      `  ${result.noindex ? "noindex" : "index"} ${pathname}${inSitemap ? " [in sitemap]" : " [not in sitemap]"}`
    );
    if (inSitemap && result.noindex) {
      failed = true;
      console.error(`  FAIL: ${pathname} sampled as noindex despite being in sitemap.`);
    }
  }

  if (failed) {
    console.error("\nnoindex-audit: FAILED. One or more sitemap-listed pages are not indexable.");
    process.exit(1);
  }
  console.log(`\nnoindex-audit: PASSED. All ${locs.length} sitemap URLs are index,follow.`);
}

main();
