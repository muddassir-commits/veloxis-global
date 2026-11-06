import type { Metadata } from 'next';
import Script from 'next/script';
import ConsentScripts from '../components/analytics/ConsentScripts';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WhatsAppWidget } from '../components/layout/WhatsAppWidget';
import { CookieBanner } from '../components/layout/CookieBanner';
import { StickyMobileBar } from '../components/ui/StickyMobileBar';
import { MotionEffects } from '../components/ui/MotionEffects';
import AnalyticsTracker from '../components/analytics/AnalyticsTracker';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../lib/seo-config';
import { SchemaMarkup } from '../components/ui/SchemaMarkup';
import { getSiteGraph } from '../lib/schema';
import { GA_ID, GTM_ID } from '../lib/tag-ids';
import { preload } from 'react-dom';
import './globals.css';

// Site-wide defaults only. Every page sets its own title, description and canonical; anything that
// doesn't (the 404 page) must not inherit the homepage canonical, so none is set here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Veloxis Global',
    template: '%s | Veloxis Global',
  },
  applicationName: 'Veloxis Global',
  openGraph: { siteName: 'Veloxis Global', locale: 'en_IN', type: 'website', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // One preload for the site font. A <link rel="preload"> written in <head> came out twice (React
  // hoists it and Next also kept the original tag), so it is requested through React's preload() API.
  preload('/fonts/PlusJakartaSans.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_TOKEN || "CVRVYJuDB29ung6LskjcSWvfZwi1q4L4b21cJxpbcX8"} />
        <SchemaMarkup schema={getSiteGraph()} />
      </head>
      <body className="font-sans bg-slate-50 text-on-surface antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
        <StickyMobileBar />

        {/* Scroll-reveal and spotlight card effects (styles in globals.css) */}
        <MotionEffects />

        {/* Client-side trackers (scroll depth, PageView, click interception) */}
        <AnalyticsTracker />

        {/* GTM + GA4 load for everyone in Consent Mode v2 (advanced, all denied until Accept);
            Clarity and Meta Pixel load only after cookie consent */}
        <ConsentScripts />

        {/* Google Consent Mode v2 defaults: everything denied until the visitor accepts.
            With storage denied, GA4 sends cookieless pings only; ad data is redacted.
            Then GA4 config and the GTM start event are queued (after the consent commands, so every
            tag sees the consent state first). The libraries that read this queue load later, from
            components/analytics/ConsentScripts.tsx; internal devices never load them, so for them
            this queue is never sent anywhere. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
              gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
              gtag('set','ads_data_redaction',true);
              try{var c=JSON.parse(localStorage.getItem('cookie-consent-v2')||'null');
              if(!c&&localStorage.getItem('cookie-consent')==='accepted'){c={analytics:true,marketing:true};}
              if(c){var m=c.marketing?'granted':'denied';gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:m,ad_user_data:m,ad_personalization:m});}}catch(e){}
              try{var q=new URLSearchParams(location.search).get('internal');
              if(q==='1')localStorage.setItem('vg-internal','1');else if(q==='0')localStorage.removeItem('vg-internal');
              if(localStorage.getItem('vg-internal')==='1')gtag('set',{traffic_type:'internal'});}catch(e){}
              gtag('js',new Date());gtag('config','${GA_ID}');
              dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});/* ${GTM_ID} */
            `,
          }}
        />
      </body>
    </html>
  );
}
