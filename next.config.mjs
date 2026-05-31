/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
    domains: ['veloxisglobal.com', 'www.veloxisglobal.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Enforce non-www canonical host — www → non-www permanent redirect.
  // NOTE: On Vercel, domain-level redirects are configured in the Vercel dashboard
  // (Domains → set non-www as primary, www as redirect). This config acts as a
  // belt-and-suspenders fallback for non-Vercel environments.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.veloxisglobal.com' }],
        destination: 'https://veloxisglobal.com/:path*',
        permanent: true,
      },
    ];
  },

  // Cache long-lived immutable static assets produced by Next.js build hashing.
  // Vercel sets these automatically but explicit config ensures consistency
  // across any deployment target.
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
