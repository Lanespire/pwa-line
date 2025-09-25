import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const LP_SUBDOMAIN = process.env.LP_SUBDOMAIN ?? "lp";

function isLpSubdomain(hostname: string) {
  const [hostWithoutPort] = hostname.split(":");
  if (!hostWithoutPort) {
    return false;
  }

  if (hostWithoutPort === `${LP_SUBDOMAIN}.localhost`) {
    return true;
  }

  if (hostWithoutPort.endsWith(`.${LP_SUBDOMAIN}.localhost`)) {
    return true;
  }

  const segments = hostWithoutPort.split(".");
  if (segments.length <= 2) {
    return segments[0] === LP_SUBDOMAIN;
  }

  return segments[0] === LP_SUBDOMAIN;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (!host) {
    return NextResponse.next();
  }

  if (isLpSubdomain(host)) {
    const url = request.nextUrl.clone();
    url.pathname = "/lp";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|_static/|.*\\..*).*)"],
};
