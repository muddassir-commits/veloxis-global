import { NextResponse, type NextRequest } from 'next/server';
import { REGION_COOKIE, regionForCountry } from './lib/region';

// Cookie-consent region. Vercel sets `x-vercel-ip-country` on every request (it cannot be set by the
// visitor). We copy the result into a short-lived first-party cookie that the browser code reads
// (lib/consent.ts and the consent-default script in app/layout.tsx), so pages stay static and cached:
// nothing in a page reads request headers. The Set-Cookie arrives with the HTML, before any script runs,
// so visitors outside the EEA/UK/Switzerland never see a banner flash.
// No header (local dev, unknown country) = 'eea', i.e. the opt-in banner.
const MAX_AGE = 60 * 60 * 24; // 1 day: travellers get the right rule again soon.

export function proxy(request: NextRequest) {
  const region = regionForCountry(request.headers.get('x-vercel-ip-country'));
  const response = NextResponse.next();
  if (request.cookies.get(REGION_COOKIE)?.value !== region) {
    response.cookies.set(REGION_COOKIE, region, {
      path: '/',
      maxAge: MAX_AGE,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: false, // read by the browser consent code
    });
  }
  return response;
}

export const config = {
  // Pages only: no API routes, Next assets, images or any path with a dot (files such as
  // robots.txt, sitemap.xml, llms.txt, favicon.ico). Page slugs never contain a dot.
  matcher: ['/((?!api/|_next/static|_next/image|.*\\..*).*)'],
};
