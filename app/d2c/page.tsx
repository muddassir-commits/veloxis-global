import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, LayoutTemplate, MessageCircle, LineChart, CheckCircle } from 'lucide-react';
import { WhatsAppLink } from '../../components/ui/WhatsAppLink';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo-config';
import { siteData } from '../../data/site';

// D2C offer page (public since Nov 2026): linked from the homepage industries strip, footer, About,
// llms.txt and the D2C follow-up emails.
export const metadata: Metadata = constructMetadata({
  title: 'D2C Marketing Agency: Meta Ads & Store Pages | Veloxis',
  description:
    'Meta ads, store pages that convert and WhatsApp and email follow-ups for Indian D2C brands, run by a small hands-on team and judged on orders, not clicks.',
  path: '/d2c',
});

const services = [
  {
    icon: Megaphone,
    title: 'Meta ads',
    desc: 'Campaigns on Facebook and Instagram for new buyers, plus retargeting for people who visited or added to cart.',
  },
  {
    icon: LayoutTemplate,
    title: 'Store pages that convert',
    desc: 'Product and landing pages that load fast on a phone and answer the questions that stop people buying.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp and email follow-ups',
    desc: 'Abandoned cart, browse and repeat-purchase reminders, so shoppers who left get a reason to come back.',
  },
  {
    icon: LineChart,
    title: 'Tracking and reporting',
    desc: 'Meta pixel, Conversions API and GA4 set up properly, and a weekly report on orders and cost per order.',
  },
];

const steps = [
  { title: 'Free store audit', desc: 'Send your website. We review your ads, store pages and follow-ups and list the 2-3 changes we would make first.' },
  { title: 'A plan for one month', desc: 'If it makes sense to work together, we agree on one product range, a budget and the numbers we will report on.' },
  { title: 'Launch and weekly reviews', desc: 'We run the ads and follow-ups, then review orders every week and move budget to what sells.' },
];

const fit = [
  'You sell on your own website (Shopify, WooCommerce or similar), with or without marketplaces',
  'You run Meta ads, or want to start, and you pay the ad budget to Meta directly',
  'You want a small team that works with you directly, not an account manager',
  'Month-to-month: no long contract',
];

const faqs = [
  {
    question: 'What does Veloxis do for D2C brands?',
    answer:
      'We run Meta ads, improve the store pages those ads send people to, and set up WhatsApp and email follow-ups for shoppers who did not buy. We report on orders and cost per order.',
  },
  {
    question: 'Do you only work with Shopify stores?',
    answer:
      'No. Shopify is the most common, but the same approach works for WooCommerce and other platforms as long as we can add tracking and edit the pages ads point to.',
  },
  {
    question: 'Who pays for the ads?',
    answer: 'You do, directly to Meta from your own ad account. Our fee is separate and the ad account stays yours.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'It depends on how many products and channels are involved. After the free audit we send a fixed monthly quote. There is no long contract.',
  },
  {
    question: 'Do you have D2C case studies?',
    answer:
      'Not yet published. Our public work so far is in real estate marketing. We would rather show you a free audit of your own store than claim results we cannot show.',
  },
  {
    question: 'What do you need for the free audit?',
    answer: 'Your website address, and if you run ads, a rough idea of your monthly budget and which products you push.',
  },
  {
    question: 'Who will work on my account?',
    answer:
      'A small team that plans and reviews every account directly, with Google Ads Search, Google Ads Apps and Google Analytics certifications. No junior account managers.',
  },
];

export default function D2CPage() {
  return (
    <>
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'D2C brands', href: '/d2c' }]} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
          <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
        </div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
              For D2C brands
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              More orders from your own website
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Meta ads, store pages that convert, and WhatsApp and email follow-ups for shoppers who didn’t buy. One
              hands-on team, judged on orders, not clicks.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <WhatsAppLink id="d2c-hero-btn" placement="hero" button={{ variant: 'primary', size: 'lg' }} className="w-full sm:w-auto">
                Get a free store audit →
              </WhatsAppLink>
              <Link
                id="d2c-hero-email"
                href={`mailto:${siteData.email}?subject=Free%20store%20audit`}
                className="text-[15px] font-bold text-white/85 hover:text-white transition-colors px-5 py-3 border border-white/25 rounded-xl hover:bg-white/10 text-center"
              >
                Email us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-xl lg:max-w-none">
            <ImageFrame
              src="/images/people/blog/web-man-phone-website.jpg"
              alt="A man at a desk browsing a website on his smartphone"
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What we do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The full path from ad to order
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Most shoppers don’t buy on their first visit. Ads, pages and follow-ups have to work together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group spotlight bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + fit */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">How it works</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Three simple steps</h2>
            <ol className="flex flex-col gap-5 stagger-reveal">
              {steps.map((step, i) => (
                <li key={step.title} className="group spotlight relative bg-white border border-slate-200 rounded-2xl p-6 flex gap-5 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5">
                  <span className="w-10 h-10 rounded-full bg-royal-blue text-white font-bold flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">A good fit if</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Who this is for</h2>
            <ul className="flex flex-col gap-4">
              {fit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 font-semibold leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-10 rounded-2xl bg-slate-900 text-white p-7">
              <span className="border-beam border-beam-light" aria-hidden="true" />
              <h3 className="text-lg font-bold mb-2">Start with a free store audit</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Send your website on WhatsApp or email. We reply personally with the first changes we would make.
              </p>
              <WhatsAppLink id="d2c-steps-btn" placement="steps" button={{ variant: 'white' }} className="w-full sm:w-auto">
                Message on WhatsApp →
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        customFaqs={faqs}
        title="D2C questions"
        badgeText="FAQ"
        description="How we work with D2C brands, what it costs and what we need from you."
      />
    </>
  );
}
