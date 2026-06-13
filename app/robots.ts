import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      }
    ],
    sitemap: 'https://veloxisglobal.com/sitemap.xml',
  };
}
