/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Next 16 only serves listed qualities; the site uses 75 (default), 80 and 85.
    qualities: [75, 80, 85],
    // All images are local files in /public. No remote hosts are allowed, so the
    // image optimizer cannot be used to fetch or resize third-party images.
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Long cache for fonts and images (Next.js and Vercel already cache /_next/static).
  // Vercel sets these automatically but explicit config ensures consistency
  // across any deployment target.
  async headers() {
    return [
      {
        // Security headers for every response (HSTS is added by Vercel).
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Every URL removed in the real estate repositioning 301s to its closest live match.
  async redirects() {
    const map = {
      // Pricing is no longer published; the free audit page replaces it
      '/pricing': '/free-audit',
      // Industries — only real estate survives
      '/industries': '/industries/real-estate',
      '/industries/saas': '/',
      '/industries/healthcare': '/',
      '/industries/coaching-consulting': '/',
      '/industries/education': '/',
      '/industries/restaurant-food': '/',
      '/industries/ecommerce': '/',
      '/industries/fitness-wellness': '/',
      '/industries/msme-small-business': '/',
      '/industries/non-profit': '/',
      '/industries/travel-tourism': '/',
      '/industries/legal-professional': '/',

      // Legacy services → the three real estate services
      '/services/seo': '/services',
      '/services/content-marketing': '/services/high-converting-landing-pages',
      '/services/web-design-development': '/services/high-converting-landing-pages',
      '/services/social-media-marketing': '/services/paid-ads',
      '/services/paid-advertising-performance-marketing': '/services/paid-ads',
      '/services/google-ads-ppc': '/services/paid-ads',
      '/services/b2b-lead-generation-sales': '/services/paid-ads',
      '/services/analytics-tracking-attribution': '/services/paid-ads',
      '/services/email-marketing': '/services/ai-automation',
      '/services/ai-automation-systems': '/services/ai-automation',
      '/services/audits-consulting-strategy': '/contact',
      '/services/brand-strategy-positioning': '/services',
      '/services/ecommerce-catalog-services': '/services',
      '/services/industry-specific-marketing': '/services',
      '/services/training-education': '/about',

      // City pages and lead magnet
      '/digital-marketing-agency-delhi': '/industries/real-estate',
      '/digital-marketing-agency-noida': '/industries/real-estate',
      '/digital-marketing-agency-lucknow': '/industries/real-estate',
      '/digital-marketing-agency-kanpur': '/industries/real-estate',
      '/free-seo-audit': '/contact',
      '/author/muddassir-ali': '/about',

      // Case studies and testimonials were replaced by example playbooks (Sept 2026)
      '/case-studies': '/playbooks',
      '/case-studies/delhi-real-estate-developer': '/playbooks/new-launch-meta-google-ads-plan',
      '/case-studies/noida-ecommerce-skincare': '/playbooks',
      '/case-studies/noida-edtech-lead-generation': '/playbooks',
      '/case-studies/lucknow-healthcare-leads': '/playbooks',
      '/case-studies/kanpur-fabrics-b2b': '/playbooks',
      '/testimonials': '/playbooks',

      // Blog
      '/blog/google-ads-vs-meta-ads-roi-india': '/blog/google-ads-vs-meta-ads-real-estate-india',
      '/blog/seo-in-2026-whats-changed-for-indian-businesses': '/blog',
      '/blog/how-to-optimize-google-business-profile-2026': '/blog',
      '/blog/content-marketing-eeat-framework': '/blog',
      '/blog/instagram-reels-funnel-local-brands': '/blog',
      '/blog/meta-performance-max-best-practices': '/blog',
    };
    return Object.entries(map).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
