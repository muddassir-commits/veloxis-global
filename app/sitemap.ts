import { MetadataRoute } from 'next';
import { getAllPosts } from '../lib/blog';
import { servicesData } from '../data/services-data';
import { playbooks } from '../data/playbooks';
import { SITE_URL, CONTENT_REVIEWED } from '../lib/seo-config';

// Only canonical, indexable URLs. Google ignores priority/changefreq, so lastModified
// is the only hint that matters — bump SITE_CONTENT_UPDATED when static pages change.
const SITE_CONTENT_UPDATED = new Date(`${CONTENT_REVIEWED}T00:00:00+05:30`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/industries/real-estate',
    '/industries/real-estate/nri-buyers',
    '/channel-partners',
    '/digital-marketing-agency-lucknow',
    '/digital-marketing-agency-kanpur',
    '/digital-marketing-agency-noida',
    '/playbooks',
    '/free-audit',
    '/real-estate-lead-system',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({ url: `${SITE_URL}${route}`, lastModified: SITE_CONTENT_UPDATED }));

  const services = servicesData.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: SITE_CONTENT_UPDATED,
  }));

  const playbookPages = playbooks.map((p) => ({
    url: `${SITE_URL}/playbooks/${p.slug}`,
    lastModified: new Date(p.updated),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedIso),
  }));

  return [...staticRoutes, ...services, ...playbookPages, ...posts];
}
