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
  { title: 'Speed and mobile', desc: 'Server response time, page weight, render-blocking scripts, lazy-loaded images and the mobile viewport tag.' },
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
  { question: 'How do I audit my website online for free?', answer: 'Paste the address of a page into the tool above and press the audit button. In under a minute you get a score and a list of fixes for SEO, speed, mobile, tracking, lead capture and AI search readiness. There is no sign-up and no email needed.' },
  { question: 'What is an SEO audit, and does this tool do one?', answer: 'An SEO audit checks whether search engines can find, read and understand your pages. This tool runs the technical and on-page part for one page: indexing, HTTPS, title, meta description, headings, canonical tag, sitemap, robots.txt, image alt text, mobile viewport and internal links. A full SEO audit also looks at keywords, competitors and links from other websites, which takes a person and more time.' },
  { question: 'Is this an AI website audit tool?', answer: 'It checks how ready your page is for AI search: whether ChatGPT, Perplexity, Gemini and Google’s AI Overviews can read and quote it, including AI crawler access, text available without JavaScript, business schema and question-style headings. The checks are rule-based, so the same page gets the same result each time.' },
  { question: 'Can I audit any website, including a competitor’s?', answer: 'Yes. Any public web page can be checked, whether it is your own site, a client’s or a competitor’s. Comparing your page with a competitor’s is a quick way to see which basics you are missing.' },
  { question: 'Does it check speed and mobile friendliness?', answer: 'It does a quick server-side speed check (response time, page weight, render-blocking scripts, lazy-loaded images) and checks the mobile viewport tag. For detailed speed fixes, also run Google PageSpeed Insights, which loads the page in a browser.' },
  { question: 'Does a high score mean I will rank first on Google or in ChatGPT?', answer: 'No. The score shows whether the basics are in place. Rankings also depend on your content, your competitors, reviews and links from other websites, which a one-page check cannot measure.' },
  { question: 'Why does it say my tracking is missing when I have it installed?', answer: 'The tool reads the page HTML and your site’s own script files. If your tags load only after a visitor accepts cookies, or a plugin adds them later from another domain, the tool may not see them. Check in Google Tag Assistant to be sure.' },
  { question: 'Do you store my website or results?', answer: 'No. The page is fetched once, checked and the result is shown to you. Nothing is saved.' },
  { question: 'Can someone go through the results with me?', answer: 'Yes. Ask for a free marketing audit and our team will review your pages, ads and lead follow-up personally and walk you through the fixes.' },
];

export default function WebsiteAuditPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE_URL}/tools/website-audit#app`,
    name: 'Website Audit',
    alternateName: 'Free Website Audit Tool: SEO, Speed, Mobile and AI Search Check',
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
            Free Website Audit Tool: Check SEO, Speed and Mobile
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Audit your website online for free. Enter any web page, whether it is a store, a clinic site, a service business or a
            property page, and in under a minute you get a score for SEO basics, speed and mobile, tracking, lead capture, trust and
            AI search readiness, with a plain-English fix for every problem and the five to do first.
          </p>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Use it as an AI website audit tool for the AI-search checks, or as a quick SEO audit before you spend on ads or hire anyone.
            It works for any business, and it audits one page at a time, so start with the page your ads or Google listing send people to.
          </p>
          <ReviewedLine className="text-slate-500 mt-3" />
          <div className="mt-8">
            <AuditTool />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">What this website audit checks</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatWeCheck.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">{w.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Want a person to go through it with you? See our <Link href="/services/seo" className="text-royal-blue font-semibold underline">SEO and local SEO service</Link> or
            ask for a <Link href="/free-audit" className="text-royal-blue font-semibold underline">free marketing audit</Link>.
          </p>
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
