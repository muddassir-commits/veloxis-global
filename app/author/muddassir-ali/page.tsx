import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema } from '../../../lib/schema';
import { constructMetadata } from '../../../lib/seo-config';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Globe, Calendar, Clock, Award, BookOpen, ExternalLink } from 'lucide-react';
import { Linkedin } from '../../../components/ui/BrandIcons';

// We can define the blog posts locally or import them. Since they are inside `app/blog/[slug]/page.tsx`,
// let's define them here or import if possible. But since page.tsx doesn't export the array, let's define
// a small helper or duplicate the essential metadata of the posts here for rendering.
// Wait! Let's duplicate the array here or import it if we export it from page.tsx.
// Let's check: did we export `blogPosts` from `app/blog/[slug]/page.tsx`?
// No, it was `const blogPosts`. Let's export it from `app/blog/[slug]/page.tsx` so we can import it here
// and avoid duplication!
// That's an extremely clean engineering practice. Let's make sure we do that.
// For now, let's write the code assuming we can import `blogPosts` from `../../blog/[slug]/page.tsx` or similar,
// or let's export it. Wait, we can import it from `app/blog/[slug]/page` if we export it!
// Let's write the author page code.

import { blogPosts } from '../../../data/blog-posts';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Muddassir Ali — Founder & Marketing Strategist | Veloxis Global',
    description: 'Read digital marketing guides, SEO strategies, and Google/Meta Ads blueprints authored by Muddassir Ali, founder of Veloxis Global.',
    path: '/author/muddassir-ali'
  });
}

export default function AuthorPage() {
  const authorName = "Muddassir Ali";
  
  // Filter articles written by Muddassir
  const articles = blogPosts.filter(post => post.author === authorName);

  const breadcrumbItems = [
    { name: 'Author', href: '#' },
    { name: authorName, href: '/author/muddassir-ali' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Blog', url: 'https://veloxisglobal.com/blog' },
    { name: authorName, url: 'https://veloxisglobal.com/author/muddassir-ali' }
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": authorName,
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Veloxis Global",
      "url": "https://veloxisglobal.com"
    },
    "image": "https://veloxisglobal.com/images/profiles/Muddassir_Ali.webp",
    "url": "https://veloxisglobal.com/author/muddassir-ali",
    "sameAs": [
      "https://www.linkedin.com/in/muddassir-alii/",
      "https://x.com/muddassir_alii",
      "https://muddassirali.com"
    ],
    "description": "Muddassir Ali is the founder of Veloxis Global. He is a professional digital marketing consultant specializing in SEO, Google Ads, paid social, and sales workflow automation."
  };

  const certifications = [
    {
      title: "Google Ads Search Certification",
      issuer: "Google Skillshop",
      link: "https://skillshop.exceedlms.com/student/path/18128-google-ads-search-certification"
    },
    {
      title: "Google Analytics 4 Certification",
      issuer: "Google Skillshop",
      link: "https://skillshop.exceedlms.com/student/path/29485-google-analytics-individual-qualification"
    },
    {
      title: "HubSpot Digital Marketing Certification",
      issuer: "HubSpot Academy",
      link: "https://academy.hubspot.com/"
    }
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={personSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-left font-sans">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Bio Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-slate-200 relative shrink-0 shadow-md border-2 border-white">
                  <Image 
                    src="/images/profiles/Muddassir_Ali.webp" 
                    alt="Muddassir Ali" 
                    fill 
                    priority
                    className="object-cover" 
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <Badge variant="teal">FOUNDER & CEO</Badge>
                  <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                    Muddassir Ali
                  </h1>
                  <p className="text-sm font-semibold text-royal-blue">
                    Digital Marketing Consultant & Automation Engineer
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Based in Kanpur, serving clients across Delhi NCR, Lucknow, and globally. Over 4 years of proven expertise building ROI-focused acquisition channels, local SEO networks, and n8n sales funnels.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-2">
                    <Link 
                      href="https://www.linkedin.com/in/muddassir-alii/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 transition-colors px-4 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-royal-blue" />
                      <span>LinkedIn Profile</span>
                    </Link>
                    <Link 
                      href="https://muddassirali.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 transition-colors px-4 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm"
                    >
                      <Globe className="w-3.5 h-3.5 text-royal-blue" />
                      <span>Founder Portfolio</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="flex flex-col gap-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                  About the Founder
                </h2>
                <p>
                  Muddassir Ali founded Veloxis Global with a single mission: to replace vanity agency metrics (like clicks and impressions) with actual business revenue and pipeline growth. Having worked with dozens of MSMEs and corporate scaleups across Northern India, Muddassir builds predictable client acquisition systems by combining paid search traffic with advanced backend automation.
                </p>
                <p>
                  Specializing in <strong>Local search rankings</strong>, <strong>Performance Max advertising campaigns</strong>, and <strong>n8n/Make CRM automations</strong>, he acts as an outsourced growth engineer for real estate developers, educational brands, medical chains, and B2B exporters.
                </p>
              </div>

              {/* Published Articles List */}
              <div className="flex flex-col gap-6 mt-6">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-royal-blue" />
                  <span>Articles Published by Muddassir</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {articles.map((post) => (
                    <Card 
                      key={post.slug} 
                      hoverable={true} 
                      className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col justify-between h-full"
                    >
                      <div className="flex flex-col gap-3">
                        <Badge color={post.badgeColor} className="w-fit">{post.category}</Badge>
                        <h3 className="font-extrabold text-slate-900 text-base group-hover:text-royal-blue transition-colors leading-snug">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

            </div>

            {/* Credentials Column (4 cols) */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <Card className="bg-slate-50 border border-slate-200 p-6 flex flex-col gap-6 rounded-3xl">
                <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Credentials</span>
                </h3>
                
                <div className="flex flex-col gap-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="bg-white border border-slate-150 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
                      <span className="text-xs font-black text-royal-blue uppercase tracking-widest leading-none">
                        {cert.issuer}
                      </span>
                      <h4 className="font-extrabold text-slate-800 text-sm leading-snug">
                        {cert.title}
                      </h4>
                      {cert.link !== '#' && (
                        <Link 
                          href={cert.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-slate-500 hover:text-royal-blue flex items-center gap-1 mt-1"
                        >
                          <span>Verify Certification</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="bg-slate-900 text-white p-6 rounded-3xl relative overflow-hidden border border-white/10 flex flex-col gap-4">
                <div className="absolute top-0 right-0 w-20 h-20 bg-royal-blue/30 rounded-full blur-xl"></div>
                <h3 className="font-extrabold text-lg leading-tight relative z-10">
                  Ready to optimize your marketing?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                  Schedule a free 1-on-1 growth audit with Muddassir to identify sitemap bugs, Google Maps opportunities, and automation gaps.
                </p>
                <Button href="/free-seo-audit" variant="primary" className="w-full text-center py-3 text-xs mt-2 relative z-10">
                  Claim Free SEO Audit
                </Button>
              </Card>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
