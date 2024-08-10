import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams.toString();

  if (host === "itsbirthday.com" || host === "www.itsbirthday.com") {
    return NextResponse.rewrite(
      `https://invitation-template-eight.vercel.app/birthday${pathname}?${searchParams}`,
    );
  }

  if (host === "itsweddings.com" || host === "www.itsweddings.com") {
    return NextResponse.rewrite(
      `https://invitation-template-eight.vercel.app/wedding${pathname}?${searchParams}`,
    );
  }

  if (
    host === "kreasi-invitation.com" ||
    host === "www.kreasi-invitation.com"
  ) {
    // TODO: handle url for general invitation type
    return NextResponse.rewrite(
      `https://invitation-template-eight.vercel.app/khitanan${pathname}?${searchParams}`,
    );
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|birthday/icon.ico|assets).*)",
  ],
};
