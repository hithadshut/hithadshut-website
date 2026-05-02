import { NextResponse } from "next/server";
import { INDEXNOW_KEY } from "@/lib/indexnow";

type Params = Promise<{ key: string }>;

/**
 * IndexNow key verification endpoint.
 *
 * The IndexNow protocol requires a public file at /<KEY>.txt whose content
 * is the key itself. This route handler resolves that requirement
 * dynamically: it returns 200 + plain-text key only when the requested
 * path is exactly `${INDEXNOW_KEY}.txt`. Every other root-level path that
 * doesn't match a static route falls through here and 404s.
 *
 * The key is sourced from process.env.INDEXNOW_KEY (set in Vercel +
 * .env.local) with a hardcoded build-time fallback in src/lib/indexnow.ts.
 * Both the dynamic route AND the static file at public/<KEY>.txt resolve
 * to the same key, so verification keeps working regardless of which
 * mechanism the crawler hits first.
 *
 * NOTE: This catch-all root segment intentionally exists only as a
 * `route.ts` (not a `page.tsx`). Static routes elsewhere in app/ take
 * precedence; this only sees segments that don't match anything else.
 */
export async function GET(_request: Request, { params }: { params: Params }) {
  const { key } = await params;
  const expected = `${INDEXNOW_KEY}.txt`;
  if (key !== expected) {
    return new NextResponse(null, { status: 404 });
  }
  return new NextResponse(INDEXNOW_KEY, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
