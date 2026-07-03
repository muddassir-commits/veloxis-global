import { MetadataRoute } from 'next';

const BASE = 'https://veloxisglobal.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Define realistic static lastModified dates based on content history
  const dates = {
    homepage: new Date('2026-07-03T12:00:00Z'),
    delhi: new Date('2026-07-03T11:00:00Z'),
    noida: new Date('2026-07-03T11:00:00Z'),
    lucknow: new Date('2026-07-03T11:00:00Z'),
    kanpur: new Date('2026-07-03T11:00:00Z'),
    seo: new Date('2026-07-03T10:00:00Z'),
    ppc: new Date('2026-07-03T10:00:00Z'),
    smm: new Date('2026-07-03T10:00:00Z'),
    content: new Date('2026-07-03T10:00:00Z'),
    webdev: new Date('2026-07-03T10:00:00Z'),
    email: new Date('2026-07-03T10:00:00Z'),
    perf: new Date('2026-07-03T10:00:00Z'),
    ai: new Date('2026-07-03T10:00:00Z'),
    analytics: new Date('2026-07-03T10:00:00Z'),
    audits: new Date('2026-07-03T10:00:00Z'),
    leadgen: new Date('2026-07-03T10:00:00Z'),
    brand: new Date('2026-07-03T10:00:00Z'),
    ecommerce: new Date('2026-07-03T10:00:00Z'),
    training: new Date('2026-07-03T10:00:00Z'),
    industry: new Date('2026-07-03T10:00:00Z'),
    about: new Date('2026-07-03T09:00:00Z'),
    casestudiesIndex: new Date('2026-07-02T10:00:00Z'),
    pricing: new Date('2026-07-02T08:00:00Z'),
    blogIndex: new Date('2026-07-03T12:00:00Z'),
    contact: new Date('2026-07-02T08:00:00Z'),
    servicesIndex: new Date('2026-07-02T09:00:00Z'),
    testimonials: new Date('2026-07-03T09:30:00Z'),
    legal: new Date('2026-07-02T08:00:00Z'),
    blogPost1: new Date('2026-05-20T08:00:00Z'),
    blogPost2: new Date('2026-05-15T08:00:00Z'),
    blogPost3: new Date('2026-05-10T08:00:00Z'),
    blogPost4: new Date('2026-05-05T08:00:00Z'),
    blogPost5: new Date('2026-04-28T08:00:00Z'),
    blogPost6: new Date('2026-04-20T08:00:00Z'),
    caseStudyDelhi: new Date('2026-06-15T08:00:00Z'),
    caseStudyNoida: new Date('2026-06-16T08:00:00Z'),
    caseStudyLucknow: new Date('2026-06-17T08:00:00Z'),
    caseStudyKanpur: new Date('2026-06-18T08:00:00Z'),
    author: new Date('2026-07-03T10:00:00Z')
  };

  // 1. Core pages with specific priority order from ranking strategy
  const corePages = [
    { url: `${BASE}`, priority: 1.0, changeFrequency: 'daily' as const, lastModified: dates.homepage },
    { url: `${BASE}/digital-marketing-agency-kanpur`, priority: 0.97, changeFrequency: 'weekly' as const, lastModified: dates.kanpur },
    { url: `${BASE}/digital-marketing-agency-lucknow`, priority: 0.96, changeFrequency: 'weekly' as const, lastModified: dates.lucknow },
    { url: `${BASE}/digital-marketing-agency-noida`, priority: 0.95, changeFrequency: 'weekly' as const, lastModified: dates.noida },
    { url: `${BASE}/digital-marketing-agency-delhi`, priority: 0.94, changeFrequency: 'weekly' as const, lastModified: dates.delhi },
    { url: `${BASE}/free-seo-audit`, priority: 0.90, changeFrequency: 'monthly' as const, lastModified: dates.pricing },
    { url: `${BASE}/services/seo`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: dates.seo },
    { url: `${BASE}/services/google-ads-ppc`, priority: 0.84, changeFrequency: 'weekly' as const, lastModified: dates.ppc },
    { url: `${BASE}/services/social-media-marketing`, priority: 0.83, changeFrequency: 'weekly' as const, lastModified: dates.smm },
    { url: `${BASE}/services/content-marketing`, priority: 0.80, changeFrequency: 'weekly' as const, lastModified: dates.content },
    { url: `${BASE}/services/web-design-development`, priority: 0.80, changeFrequency: 'weekly' as const, lastModified: dates.webdev },
    { url: `${BASE}/services/email-marketing`, priority: 0.78, changeFrequency: 'weekly' as const, lastModified: dates.email },
    { url: `${BASE}/services/paid-advertising-performance-marketing`, priority: 0.82, changeFrequency: 'weekly' as const, lastModified: dates.perf },
    { url: `${BASE}/services/ai-automation-systems`, priority: 0.80, changeFrequency: 'weekly' as const, lastModified: dates.ai },
    { url: `${BASE}/services/analytics-tracking-attribution`, priority: 0.80, changeFrequency: 'weekly' as const, lastModified: dates.analytics },
    { url: `${BASE}/services/audits-consulting-strategy`, priority: 0.80, changeFrequency: 'weekly' as const, lastModified: dates.audits },
    { url: `${BASE}/services/b2b-lead-generation-sales`, priority: 0.82, changeFrequency: 'weekly' as const, lastModified: dates.leadgen },
    { url: `${BASE}/services/brand-strategy-positioning`, priority: 0.80, changeFrequency: 'weekly' as const, lastModified: dates.brand },
    { url: `${BASE}/services/ecommerce-catalog-services`, priority: 0.78, changeFrequency: 'weekly' as const, lastModified: dates.ecommerce },
    { url: `${BASE}/services/training-education`, priority: 0.75, changeFrequency: 'weekly' as const, lastModified: dates.training },
    { url: `${BASE}/services/industry-specific-marketing`, priority: 0.78, changeFrequency: 'weekly' as const, lastModified: dates.industry },
    { url: `${BASE}/about`, priority: 0.70, changeFrequency: 'monthly' as const, lastModified: dates.about },
    { url: `${BASE}/case-studies`, priority: 0.75, changeFrequency: 'weekly' as const, lastModified: dates.casestudiesIndex },
    { url: `${BASE}/pricing`, priority: 0.72, changeFrequency: 'monthly' as const, lastModified: dates.pricing },
    { url: `${BASE}/blog`, priority: 0.70, changeFrequency: 'daily' as const, lastModified: dates.blogIndex },
    { url: `${BASE}/contact`, priority: 0.65, changeFrequency: 'monthly' as const, lastModified: dates.contact },
    { url: `${BASE}/author/muddassir-ali`, priority: 0.70, changeFrequency: 'weekly' as const, lastModified: dates.author },
  ];

  // 2. Services index (0.75, weekly)
  const servicesIndex = [
    {
      url: `${BASE}/services`,
      priority: 0.75,
      changeFrequency: 'weekly' as const,
      lastModified: dates.servicesIndex
    }
  ];

  // 3. Industries & Dynamic Detail Pages (0.70, weekly)
  const industriesAndDynamic = [
    { route: '/industries', lastModified: dates.pricing },
    { route: '/industries/ecommerce', lastModified: dates.pricing },
    { route: '/industries/education', lastModified: dates.pricing },
    { route: '/industries/healthcare', lastModified: dates.pricing },
    { route: '/industries/msme-small-business', lastModified: dates.pricing },
    { route: '/industries/real-estate', lastModified: dates.pricing },
    { route: '/industries/saas', lastModified: dates.pricing },
    { route: '/industries/coaching-consulting', lastModified: dates.pricing },
    { route: '/industries/restaurant-food', lastModified: dates.pricing },
    { route: '/industries/fitness-wellness', lastModified: dates.pricing },
    { route: '/industries/non-profit', lastModified: dates.pricing },
    { route: '/industries/travel-tourism', lastModified: dates.pricing },
    { route: '/industries/legal-professional', lastModified: dates.pricing },
    { route: '/blog/seo-in-2026-whats-changed-for-indian-businesses', lastModified: dates.blogPost1 },
    { route: '/blog/google-ads-vs-meta-ads-roi-india', lastModified: dates.blogPost2 },
    { route: '/blog/how-to-optimize-google-business-profile-2026', lastModified: dates.blogPost3 },
    { route: '/blog/content-marketing-eeat-framework', lastModified: dates.blogPost4 },
    { route: '/blog/instagram-reels-funnel-local-brands', lastModified: dates.blogPost5 },
    { route: '/blog/meta-performance-max-best-practices', lastModified: dates.blogPost6 },
    { route: '/case-studies/delhi-real-estate-developer', lastModified: dates.caseStudyDelhi },
    { route: '/case-studies/noida-edtech-lead-generation', lastModified: dates.caseStudyNoida },
    { route: '/case-studies/lucknow-healthcare-leads', lastModified: dates.caseStudyLucknow },
    { route: '/case-studies/kanpur-fabrics-b2b', lastModified: dates.caseStudyKanpur },
  ].map(item => ({
    url: `${BASE}${item.route}`,
    lastModified: item.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.70,
  }));

  // 4. Testimonials (0.60, monthly)
  const testimonials = [
    {
      url: `${BASE}/testimonials`,
      priority: 0.60,
      changeFrequency: 'monthly' as const,
      lastModified: dates.testimonials
    }
  ];

  // 5. Legal Pages (0.30, monthly)
  const legal = [
    '/privacy-policy',
    '/terms',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: dates.legal,
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
