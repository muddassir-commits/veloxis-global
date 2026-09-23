'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Share2, ChevronRight, FileText } from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Linkedin } from '../../../components/ui/BrandIcons';
import { ImageFrame } from '../../../components/ui/ImageFrame';
import { FOUNDER_YEARS } from '../../../lib/seo-config';

import type { Post } from '../../../data/blog-posts';

type InlineImage = NonNullable<Post['inlineImages']>[number];

// Split the article HTML just before each <h2> that has an inline photo, so the
// photo sits between sections without touching the article text itself.
const splitContent = (html: string, images: InlineImage[] = []) => {
  const parts: { html: string; image?: InlineImage }[] = [];
  let rest = html;
  let pending: InlineImage | undefined;
  for (const image of images) {
    const idx = rest.indexOf(`<h2 id="${image.beforeHeading}"`);
    if (idx <= 0) continue;
    parts.push({ html: rest.slice(0, idx), image: pending });
    rest = rest.slice(idx);
    pending = image;
  }
  parts.push({ html: rest, image: pending });
  return parts;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });

interface Props {
  post: Post;
  relatedPosts: Post[];
  service?: { slug: string; title: string; shortDesc: string };
}

export default function BlogPostContent({ post, relatedPosts, service }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState('');

  // Update progress bar & active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active Heading calculation
      const headingsElements = post.headings.map(h => document.getElementById(h.id)).filter(Boolean);
      let currentActive = '';
      for (const el of headingsElements) {
        const rect = el!.getBoundingClientRect();
        if (rect.top <= 120) {
          currentActive = el!.id;
        }
      }
      setActiveHeading(currentActive || post.headings[0]?.id || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.headings]);

  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://www.veloxisglobal.com/blog/${post.slug}`,
    twitter: `https://twitter.com/intent/tweet?url=https://www.veloxisglobal.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}%20https://www.veloxisglobal.com/blog/${post.slug}`
  };

  return (
    <div className="bg-white font-sans text-left relative">

      {/* 1. Scroll Progress Bar (royal-blue) */}
      <div
        className="fixed top-0 left-0 h-1 bg-royal-blue z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-container-max mx-auto px-gutter py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Main Article Content (8 cols) */}
          <article className="lg:col-span-8 flex flex-col items-start">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-royal-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Articles
            </Link>

            <Badge color={post.badgeColor as any} className="mb-4">{post.category}</Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>

            {/* Author Meta Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-8 border-y border-slate-100 py-3.5 w-full">
              <Link
                href="/about"
                className="flex items-center gap-1.5 hover:text-royal-blue transition-colors"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 relative">
                  <Image src={post.authorPhoto} alt="" fill sizes="24px" className="object-cover" />
                </div>
                <span>{post.author}</span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={post.modifiedIso}>
                  {post.modifiedIso !== post.isoDate ? 'Updated ' : ''}{formatDate(post.modifiedIso)}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{post.readTime}</span>
              </span>

              {/* Share actions */}
              <div className="ml-auto relative flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-500">Share:</span>
                <a
                  href={shareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-7 h-7 bg-slate-50 hover:bg-royal-blue hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-500"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={shareUrls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-7 h-7 bg-slate-50 hover:bg-teal-600 hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-500"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Featured Image — fixed 16:10, matches the 1600x1000 source */}
            {post.image && (
              <ImageFrame
                src={post.image}
                alt={post.imageAlt}
                ratio="16/10"
                sizes="(max-width: 1024px) calc(100vw - 32px), 760px"
                priority
                className="mb-8 border border-slate-100 shadow-sm"
              />
            )}

            {/* Rendered article HTML, with optional in-article photos between sections */}
            <div className="w-full">
              {splitContent(post.htmlContent, post.inlineImages).map((part, i) => (
                <React.Fragment key={i}>
                  {part.image && (
                    <figure className="my-10">
                      <ImageFrame
                        src={part.image.src}
                        alt={part.image.alt}
                        ratio="16/10"
                        sizes="(max-width: 1024px) calc(100vw - 32px), 760px"
                        className="border border-slate-100"
                      />
                      {part.image.caption && (
                        <figcaption className="mt-3 text-center text-xs text-slate-500">{part.image.caption}</figcaption>
                      )}
                    </figure>
                  )}
                  <div className="article-body" dangerouslySetInnerHTML={{ __html: part.html }} />
                </React.Fragment>
              ))}
            </div>

            {/* Author Bio Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 mt-12 w-full grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-3 flex justify-center">
                <Link href="/about">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 relative shadow-sm border border-slate-200 hover:opacity-90 transition-opacity">
                    <Image src={post.authorPhoto} alt={post.author} fill sizes="112px" className="object-cover" />
                  </div>
                </Link>
              </div>
              <div className="sm:col-span-9 flex flex-col items-start gap-2">
                <Link href="/about" className="hover:text-royal-blue transition-colors">
                  <p className="text-lg font-extrabold text-slate-900">{post.author}</p>
                </Link>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Founder of Veloxis Global, with {FOUNDER_YEARS}+ years in digital marketing. Works with builders, brokers and channel partners across Kanpur, Lucknow, Noida and Delhi NCR.
                </p>
                <div className="flex gap-3 mt-2">
                  <Link href="https://www.linkedin.com/in/muddassir-alii/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-royal-blue flex items-center gap-1">
                    <span>LinkedIn Profile</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                  <Link href="https://muddassirali.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-royal-blue flex items-center gap-1">
                    <span>Founder Portfolio</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="w-full mt-16">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Related articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-slate-50 border border-slate-100 p-5 rounded-xl block hover:bg-slate-100/50 hover:shadow-sm transition-all"
                  >
                    <Badge color={rel.badgeColor as any} className="mb-2.5">{rel.category}</Badge>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-royal-blue transition-colors">
                      {rel.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500 block mt-3">
                      {rel.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sticky TOC Sidebar (4 cols) */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:flex flex-col gap-8 text-left">

            {/* Table of Contents */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <p className="text-xs font-bold text-royal-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>On this page</span>
              </p>
              <nav aria-label="Table of contents" className="flex flex-col gap-3 text-xs font-semibold text-slate-500">
                {post.headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block hover:text-royal-blue transition-colors leading-tight ${
                      activeHeading === heading.id
                        ? 'text-royal-blue font-bold border-l-2 border-royal-blue pl-2.5'
                        : 'border-l-2 border-transparent pl-2.5'
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contextual CTA Box */}
            <div className="bg-slate-900 text-white rounded-xl p-6 relative overflow-hidden border border-white/10 flex flex-col gap-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-royal-blue/30 rounded-full blur-xl"></div>

              <p className="text-lg font-extrabold relative z-10 leading-tight">
                {service ? `Need help with ${service.title.toLowerCase()}?` : 'Want more site visits from your marketing?'}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                {service ? service.shortDesc : 'Get a free review of your landing page, ads and lead response time, with a plan to fix what is leaking.'}
              </p>
              {service && (
                <Link href={`/services/${service.slug}`} className="text-xs font-bold text-teal-300 hover:text-white relative z-10">
                  See how it works →
                </Link>
              )}

              <Button id="blog-sidebar-free-audit-btn" href="/contact" variant="primary" className="w-full text-center py-3 text-xs mt-2 relative z-10">
                Get My Free Audit →
              </Button>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
