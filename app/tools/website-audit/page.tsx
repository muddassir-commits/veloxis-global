import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata, pageMeta, SITE_URL } from '../../../lib/seo-config';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { ORG_ID } from '../../../lib/schema';
import AuditTool from './AuditTool';

export const metadata: Metadata = constructMetadata(pageMeta.websiteAudit);

const whatWeCheck = [
  { title: 'AI search readiness', desc: 'Whether ChatGPT, Perplexity, Gemini and Google’s AI Overviews can read and quote the page: AI crawler access, text without JavaScript, business schema, question-style headings, snippet limits.' },
  { title: 'SEO basics', desc: 'Indexing, HTTPS, title, meta description, H1, canonical, sitemap, robots.txt, alt text, social preview, mobile viewport, internal links, favicon.' },
  { title: 'Lead capture', desc: 'Enquiry form, WhatsApp click-to-chat and direct contact links: the things that turn a visit into a conversation.' },
  { title: 'Tracking', desc: 'Google Analytics 4, Tag Manager, Meta Pixel and Google Ads tags, so you know which source brings enquiries.' },
  { title: 'Speed', desc: 'Server response time, page weight, render-blocking scripts and lazy-loaded images.' },
  { title: 'Trust', desc: 'Privacy policy and links to your real social profiles.' },
];

const faqs = [
  { question: 'Is the Website Audit really free?', answer: 'Yes. There is no sign-up, no email needed and no limit beyond a few audits per hour to keep the tool fast for everyone.' },
  { question: 'What does the AI visibility check look at?', answer: 'It checks whether AI search tools can read and quote your page: whether robots.txt lets AI crawlers in, whether your text is in the HTML without JavaScript, whether you have Organization schema with sameAs profile links, whether headings answer real questions, and whether snippets are restricted.' },
  { question: 'Does a high score mean I will rank first on Google or in ChatGPT?', answer: 'No. The score shows whether the basics are in place. Rankings also depend on your content, your competitors, reviews and links from other websites, which a one-page check cannot measure.' },
  { question: 'Why does it say my tracking is missing when I have it installed?', answer: 'If your tags load only after a visitor accepts cookies, or are added by a plugin after the page loads, they may not be in the raw HTML the tool reads. Check in Google Tag Assistant to be sure.' },
  { question: 'Do you store my website or results?', answer: 'No. The page is fetched once, checked and the result is shown to you. Nothing is saved.' },
  { question: 'Which page should I check?', answer: 'Start with the page your ads or Google Business Profile send people to, usually the homepage or a landing page. Then check your most important service or project page.' },
  { question: 'Can someone go through the results with me?', answer: 'Yes. Ask for a free marketing audit and Muddassir Ali, the founder, will review your pages, ads and lead follow-up personally and walk you through the fixes.' },
];

export default function WebsiteAuditPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE_URL}/tools/website-audit#app`,
    name: 'Website Audit',
    alternateName: 'Free Website Audit and AI Visibility Check',
    url: `${SITE_URL}/tools/website-audit`,
    description: pageMeta.websiteAudit.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any (web browser)',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    provider: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Guides', href: '/guides' }, { name: 'Website Audit', href: '/tools/website-audit' }]} />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-container-max mx-auto px-gutter max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Free tool · No sign-up
          </span>
          <h1 className="mt-4 text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight">
            Free Website Audit and AI Visibility Check
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Enter any web page. In under a minute you get a score for AI search readiness, SEO basics, lead capture, tracking,
            speed and trust, with a plain-English fix for every problem and the five to do first.
          </p>
          <div className="mt-8">
            <AuditTool />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">What the audit checks</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatWeCheck.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">{w.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            New to these terms? The <Link href="/guides#glossary" className="text-royal-blue font-semibold underline">glossary</Link> explains
            GEO, AEO, AI Overviews and schema in one line each, and the <Link href="/guides" className="text-royal-blue font-semibold underline">guides</Link> show how to fix each item.
          </p>
        </div>
      </section>

      <FaqAccordion customFaqs={faqs} title="About the Website Audit" badgeText="FAQ" description="How the tool works and what the score means." />
    </>
  );
}
