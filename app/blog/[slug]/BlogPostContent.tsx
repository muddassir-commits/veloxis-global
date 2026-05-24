'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ChevronRight, 
  FileText,
  ChevronUp
} from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Instagram, Facebook, Linkedin } from '../../../components/ui/BrandIcons';

interface PostContent {
  slug: string;
  title: string;
  excerpt: string;
  category: 'SEO' | 'Google Ads' | 'Social Media' | 'Content' | 'Local SEO';
  badgeColor: 'teal' | 'orange' | 'indigo' | 'blue';
  author: string;
  authorPhoto: string;
  date: string;
  readTime: string;
  headings: { id: string; text: string }[];
  htmlContent: string;
}

export default function BlogPostContent({ post, relatedPosts }: { post: PostContent; relatedPosts: any[] }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState('');
  const [shareOpen, setShareOpen] = useState(false);

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
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://veloxisglobal.com/blog/${post.slug}`,
    twitter: `https://twitter.com/intent/tweet?url=https://veloxisglobal.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}%20https://veloxisglobal.com/blog/${post.slug}`
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-royal-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Articles
            </Link>

            <Badge color={post.badgeColor} className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>

            {/* Author Meta Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mb-8 border-y border-slate-100 py-3.5 w-full">
              <span className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 relative">
                  <Image src={post.authorPhoto} alt={post.author} fill className="object-cover" />
                </div>
                <span>{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>

              {/* Share actions */}
              <div className="ml-auto relative flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Share:</span>
                <a 
                  href={shareUrls.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-slate-50 hover:bg-royal-blue hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-500"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href={shareUrls.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-slate-50 hover:bg-teal-600 hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-500"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Rendered markdown HTML */}
            <div 
              className="prose prose-slate max-w-none text-sm sm:text-body-md text-on-surface-variant leading-relaxed flex flex-col gap-6 w-full
              prose-headings:font-extrabold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-8 prose-h3:text-lg prose-strong:text-slate-900 prose-a:text-royal-blue prose-a:font-bold hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />

            {/* Author Bio Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 mt-12 w-full grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-3 flex justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 relative shadow-sm border border-slate-200">
                  <Image src={post.authorPhoto} alt={post.author} fill className="object-cover" />
                </div>
              </div>
              <div className="sm:col-span-9 flex flex-col items-start gap-2">
                <h4 className="text-lg font-extrabold text-slate-900">{post.author}</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Muddassir Ali — Founder of Veloxis Global, 4 years in digital marketing. Based in Kanpur, serving Delhi, Noida, Lucknow & Kanpur.
                </p>
                <div className="flex gap-3 mt-2">
                  <Link href="https://www.linkedin.com/in/muddassir-alii/" target="_blank" className="text-xs font-bold text-royal-blue flex items-center gap-1">
                    <span>LinkedIn Profile</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                  <Link href="https://muddassirali.com" target="_blank" className="text-xs font-bold text-royal-blue flex items-center gap-1">
                    <span>Founder Portfolio</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="w-full mt-16">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link 
                    key={rel.slug} 
                    href={`/blog/${rel.slug}`}
                    className="group bg-slate-50 border border-slate-100 p-5 rounded-xl block hover:bg-slate-100/50 hover:shadow-sm transition-all"
                  >
                    <Badge color={rel.badgeColor} className="mb-2.5">{rel.category}</Badge>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-royal-blue transition-colors">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-400 block mt-3">
                      {rel.date} · {rel.readTime}
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
              <h4 className="text-xs font-bold text-royal-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Table of Contents</span>
              </h4>
              <nav className="flex flex-col gap-3 text-xs font-semibold text-slate-500">
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
              
              <h4 className="text-lg font-extrabold relative z-10 leading-tight">
                Want to rank your site on Google's page 1?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                Get a custom audit explaining technical issues, sitemap configuration status, and search visibility errors.
              </p>
              
              <Button href="/free-seo-audit" variant="primary" className="w-full text-center py-3 text-xs mt-2 relative z-10">
                Claim Free SEO Audit →
              </Button>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
