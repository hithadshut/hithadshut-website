import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "hithadshut.co.il";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "https";

  if (host === CANONICAL_HOST && proto === "https") {
    return NextResponse.next();
  }

  url.host = CANONICAL_HOST;
  url.protocol = "https:";
  url.port = "";

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
