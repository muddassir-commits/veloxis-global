import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema } from '../../lib/schema';
import BlogContent from './BlogContent';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = {
  title: "Digital Marketing Blog & B2B Growth Strategy | Veloxis Global",
  description: "Get actionable search insights, PPC ad audits, conversion rate checklists, and automation tutorials. Read our articles.",
  alternates: {
    canonical: "https://veloxisglobal.com/blog/",
  }
};

export default function BlogPage() {
  const breadcrumbItems = [{ name: 'Blog', href: '/blog' }];

  // 2. Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Blog', url: 'https://veloxisglobal.com/blog' }
  ]);

  const featuredArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "SEO in 2026: What's Changed and What Indian Businesses Must Do Now",
    "datePublished": "2026-05-20",
    "dateModified": "2026-05-20",
    "image": "https://veloxisglobal.com/images/logos/logo.png",
    "author": {
      "@type": "Person",
      "name": "Muddassir Ali",
      "url": "https://www.linkedin.com/in/muddassir-alii/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veloxis Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veloxisglobal.com/images/logos/logo.png"
      }
    }
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={featuredArticleSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <BlogContent />
    </>
  );
}
