import type { MetadataRoute } from 'next';

// Gives Google and browsers square icons in multiples of 48px (Google's favicon guideline).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Veloxis Global',
    short_name: 'Veloxis',
    description: 'Performance marketing agency in India for e-commerce, local businesses and real estate: Meta and Google ads, websites, SEO, WhatsApp automation.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0B0F19',
    icons: [
      { src: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { src: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
