import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema } from '../../../lib/schema';
import BlogPostContent from './BlogPostContent';
import { constructMetadata } from '../../../lib/seo-config';

interface Params {
  params: {
    slug: string;
  };
}

interface Post {
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
  image: string;
}

const blogPosts: Post[] = [
  {
    slug: 'seo-in-2026-whats-changed-for-indian-businesses',
    title: "SEO in 2026: Guide for Indian Businesses | Veloxis Global",
    excerpt: "Learn how to rank higher on Google in 2026. Get our expert SEO action plan tailored for Indian businesses and scale your organic website traffic.",
    category: 'SEO',
    badgeColor: 'teal',
    author: 'Muddassir Ali',
    authorPhoto: '/images/profiles/Muddassir_Ali.webp',
    date: 'May 20, 2026',
    readTime: '6 min read',
    headings: [
      { id: 'introduction', text: 'Introduction: The AI Search Shift' },
      { id: 'eeat-importance', text: '1. Why E-E-A-T is Now Mandatory' },
      { id: 'core-web-vitals', text: '2. Speed & Core Web Vitals Weighting' },
      { id: 'action-steps', text: '3. Action Plan for Indian Businesses' }
    ],
    htmlContent: `
      <h2 id="introduction">Introduction: The AI Search Shift</h2>
      <p>The search engine optimization landscape in 2026 is radically different than it was even two years ago. With Google integrating AI-generated summaries directly into search queries, businesses in Delhi, Noida, Lucknow, and Kanpur must adapt their SEO frameworks to stay visible.</p>
      
      <h2 id="eeat-importance">1. Why E-E-A-T is Now Mandatory</h2>
      <p>Google evaluates content based on who wrote it. If your blog post is not written or reviewed by a verified industry professional, it will not rank. Experience, Expertise, Authoritativeness, and Trustworthiness are key indicators of rank health.</p>

      <h2 id="core-web-vitals">2. Speed & Core Web Vitals Weighting</h2>
      <p>A website that takes more than 2 seconds to load on a mobile connection loses 40% of its visitors before they even see the logo. Google penalizes slow websites. Building with fast frameworks like Next.js is no longer optional — it is a primary ranking weight factor.</p>

      <h2 id="action-steps">3. Action Plan for Indian Businesses</h2>
      <p>Clean your sitemaps, verify authors with proper bio structures, write depth-first subject matter content, and ensure page response speeds are under 1.5 seconds. Start with a comprehensive technical audit checklist.</p>
    `,
    image: '/images/blog/seo-2026-guide.png'
  },
  {
    slug: 'google-ads-vs-meta-ads-roi-india',
    title: "Google Ads vs Meta Ads: India ROI Guide | Veloxis Global",
    excerpt: "Should you choose Google Ads or Meta Ads in India? Read our direct comparison of CPC, target intent, and conversion ROAS to scale your leads now.",
    category: 'Google Ads',
    badgeColor: 'orange',
    author: 'Muddassir Ali',
    authorPhoto: '/images/profiles/Muddassir_Ali.webp',
    date: 'May 15, 2026',
    readTime: '5 min read',
    headings: [
      { id: 'direct-demand', text: 'Google Ads: Capturing Direct Demand' },
      { id: 'demand-generation', text: 'Meta Ads: Generating New Demand' },
      { id: 'roi-verdict', text: 'The ROI Verdict' }
    ],
    htmlContent: `
      <p>One of the most common questions we hear from business owners in Delhi NCR is: <em>"Where should I invest my paid ad budget — Google Ads or Facebook/Instagram?"</em> The answer depends entirely on your product lifecycle and search intent.</p>

      <h2 id="direct-demand">Google Ads: Capturing Direct Demand</h2>
      <p>When someone searches for "best real estate projects in Noida Sector 150," they have high transactional intent. They are ready to talk to a sales agent. Google Ads lets you capture this demand directly. While the Cost Per Click (CPC) is higher, the lead-to-sale conversion rate is unparalleled.</p>

      <h2 id="demand-generation">Meta Ads: Generating New Demand</h2>
      <p>Most Instagram users are not looking to buy an apartment or book a dental checkup. However, visually appealing creatives, video walkthroughs, and targeted demographic filters can generate interest. Meta is excellent for brand awareness and generating high-volume, lower-cost inquiries.</p>

      <h2 id="roi-verdict">The ROI Verdict</h2>
      <p>For instant lead-to-conversion outcomes in industries like real estate and medical clinics, prioritize Google Search. For D2C, education courses, or brand launches, Meta Ads will deliver a higher overall ROAS.</p>
    `,
    image: '/images/blog/google-meta-roi.png'
  },
  {
    slug: 'how-to-optimize-google-business-profile-2026',
    title: "Local SEO: Google Business Profile 2026 Guide | Veloxis",
    excerpt: "Master Google Maps pack positioning in 2026. Read our local GBP optimization checklist to get more phone calls and client visits for your clinic.",
    category: 'Local SEO',
    badgeColor: 'blue',
    author: 'Muddassir Ali',
    authorPhoto: '/images/profiles/Muddassir_Ali.webp',
    date: 'May 10, 2026',
    readTime: '7 min read',
    headings: [
      { id: 'gbp-setup', text: '1. Standard Profile Configuration' },
      { id: 'local-citations', text: '2. Cleaning Local Citations' },
      { id: 'reviews-generation', text: '3. Automated WhatsApp Review Flow' }
    ],
    htmlContent: `
      <p>Local businesses live and die by geographic search map pack placement. This case study details how we scale patient inquiries for a medical clinic based in Lucknow using a combination of local GBP optimization and Meta local lead ads.</p>

      <h2 id="gbp-setup">1. Standard Profile Configuration</h2>
      <p>Check that your business address matches utility records exactly. Optimize descriptions with local keyword indicators and set exact operating hours.</p>

      <h2 id="local-citations">2. Cleaning Local Citations</h2>
      <p>Ensure name, address, and phone numbers (NAP data) are clean across directory platforms. Search algorithms penalize accounts with conflicting listings.</p>

      <h2 id="reviews-generation">3. Automated WhatsApp Review Flow</h2>
      <p>Integrate automated WhatsApp Business messages to request reviews right after client purchases, helping rank your profile in maps pack algorithms.</p>
    `,
    image: '/images/blog/gbp-local-seo.png'
  },
  {
    slug: 'content-marketing-eeat-framework',
    title: "E-E-A-T Content Marketing Funnel Guide | Veloxis Global",
    excerpt: "Learn how to build Google E-E-A-T compliant content funnels. Discover our writer verification blueprint to scale and convert organic web traffic.",
    category: 'Content',
    badgeColor: 'indigo',
    author: 'Muddassir Ali',
    authorPhoto: '/images/profiles/Muddassir_Ali.webp',
    date: 'May 05, 2026',
    readTime: '6 min read',
    headings: [
      { id: 'eeat-explained', text: 'What is E-E-A-T?' },
      { id: 'funnel-mapping', text: 'Mapping Your Content Silos' },
      { id: 'measuring-trust', text: 'Measuring Trust Signals' }
    ],
    htmlContent: `
      <p>Google content quality guidelines evaluate the credibility of the publisher. To rank in 2026, content must be linked to professional authors with external portfolios.</p>
      
      <h2 id="eeat-explained">What is E-E-A-T?</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness represent Google's quality framework. Direct author profiles with links back to certified pages confirm this detail.</p>

      <h2 id="funnel-mapping">Mapping Your Content Silos</h2>
      <p>Structure your articles under central parent resource hubs to establish domain credibility in your target niche category.</p>

      <h2 id="measuring-trust">Measuring Trust Signals</h2>
      <p>Ensure phone numbers, business registry citations, and privacy pages are correctly configured. Clear legal indicators prove authority directly to crawler bots.</p>
    `,
    image: '/images/blog/eeat-content-blueprint.png'
  },
  {
    slug: 'instagram-reels-funnel-local-brands',
    title: "Instagram Reels Strategy: Social Media Funnel | Veloxis",
    excerpt: "Turn Instagram views into WhatsApp sales leads. Explore our video hooks and DM automation setup to capture and convert customer inquiries online now.",
    category: 'Social Media',
    badgeColor: 'teal',
    author: 'Muddassir Ali',
    authorPhoto: '/images/profiles/Muddassir_Ali.webp',
    date: 'April 28, 2026',
    readTime: '6 min read',
    headings: [
      { id: 'reels-scripting', text: '1. Localized Reel Hooks' },
      { id: 'chat-triggers', text: '2. Comment Triggers and DMs' },
      { id: 'whatsapp-handover', text: '3. WhatsApp Business Handovers' }
    ],
    htmlContent: `
      <p>Many brands fail on Instagram because they focus on global virality. For localized businesses, the goal should be regional visibility that generates direct conversation leads.</p>

      <h2 id="reels-scripting">1. Localized Reel Hooks</h2>
      <p>Reference target geographic markers in the first 3 seconds to hook viewers located in Noida, Delhi, Lucknow, or Kanpur.</p>

      <h2 id="chat-triggers">2. Comment Triggers and DMs</h2>
      <p>Invite comments with key phrase markers (e.g., 'send audit') and deploy automation bots to immediately DM target links.</p>

      <h2 id="whatsapp-handover">3. WhatsApp Business Handovers</h2>
      <p>Route the direct link to open a WhatsApp dialogue containing pre-filled inquiries, starting sales discussions instantly.</p>
    `,
    image: '/images/blog/instagram-reels-funnel.png'
  },
  {
    slug: 'meta-performance-max-best-practices',
    title: "Google Ads Performance Max PMax Campaign Guide | Veloxis",
    excerpt: "Optimize Google Ads Performance Max (PMax) campaigns in 2026. Learn how to configure assets and audience signals to scale conversion leads today.",
    category: 'Google Ads',
    badgeColor: 'orange',
    author: 'Muddassir Ali',
    authorPhoto: '/images/profiles/Muddassir_Ali.webp',
    date: 'April 20, 2026',
    readTime: '5 min read',
    headings: [
      { id: 'pmax-overview', text: 'Performance Max in 2026' },
      { id: 'asset-groups', text: 'Optimizing Asset Groups' },
      { id: 'audience-signals', text: 'Configuring Audience Signals' }
    ],
    htmlContent: `
      <p>Performance Max uses AI model parameters to bid and place ads across Search, YouTube, Maps, and Display networks dynamically.</p>

      <h2 id="pmax-overview">Performance Max in 2026</h2>
      <p>PMax is now the dominant campaign format in Google Ads. Our Google Ads Certified team configures signals to prevent ad spend bleed.</p>

      <h2 id="asset-groups">Optimizing Asset Groups</h2>
      <p>Provide high-quality graphic assets, clean title formats, and high-conversion target landing pages to allow PMax templates to optimize properly.</p>

      <h2 id="audience-signals">Configuring Audience Signals</h2>
      <p>Upload clean custom lists of past client conversion data to tell the algorithm exactly who is most likely to click and inquire.</p>
    `,
    image: '/images/blog/pmax-performance.png'
  }
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default function SingleBlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Blog', url: 'https://veloxisglobal.com/blog' },
    { name: post.title, url: `https://veloxisglobal.com/blog/${post.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "image": "https://veloxisglobal.com/images/logos/logo.webp",
    "author": {
      "@type": "Person",
      "name": post.author,
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

  // Find 2 related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}
