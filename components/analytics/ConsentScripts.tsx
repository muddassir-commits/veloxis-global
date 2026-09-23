'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Consent, CONSENT_EVENT, readConsent } from '../../lib/consent';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-LC9XWNSGCF';
const GTM_ID = 'GTM-5LS7XH76';
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1484475786790290';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'wvclr1xtkt';

// Loads each tracker only after the visitor has allowed its category.
// Consent is only ever widened within a page view; withdrawing it takes effect on the next load.
export default function ConsentScripts() {
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const merge = (c: Consent | null) =>
      setConsent((prev) => (c ? { analytics: !!prev?.analytics || c.analytics, marketing: !!prev?.marketing || c.marketing } : prev));
    merge(readConsent());
    const onChange = (e: Event) => merge((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!consent || (!consent.analytics && !consent.marketing)) return null;

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />

      {consent.analytics && (
        <>
          <GoogleAnalytics gaId={GA_ID} />
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
        </>
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
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}
