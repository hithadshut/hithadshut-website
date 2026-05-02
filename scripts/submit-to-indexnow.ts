/**
 * submit-to-indexnow.ts
 *
 * CLI to submit URLs to IndexNow (Bing + Yandex). Two modes:
 *
 *   npm run indexnow -- <url> [<url> ...]      # specific URLs (paths or absolute)
 *   npm run indexnow -- --all                  # every URL from the live sitemap
 *
 * URL paths (e.g. /services/building-mamad) are absolutized against
 * site.url. Cross-host absolute URLs are rejected (IndexNow keys are
 * scoped to a single host).
 *
 * Exit codes:
 *   0  IndexNow accepted the batch (HTTP 2xx)
 *   1  IndexNow rejected, network failure, or no URLs to submit
 *
 * Run after meaningful content updates land in production. Auto-trigger
 * on deploy is out of scope (see docs/seo-operations.md).
 */

import { submitUrlsToIndexNow, INDEXNOW_KEY_LOCATION } from "../src/lib/indexnow";
import { site } from "../src/lib/site";

const SITEMAP_URL = `${site.url}/sitemap.xml`;

function parseArgs(argv: string[]): { all: boolean; urls: string[] } {
  const args = argv.slice(2);
  const all = args.includes("--all");
  const urls = args.filter((a) => a !== "--all" && !a.startsWith("--"));
  return { all, urls };
}

function normalizeOne(input: string): string | { error: string } {
  const trimmed = input.trim();
  if (!trimmed) return { error: "empty url" };
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    let u: URL;
    try {
      u = new URL(trimmed);
    } catch {
      return { error: `invalid url: ${trimmed}` };
    }
    const expectedHost = new URL(site.url).host;
    if (u.host !== expectedHost) {
      return { error: `cross-host rejected (${u.host} != ${expectedHost}): ${trimmed}` };
    }
    return u.toString();
  }
  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${site.url}${path}`;
}

async function fetchSitemapUrls(): Promise<string[]> {
  console.log(`[indexnow] fetching sitemap: ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL, {
    headers: { Accept: "application/xml,text/xml;q=0.9,*/*;q=0.8" },
  });
  if (!res.ok) {
    throw new Error(`sitemap fetch failed: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
}

async function main() {
  const { all, urls: rawArgs } = parseArgs(process.argv);

  let urlList: string[];
  if (all) {
    urlList = await fetchSitemapUrls();
  } else if (rawArgs.length > 0) {
    const normalized: string[] = [];
    for (const r of rawArgs) {
      const out = normalizeOne(r);
      if (typeof out === "string") {
        normalized.push(out);
      } else {
        console.error(`[indexnow] ${out.error}`);
        process.exit(1);
      }
    }
    urlList = normalized;
  } else {
    console.error(
      "usage: npm run indexnow -- <url> [<url> ...]\n" +
        "       npm run indexnow -- --all"
    );
    process.exit(1);
  }

  if (urlList.length === 0) {
    console.error("[indexnow] no URLs to submit");
    process.exit(1);
  }

  console.log(`[indexnow] keyLocation: ${INDEXNOW_KEY_LOCATION}`);
  console.log(`[indexnow] submitting ${urlList.length} URLs`);
  for (const u of urlList) console.log(`           ${u}`);

  const result = await submitUrlsToIndexNow(urlList);
  console.log(
    `[indexnow] response: ${result.status} ${result.statusText} (submitted ${result.submittedCount})`
  );
  if (result.body) console.log(`[indexnow] body: ${result.body}`);

  if (!result.ok) process.exit(1);
}

main().catch((err) => {
  console.error("[indexnow] unexpected error:", err);
  process.exit(1);
});
