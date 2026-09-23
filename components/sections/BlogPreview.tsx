import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';

export const BlogPreview: React.FC = () => {
  // Pull the latest 3 blog posts dynamically from actual data
  const posts = blogPosts.slice(0, 3);

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
              Guides for builders, brokers and channel partners
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
                {/* Card Header - gradient accent bar */}
                <div className="w-full h-48 relative overflow-hidden border-b border-slate-50">
                  <Link href={`/blog/${post.slug}`} className="block w-full h-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant={idx === 0 ? 'indigo' : idx === 1 ? 'teal' : 'orange'}>
                      {post.category}
                    </Badge>
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
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 hover:text-royal-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 text-xs font-semibold text-slate-500">
                    <span>{post.date}</span>
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
