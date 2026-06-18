import { MetadataRoute } from 'next';

const BASE = 'https://veloxisglobal.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Core pages with specific priority order from ranking strategy
  const corePages = [
    { url: `${BASE}`, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${BASE}/digital-marketing-agency-kanpur`, priority: 0.97, changeFrequency: 'weekly' as const },
    { url: `${BASE}/digital-marketing-agency-lucknow`, priority: 0.96, changeFrequency: 'weekly' as const },
    { url: `${BASE}/digital-marketing-agency-noida`, priority: 0.95, changeFrequency: 'weekly' as const },
    { url: `${BASE}/digital-marketing-agency-delhi`, priority: 0.94, changeFrequency: 'weekly' as const },
    { url: `${BASE}/free-seo-audit`, priority: 0.90, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services/seo`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/google-ads-ppc`, priority: 0.84, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/social-media-marketing`, priority: 0.83, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/content-marketing`, priority: 0.80, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/web-design-development`, priority: 0.80, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/email-marketing`, priority: 0.78, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/paid-advertising-performance-marketing`, priority: 0.82, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/ai-automation-systems`, priority: 0.80, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/analytics-tracking-attribution`, priority: 0.80, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/audits-consulting-strategy`, priority: 0.80, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/b2b-lead-generation-sales`, priority: 0.82, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/brand-strategy-positioning`, priority: 0.80, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/ecommerce-catalog-services`, priority: 0.78, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/training-education`, priority: 0.75, changeFrequency: 'weekly' as const },
    { url: `${BASE}/services/industry-specific-marketing`, priority: 0.78, changeFrequency: 'weekly' as const },
    { url: `${BASE}/about`, priority: 0.70, changeFrequency: 'monthly' as const },
    { url: `${BASE}/case-studies`, priority: 0.75, changeFrequency: 'weekly' as const },
    { url: `${BASE}/pricing`, priority: 0.72, changeFrequency: 'monthly' as const },
    { url: `${BASE}/blog`, priority: 0.70, changeFrequency: 'daily' as const },
    { url: `${BASE}/contact`, priority: 0.65, changeFrequency: 'monthly' as const },
  ].map(page => ({
    ...page,
    lastModified: currentDate
  }));

  // 2. Services index (0.75, weekly)
  const servicesIndex = [
    {
      url: `${BASE}/services`,
      priority: 0.75,
      changeFrequency: 'weekly' as const,
      lastModified: currentDate
    }
  ];

  // 3. Industries & Dynamic Detail Pages (0.70, weekly)
  const industriesAndDynamic = [
    '/industries',
    '/industries/ecommerce',
    '/industries/education',
    '/industries/healthcare',
    '/industries/msme-small-business',
    '/industries/real-estate',
    '/industries/saas',
    '/industries/coaching-consulting',
    '/industries/restaurant-food',
    '/industries/fitness-wellness',
    '/industries/non-profit',
    '/industries/travel-tourism',
    '/industries/legal-professional',
    '/blog/seo-in-2026-whats-changed-for-indian-businesses',
    '/blog/google-ads-vs-meta-ads-roi-india',
    '/blog/how-to-optimize-google-business-profile-2026',
    '/blog/content-marketing-eeat-framework',
    '/blog/instagram-reels-funnel-local-brands',
    '/blog/meta-performance-max-best-practices',
    '/case-studies/delhi-real-estate-developer',
    '/case-studies/noida-edtech-lead-generation',
    '/case-studies/lucknow-healthcare-leads',
    '/case-studies/kanpur-fabrics-b2b',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.70,
  }));

  // 4. Testimonials (0.60, monthly)
  const testimonials = [
    {
      url: `${BASE}/testimonials`,
      priority: 0.60,
      changeFrequency: 'monthly' as const,
      lastModified: currentDate
    }
  ];

  // 5. Legal Pages (0.30, monthly)
  const legal = [
    '/privacy-policy',
    '/terms',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.30,
  }));

  return [
    ...corePages,
    ...servicesIndex,
    ...industriesAndDynamic,
    ...testimonials,
    ...legal,
  ];
}
