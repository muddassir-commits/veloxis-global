import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema } from '../../lib/schema';
import BlogContent from './BlogContent';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { blogPosts } from '../../data/blog-posts';

// 1. Dynamic Metadata with canonical alternates
export function generateMetadata(): Metadata {
  return constructMetadata({
    title: pageMeta.blog.title,
    description: pageMeta.blog.description,
    path: pageMeta.blog.path
  });
}

export default function BlogPage() {
  const breadcrumbItems = [{ name: 'Blog', href: '/blog' }];

  // 2. Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Blog', url: 'https://veloxisglobal.com/blog' }
  ]);

  const featuredPost = blogPosts[0];
  const featuredArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": featuredPost.title,
    "datePublished": featuredPost.isoDate,
    "dateModified": featuredPost.isoDate,
    "image": `https://veloxisglobal.com${featuredPost.image}`,
    "author": {
      "@type": "Person",
      "name": "Muddassir Ali",
      "url": "https://www.linkedin.com/in/muddassir-alii/",
      "sameAs": [
        "https://www.linkedin.com/in/muddassir-alii/",
        "https://muddassirali.com"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veloxis Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veloxisglobal.com/images/logos/logo.webp"
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
