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
import { constructMetadata, pageMeta } from '../lib/seo-config';
import { SchemaMarkup } from '../components/ui/SchemaMarkup';
import { getSiteGraph } from '../lib/schema';
import './globals.css';

export const metadata: Metadata = {
  ...constructMetadata(pageMeta.home),
  title: {
    default: pageMeta.home.title,
    template: '%s | Veloxis Global',
  },
  applicationName: 'Veloxis Global',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_TOKEN || "CVRVYJuDB29ung6LskjcSWvfZwi1q4L4b21cJxpbcX8"} />
        <link rel="preload" href="/fonts/PlusJakartaSans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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

        {/* GTM, GA4, Clarity and Meta Pixel load only after cookie consent */}
        <ConsentScripts />

        {/* Google Consent Mode defaults: everything denied until the visitor chooses */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
              gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
              try{var c=JSON.parse(localStorage.getItem('cookie-consent-v2')||'null');
              if(!c&&localStorage.getItem('cookie-consent')==='accepted'){c={analytics:true,marketing:true};}
              if(c){var m=c.marketing?'granted':'denied';gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:m,ad_user_data:m,ad_personalization:m});}}catch(e){}
            `,
          }}
        />
      </body>
    </html>
  );
}
