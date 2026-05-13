"use server";

import { submitUrlsToIndexNow, type IndexNowResult } from "@/lib/indexnow";
import { site } from "@/lib/site";

/**
 * Server action: submit one or more URLs to IndexNow.
 *
 * Accepts either absolute URLs (https://hithadshut.co.il/...) or paths
 * (/path/...). Paths are absolutized against site.url. Cross-origin URLs
 * are rejected - IndexNow keys are scoped to a single host.
 *
 * Returns the raw HTTP result for logging. On failure, the caller is
 * responsible for surfacing or retrying - this action does not throw.
 */
export async function indexnowSubmitAction(
  inputs: string[]
): Promise<IndexNowResult & { rejected: string[] }> {
  const rejected: string[] = [];
  const accepted: string[] = [];

  for (const raw of inputs) {
    const trimmed = raw.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      const u = new URL(trimmed);
      if (u.host !== new URL(site.url).host) {
        rejected.push(trimmed);
        continue;
      }
      accepted.push(u.toString());
    } else {
      const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
      accepted.push(`${site.url}${path}`);
    }
  }

  const result = await submitUrlsToIndexNow(accepted);
  return { ...result, rejected };
}
