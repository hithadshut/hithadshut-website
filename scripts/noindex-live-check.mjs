#!/usr/bin/env node
/**
 * Post-deploy live check: fetches sampled URLs from real production
 * (https://hithadshut.co.il) and asserts they are actually indexable as
 * served - not as built.
 *
 * Added 2026-07-19, as a companion to scripts/noindex-audit.mjs (the
 * predeploy static gate added 2026-07-17). The static gate reads
 * `next build`'s prerendered HTML files directly and cannot see:
 *
 *   1. Response-header-level signals. A hosting/edge layer can in
 *      principle add an `X-Robots-Tag` header independently of the
 *      HTML `<meta name="robots">` tag baked into the file at build
 *      time - the static gate has no way to observe that, since it
 *      never issues an HTTP request.
 *   2. What actually ships. The static gate checks build output;
 *      it can't catch a misconfigured redirect, a stale CDN cache
 *      serving last week's noindexed version, or any other gap between
 *      "what `next build` produced" and "what a real client receives."
 *
 * This script closes that gap by hitting the real, canonical production
 * host directly. Unlike the abandoned first version of noindex-audit.mjs,
 * this deliberately does NOT try to test the local build via `next
 * start` - src/middleware.ts 301-redirects any non-canonical Host,
 * confirmed unavoidable even with an explicit Host header override
 * (see noindex-audit.mjs's header comment for the full story). Testing
 * against the real canonical host sidesteps that entirely.
 *
 * Cannot run pre-deploy (production doesn't have the new code yet) -
 * always a post-deploy verification step, every cycle.
 *
 * Usage: node scripts/noindex-live-check.mjs [url1 url2 ...]
 *   No args: checks a built-in sample of 10 URLs.
 *   With args: checks exactly those URLs instead (paths or absolute).
 *
 * Windows/Git-Bash note: MSYS auto-converts leading-slash args (e.g.
 * "/areas/tel-aviv") into Windows paths before Node ever sees them,
 * silently corrupting the URL. Prefix the command with
 * MSYS_NO_PATHCONV=1 when passing path-style args from Git Bash, or
 * pass absolute https:// URLs instead.
 */

const SITE = "https://hithadshut.co.il";

const DEFAULT_SAMPLE = [
  "/",
  "/areas/tel-aviv",
  "/areas/jerusalem",
  "/areas/haifa",
  "/areas/kfar-saba/room-reinforcement",
  "/areas/ramat-gan/building-mamad",
  "/pinui-binui/yorshim-mechira",
  "/guides/home-front-command-approval",
  "/services/room-reinforcement",
  "/chalufat-shaked",
];

function toUrl(input) {
  return input.startsWith("http") ? input : `${SITE}${input}`;
}

function hasNoindexMeta(html) {
  const matches = [...html.matchAll(/<meta[^>]+name=["']robots["'][^>]*>/gi)];
  return matches.some((m) => /noindex/i.test(m[0]));
}

async function checkUrl(input) {
  const url = toUrl(input);
  const res = await fetch(url, { redirect: "manual" });
  const xRobots = res.headers.get("x-robots-tag") || "";
  const body = res.status >= 200 && res.status < 400 ? await res.text() : "";
  const metaNoindex = hasNoindexMeta(body);
  const headerNoindex = /noindex/i.test(xRobots);
  return {
    url,
    status: res.status,
    metaNoindex,
    headerNoindex,
    ok: res.status === 200 && !metaNoindex && !headerNoindex,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const targets = args.length > 0 ? args : DEFAULT_SAMPLE;

  console.log(`noindex-live-check: checking ${targets.length} URL(s) against ${SITE}...\n`);

  let failed = false;
  for (const target of targets) {
    let result;
    try {
      result = await checkUrl(target);
    } catch (err) {
      failed = true;
      console.error(`  FAIL: ${toUrl(target)} - fetch error: ${err.message}`);
      continue;
    }
    if (result.ok) {
      console.log(`  OK    ${result.status} ${result.url}`);
    } else {
      failed = true;
      console.error(
        `  FAIL  ${result.status} ${result.url}` +
          `${result.metaNoindex ? " [meta noindex]" : ""}` +
          `${result.headerNoindex ? " [X-Robots-Tag noindex]" : ""}`
      );
    }
  }

  if (failed) {
    console.error("\nnoindex-live-check: FAILED.");
    process.exit(1);
  }
  console.log("\nnoindex-live-check: PASSED. All sampled URLs are live, 200, index,follow.");
}

main().catch((err) => {
  console.error("noindex-live-check: unexpected error:", err);
  process.exit(1);
});
