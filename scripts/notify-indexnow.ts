/**
 * notify-indexnow.ts
 *
 * Post-deploy script — submits every URL in the live sitemap to IndexNow.
 * Run manually after a deploy when meaningful content changes:
 *
 *   npm run notify-indexnow
 *
 * Reads the sitemap from the live site (no build step required), extracts
 * <loc> URLs, and POSTs them in a single batch to api.indexnow.org.
 *
 * Exits 0 on HTTP 2xx, non-zero otherwise.
 */

import { submitUrlsToIndexNow } from "../src/lib/indexnow";
import { site } from "../src/lib/site";

const SITEMAP_URL = `${site.url}/sitemap.xml`;

async function main() {
  console.log(`[indexnow] fetching sitemap: ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL, {
    headers: { Accept: "application/xml,text/xml;q=0.9,*/*;q=0.8" },
  });
  if (!res.ok) {
    console.error(
      `[indexnow] sitemap fetch failed: ${res.status} ${res.statusText}`
    );
    process.exit(1);
  }
  const xml = await res.text();

  // Crude but reliable <loc>...</loc> extraction — the sitemap is ours
  // and is guaranteed to have the format produced by Next.js's MetadataRoute.
  const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) =>
    m[1].trim()
  );

  if (urls.length === 0) {
    console.error("[indexnow] no URLs found in sitemap");
    process.exit(1);
  }

  console.log(`[indexnow] submitting ${urls.length} URLs to IndexNow`);
  const result = await submitUrlsToIndexNow(urls);

  console.log(
    `[indexnow] response: ${result.status} ${result.statusText} (submitted ${result.submittedCount})`
  );
  if (result.body) {
    console.log(`[indexnow] body: ${result.body}`);
  }

  if (!result.ok) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[indexnow] unexpected error:", err);
  process.exit(1);
});
