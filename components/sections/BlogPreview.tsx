import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export const BlogPreview: React.FC = () => {
  const posts = [
    {
      slug: 'seo-in-2026-whats-changed-for-indian-businesses',
      title: "SEO in 2026: Guide for Indian Businesses | Veloxis Global",
      excerpt: "Learn how to rank higher on Google in 2026. Get our expert SEO action plan tailored for Indian businesses and scale your organic website traffic.",
      category: 'SEO',
      badge: 'teal' as const,
      author: 'Muddassir Ali',
      date: 'May 20, 2026',
      readTime: '6 min read',
      image: '/images/blog/seo-2026-guide.png'
    },
    {
      slug: 'google-ads-vs-meta-ads-roi-india',
      title: "Google Ads vs Meta Ads: India ROI Guide | Veloxis Global",
      excerpt: "Should you choose Google Ads or Meta Ads in India? Read our direct comparison of CPC, target intent, and conversion ROAS to scale your leads now.",
      category: 'Paid PPC',
      badge: 'orange' as const,
      author: 'Muddassir Ali',
      date: 'May 15, 2026',
      readTime: '5 min read',
      image: '/images/blog/google-meta-roi.png'
    },
    {
      slug: 'how-to-optimize-google-business-profile-2026',
      title: "Local SEO: Google Business Profile 2026 Guide | Veloxis",
      excerpt: "Master Google Maps pack positioning in 2026. Read our local GBP optimization checklist to get more phone calls and client visits for your clinic.",
      category: 'Local SEO',
      badge: 'indigo' as const,
      author: 'Muddassir Ali',
      date: 'May 10, 2026',
      readTime: '7 min read',
      image: '/images/blog/gbp-local-seo.png'
    }
  ];

  return (
    <section className="bg-slate-50 py-section-gap" id="blog-preview">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 section-reveal">
          <div className="text-left max-w-[620px]">
            <Badge variant="indigo" className="mb-4">
              INSIGHTS
            </Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
              Digital Marketing Knowledge Built for Indian Businesses
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-bold text-sm text-royal-blue hover:text-indigo-accent transition-colors group self-start shrink-0"
          >
            Browse All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal">
          {posts.map((post, idx) => (
            <div key={idx} className="h-full">
              <Card hover className="flex flex-col h-full overflow-hidden p-0 border border-slate-100 bg-white group">
                {/* Card Header image */}
                <div className="w-full h-48 bg-slate-100 relative overflow-hidden border-b border-slate-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant={post.badge}>{post.category}</Badge>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Meta details */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 hover:text-royal-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-royal-blue hover:text-indigo-accent font-bold"
                    >
                      Read Post →
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
