import { NextResponse } from "next/server";
import { renderLlmsManifest } from "@/content/llms-txt-manifest";

/**
 * /llms.txt - authority manifest for AI search engines.
 *
 * Spec: https://llmstxt.org. Renders the typed manifest from
 * src/content/llms-txt-manifest.ts as plain text. Static - Next.js
 * caches the response across requests; the file regenerates on each
 * deploy (when the manifest source file is touched).
 *
 * To add a page: edit src/content/llms-txt-manifest.ts and ship.
 */
export const dynamic = "force-static";

export async function GET() {
  const body = renderLlmsManifest();
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
