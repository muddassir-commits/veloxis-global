import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata, pageMeta, SITE_URL } from '../../../lib/seo-config';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { ORG_ID } from '../../../lib/schema';
import AuditTool from './AuditTool';
import { ReviewedLine } from '../../../components/ui/ReviewedLine';

export const metadata: Metadata = constructMetadata(pageMeta.websiteAudit);

const whatWeCheck = [
  { title: 'AI search readiness', desc: 'Whether ChatGPT, Perplexity, Gemini and Google’s AI Overviews can read and quote the page: AI crawler access, text without JavaScript, business schema, question-style headings, snippet limits.' },
  { title: 'SEO basics', desc: 'Indexing, HTTPS, title, meta description, H1, canonical, sitemap, robots.txt, alt text, social preview, mobile viewport, internal links, favicon.' },
  { title: 'Lead capture', desc: 'Enquiry form, WhatsApp click-to-chat and direct contact links: the things that turn a visit into a conversation.' },
  { title: 'Tracking', desc: 'Google Analytics 4, Tag Manager, Meta Pixel and Google Ads tags, so you know which source brings enquiries.' },
  { title: 'Speed', desc: 'Server response time, page weight, render-blocking scripts and lazy-loaded images.' },
  { title: 'Trust', desc: 'Privacy policy and links to your real social profiles.' },
];

const howTo = [
  { title: 'Paste the address', desc: 'Enter the full address of one page, for example your homepage or the landing page your ads send people to. You can leave out https://.' },
  { title: 'Run the audit', desc: 'The tool fetches the page once, the same way a search engine or AI crawler would, and also reads your robots.txt, sitemap and llms.txt.' },
  { title: 'Read the scores', desc: 'You get one overall score out of 100 and a score for each area: AI search, SEO, lead capture, tracking, speed and trust. Each check shows pass, warning or fail.' },
  { title: 'Fix the top five first', desc: 'The report lists the five fixes with the biggest effect at the top. Each comes with a plain-English explanation of what to change, so you or your developer can act on it.' },
  { title: 'Run it again', desc: 'After making changes, audit the same page again to confirm the fix worked, then check your next most important page.' },
];

const faqs = [
  { question: 'Is the Website Audit really free?', answer: 'Yes. There is no sign-up, no email needed and no limit beyond a few audits per hour to keep the tool fast for everyone.' },
  { question: 'What does the AI visibility check look at?', answer: 'It checks whether AI search tools can read and quote your page: whether robots.txt lets AI crawlers in, whether your text is in the HTML without JavaScript, whether you have Organization schema with sameAs profile links, whether headings answer real questions, and whether snippets are restricted.' },
  { question: 'Does a high score mean I will rank first on Google or in ChatGPT?', answer: 'No. The score shows whether the basics are in place. Rankings also depend on your content, your competitors, reviews and links from other websites, which a one-page check cannot measure.' },
  { question: 'Why does it say my tracking is missing when I have it installed?', answer: 'The tool reads the page HTML and your site’s own script files. If your tags load only after a visitor accepts cookies, or a plugin adds them later from another domain, the tool may not see them. Check in Google Tag Assistant to be sure.' },
  { question: 'Is this a free SEO audit tool or a full SEO audit?', answer: 'It is a free, instant check of one page: the technical and on-page basics that decide whether a page can be found, read and acted on. A full SEO audit also looks at keywords, competitors and links from other websites, which takes a person and more time.' },
  { question: 'How is this different from Google PageSpeed Insights?', answer: 'PageSpeed Insights loads the page in a browser and measures speed in detail. This tool checks a wider set of basics (SEO tags, AI search readiness, lead capture, tracking and trust) and gives a quick speed check from the server side. Use both: this one for what is missing, PageSpeed for detailed speed fixes.' },
  { question: 'Can I audit a competitor’s website?', answer: 'Yes. Any public web page can be checked. Comparing your page with a competitor’s is a quick way to see which basics you are missing.' },
  { question: 'Do you store my website or results?', answer: 'No. The page is fetched once, checked and the result is shown to you. Nothing is saved.' },
  { question: 'Which page should I check?', answer: 'Start with the page your ads or Google Business Profile send people to, usually the homepage or a landing page. Then check your most important service or project page.' },
  { question: 'Can someone go through the results with me?', answer: 'Yes. Ask for a free marketing audit and our team will review your pages, ads and lead follow-up personally and walk you through the fixes.' },
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
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
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
            Free Website Audit Tool: SEO, Speed and AI Visibility Check
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Enter any web page for a free SEO audit and website performance check. In under a minute you get a score for AI search
            readiness, SEO basics, lead capture, tracking, speed and trust, with a plain-English fix for every problem and the five to do first.
          </p>
          <ReviewedLine className="text-slate-500 mt-3" />
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
          <h2 className="mt-16 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">How to use the free website audit</h2>
          <ol className="mt-8 flex flex-col gap-4">
            {howTo.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="w-8 h-8 rounded-full bg-royal-blue text-white text-sm font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <h2 className="mt-16 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">How to read your result</h2>
          <div className="mt-6 flex flex-col gap-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">A fail</strong> is something missing or broken that search engines, AI tools or
              visitors will notice, such as no page title, no enquiry form or AI crawlers blocked in robots.txt. Fix these first.
            </p>
            <p>
              <strong className="text-slate-900">A warning</strong> is in place but could be better, such as a meta description that
              is too long or a page that is heavy for mobile data.
            </p>
            <p>
              <strong className="text-slate-900">The score</strong> is a quick guide to how complete the basics are, not a ranking
              prediction. A page can score well and still rank low if its content, competition or links are weak; the{' '}
              <Link href="/blog/real-estate-seo-india" className="text-royal-blue font-semibold underline">SEO guide</Link> and the{' '}
              <Link href="/blog/generative-engine-optimization-guide" className="text-royal-blue font-semibold underline">GEO guide</Link>{' '}
              cover those parts.
            </p>
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
