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
        // AI search and answer crawlers, listed so a future change to '*' can't silently drop them.
        userAgent: [
          'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
          'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
          'PerplexityBot', 'Perplexity-User',
          'Google-Extended', 'Applebot-Extended', 'Bingbot',
          'CCBot', 'Meta-ExternalAgent', 'Amazonbot',
        ],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      }
    ],
    sitemap: 'https://www.veloxisglobal.com/sitemap.xml',
  };
}
