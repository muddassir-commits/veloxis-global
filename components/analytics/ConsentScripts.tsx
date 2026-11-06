'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { Consent, CONSENT_EVENT, readConsent } from '../../lib/consent';

import { GA_ID, GTM_ID } from '../../lib/tag-ids';
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1484475786790290';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'wvclr1xtkt';

// Devices marked as the team's own (visit any page with ?internal=1, undo with ?internal=0; set in
// app/layout.tsx) load no tracker at all: no GTM, GA4, Clarity or Meta Pixel, so nothing is recorded.
function isInternalDevice() {
  try {
    return localStorage.getItem('vg-internal') === '1';
  } catch {
    return false;
  }
}

// Google Consent Mode v2, advanced mode:
// - GTM and GA4 load for every visitor (except internal devices). The consent-default script in
//   app/layout.tsx has already set ad_storage, analytics_storage, ad_user_data and ad_personalization
//   to 'denied', so until the visitor accepts, Google receives cookieless pings only (no cookies are
//   set) and models the missing visits. Accepting sends gtag('consent','update', granted) (lib/consent.ts).
// - Microsoft Clarity loads only with analytics consent; Meta Pixel only with marketing consent.
// Speed: the consent defaults, gtag('js'/'config') for GA4 and the GTM start event are all queued in
// dataLayer by the inline consent-default script in app/layout.tsx (before any tag). The two Google
// libraries below only read that queue, in order, so they load with lazyOnload (after the page has
// finished loading, when the browser is idle) instead of competing with the page for the main thread.
// Events sent before then (lib/analytics.ts) wait in dataLayer and go out when gtag.js arrives.
// Consent is only ever widened within a page view; withdrawing it takes effect on the next load
// (the Google consent update to 'denied' applies at once).
const noSubscribe = () => () => {};

export default function ConsentScripts() {
  // Server render: treat as internal (render nothing); the client reads the real flag.
  const internal = useSyncExternalStore(noSubscribe, isInternalDevice, () => true);
  const [consent, setConsent] = useState<Consent>({ analytics: false, marketing: false });

  useEffect(() => {
    if (isInternalDevice()) return;
    const merge = (c: Consent | null) =>
      setConsent((prev) => (c ? { analytics: prev.analytics || c.analytics, marketing: prev.marketing || c.marketing } : prev));
    merge(readConsent());
    const onChange = (e: Event) => merge((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (internal) return null;

  return (
    <>
      <Script id="gtag-lib" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="gtm-lib" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />

      {consent.analytics && (
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${CLARITY_ID}");
            `,
          }}
        />
      )}

      {consent.marketing && (
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              // Turn off Meta's automatic button-click / metadata events; we send our own events.
              fbq('set', 'autoConfig', false, '${PIXEL_ID}');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}
