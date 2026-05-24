import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WhatsAppWidget } from '../components/layout/WhatsAppWidget';
import { CookieBanner } from '../components/layout/CookieBanner';
import AnalyticsTracker from '../components/analytics/AnalyticsTracker';
import './globals.css';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Delhi, Noida, Lucknow & Kanpur | Veloxis Global',
  description: 'Veloxis Global — India\'s trusted digital marketing agency delivering SEO, Google Ads, Social Media & Content marketing for Delhi, Noida, Lucknow & Kanpur.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png?v=2' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_TOKEN || "CVRVYJuDB29ung6LskjcSWvfZwi1q4L4b21cJxpbcX8"} />
        <link rel="preload" href="/fonts/PlusJakartaSans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-slate-50 text-on-surface antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />

        {/* Client-side trackers (scroll depth, PageView, click interception) */}
        <AnalyticsTracker />

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-LC9XWNSGCF"} />

        {/* Meta Pixel Base Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
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
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || "1484475786790290"}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Microsoft Clarity Code */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID || "wvclr1xtkt"}");
            `,
          }}
        />
      </body>
    </html>
  );
}
