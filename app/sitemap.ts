import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veloxisglobal.com';
  const currentDate = new Date();

  // 1. Homepage (1.0, daily)
  const home = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // 2. Location Pages (0.95, weekly)
  const locations = [
    '/digital-marketing-agency-delhi',
    '/digital-marketing-agency-noida',
    '/digital-marketing-agency-lucknow',
    '/digital-marketing-agency-kanpur',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  // 3. Service Pages (0.85, weekly)
  const services = [
    '/services',
    '/services/seo',
    '/services/social-media-marketing',
    '/services/google-ads-ppc',
    '/services/content-marketing',
    '/services/web-design-development',
    '/services/email-marketing',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 4. Free SEO Audit (0.80, monthly)
  const audit = [
    {
      url: `${baseUrl}/free-seo-audit`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.80,
    },
  ];

  // 5. Core Content Pages (0.75, weekly/monthly)
  const core = [
    '/about',
    '/case-studies',
    '/pricing',
    '/blog',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  // 6. Industries & Dynamic Detail Pages (0.70, weekly)
  const industriesAndDynamic = [
    '/industries',
    '/industries/ecommerce',
    '/industries/education',
    '/industries/healthcare',
    '/industries/msme-small-business',
    '/industries/real-estate',
    '/blog/seo-in-2026-whats-changed-for-indian-businesses',
    '/blog/google-ads-vs-meta-ads-roi-india',
    '/blog/how-we-generated-500-leads-lucknow-healthcare',
    '/case-studies/delhi-real-estate-developer',
    '/case-studies/noida-ecommerce-skincare',
    '/case-studies/lucknow-healthcare-leads',
    '/case-studies/kanpur-fabrics-b2b',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.70,
  }));

  // 7. Contact & Testimonials (0.65, monthly)
  const utility = [
    '/contact',
    '/testimonials',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [
    ...home,
    ...locations,
    ...services,
    ...audit,
    ...core,
    ...industriesAndDynamic,
    ...utility,
  ];
}
