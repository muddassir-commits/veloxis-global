import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blog-posts';
import { caseStudies } from '../data/case-studies';
import { industriesData } from '../data/industries-data';
import { servicesData } from '../data/services-data';

const BASE = 'https://www.veloxisglobal.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Define realistic static lastModified dates based on content history
  const defaultDate = new Date('2026-07-03T12:00:00Z');

  // 1. Core pages with specific priority order from ranking strategy
  const corePages = [
    { url: `${BASE}`, priority: 1.0, changeFrequency: 'daily' as const, lastModified: defaultDate },
    { url: `${BASE}/contact`, priority: 0.90, changeFrequency: 'monthly' as const, lastModified: defaultDate },
    { url: `${BASE}/about`, priority: 0.70, changeFrequency: 'monthly' as const, lastModified: defaultDate },
    { url: `${BASE}/case-studies`, priority: 0.75, changeFrequency: 'weekly' as const, lastModified: defaultDate },
    { url: `${BASE}/pricing`, priority: 0.72, changeFrequency: 'monthly' as const, lastModified: defaultDate },
    { url: `${BASE}/blog`, priority: 0.70, changeFrequency: 'daily' as const, lastModified: defaultDate },
  ];

  // 2. Services index & Dynamic Service Pages
  const servicesIndex = [
    {
      url: `${BASE}/services`,
      priority: 0.75,
      changeFrequency: 'weekly' as const,
      lastModified: defaultDate
    },
    ...servicesData.map(service => ({
      url: `${BASE}/services/${service.slug}`,
      priority: 0.80,
      changeFrequency: 'weekly' as const,
      lastModified: defaultDate
    }))
  ];

  // 3. Industry Detail Pages
  const industriesAndDynamic = [
    ...industriesData.map(industry => ({
      url: `${BASE}/industries/${industry.slug}`,
      priority: 0.78,
      changeFrequency: 'weekly' as const,
      lastModified: defaultDate
    }))
  ];

  // 4. Case Studies
  const dynamicCaseStudies = caseStudies.map(cs => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    priority: 0.70,
    changeFrequency: 'weekly' as const,
    lastModified: defaultDate
  }));

  // 5. Blog Posts
  const dynamicBlogPosts = blogPosts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    priority: 0.70,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(post.isoDate)
  }));

  // 6. Testimonials
  const testimonials = [
    {
      url: `${BASE}/testimonials`,
      priority: 0.60,
      changeFrequency: 'monthly' as const,
      lastModified: defaultDate
    }
  ];

  // 7. Legal Pages
  const legal = [
    '/privacy-policy',
    '/terms',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: defaultDate,
    changeFrequency: 'monthly' as const,
    priority: 0.30,
  }));

  return [
    ...corePages,
    ...servicesIndex,
    ...industriesAndDynamic,
    ...dynamicCaseStudies,
    ...dynamicBlogPosts,
    ...testimonials,
    ...legal,
  ];
}
