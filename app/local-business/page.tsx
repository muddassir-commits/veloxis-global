import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, MapPin, Star, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo-config';
import { getServiceSchema } from '../../lib/schema';
import { siteData } from '../../data/site';

// Local business offer (Nov 2026): websites, local SEO and Google Business Profile for small
// businesses in India, the UK and the US. Linked from the homepage industries strip, footer and About.
const DESCRIPTION =
  'Websites, local SEO and Google Business Profile for clinics, salons, trades and shops in India, the UK and the US. Free audit, month-to-month, no lock-in.';

export const metadata: Metadata = constructMetadata({
  title: 'Websites & Local SEO for Small Businesses | Veloxis Global',
  description: DESCRIPTION,
  path: '/local-business',
});

const WHATSAPP = 'https://wa.me/919194020727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20website%20audit';

const services = [
  {
    icon: Globe,
    title: 'A website that brings calls',
    desc: 'A fast, mobile-first site with your services, prices you choose to show, reviews and a clear call, WhatsApp or booking button on every page.',
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    desc: 'Service and area pages, on-page SEO and listings so you show up when people nearby search for what you do.',
  },
  {
    icon: Star,
    title: 'Google Business Profile',
    desc: 'Profile set up or cleaned up, categories, photos and posts, plus a simple way to ask happy customers for reviews.',
  },
  {
    icon: MessageCircle,
    title: 'Enquiry follow-up',
    desc: 'Form, call and WhatsApp enquiries land in one place, with an instant reply so no lead waits until tomorrow.',
  },
];

const steps = [
  { title: 'Free website audit', desc: 'Send your website or Google profile. We check speed, mobile layout, search visibility and how easy it is to contact you.' },
  { title: 'A fixed quote', desc: 'You get a written list of what we would build or fix first and one fixed price. No long contract.' },
  { title: 'Build, launch and report', desc: 'We build or fix the site and profile, then send a short monthly report on calls, forms and search visibility.' },
];

const fit = [
  'Clinics, dental practices, salons, gyms, trades, repair services, shops and other local businesses',
  'In India, the UK, the US or anywhere you want more local customers',
  'You have no website, an old one, or one that brings no calls',
  'You want one team for the website, Google profile and follow-up, month-to-month',
];

const faqs = [
  {
    question: 'What does Veloxis Global do for local businesses?',
    answer:
      'We build or fix your website, set up local SEO and your Google Business Profile, and connect form, call and WhatsApp enquiries so every lead gets a fast reply.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. We work remotely with businesses in the UK, the US and other countries, on email, WhatsApp and video calls, in your time zone where needed.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'It depends on the number of pages and features. After the free audit we send one fixed quote in writing, with no hidden monthly fees unless you choose ongoing SEO.',
  },
  {
    question: 'How long until I see results from local SEO?',
    answer:
      'Google Business Profile changes can show within a few weeks. Website rankings usually take a few months, depending on your area and competition. We report progress every month.',
  },
  {
    question: 'Will I own the website?',
    answer: 'Yes. The domain, website and Google profile stay in your name, and you keep everything if you stop working with us.',
  },
  {
    question: 'Do you have case studies for local businesses?',
    answer:
      'Not yet published. We would rather show you a free audit of your own website and profile than claim results we cannot show.',
  },
  {
    question: 'Can you get my business to the top of Google Maps?',
    answer:
      'Nobody can honestly promise a top position on Google Maps. We set up and keep your profile complete and accurate the way Google’s own guidelines describe, and show you each month what changed.',
  },
  {
    question: 'Can you fix my current website instead of building a new one?',
    answer:
      'Often, yes. If your site can be edited, the free audit lists what to fix first. We suggest a new site only when fixing the old one is not worth the effort.',
  },
];

export default function LocalBusinessPage() {
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: 'Websites and local SEO for small businesses',
          description: DESCRIPTION,
          path: '/local-business',
          serviceType: 'Website design and local SEO',
          audience: 'Local and small businesses',
        })}
      />

      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Local businesses', href: '/local-business' }]} />
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
              For local businesses
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              More calls from people searching nearby
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              A website that turns visitors into calls, local SEO, and a Google Business Profile that shows up in Maps.
              For clinics, salons, trades and shops in India, the UK and the US.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="local-hero-btn" href={WHATSAPP} variant="primary" size="lg" className="w-full sm:w-auto">
                Get a free website audit →
              </Button>
              <Link
                id="local-hero-email"
                href={`mailto:${siteData.email}?subject=Free%20website%20audit`}
                className="text-[15px] font-bold text-white/85 hover:text-white transition-colors px-5 py-3 border border-white/25 rounded-xl hover:bg-white/10 text-center"
              >
                Email us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-xl lg:max-w-none">
            <ImageFrame
              src="/images/people/blog/local-seo-man-phone-market.jpg"
              alt="A shop owner checking his phone at a local market"
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
              From search to a phone call
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Most local customers search on their phone, compare two or three businesses and call the one that looks
              easiest to trust. Your website and Google profile have to win that moment.
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
          <p className="text-center mt-10 text-sm text-slate-600">
            Want to check your own site first? Try our{' '}
            <Link href="/tools/website-audit" className="font-bold text-royal-blue hover:underline">free website audit tool</Link>.
          </p>
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
              <h3 className="text-lg font-bold mb-2">Start with a free website audit</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Send your website or Google profile link on WhatsApp or email. We reply personally with the first changes
                we would make.
              </p>
              <Button id="local-steps-btn" href={WHATSAPP} variant="white" className="w-full sm:w-auto">
                Message on WhatsApp →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        customFaqs={faqs}
        title="Local business questions"
        badgeText="FAQ"
        description="How we work with local businesses, what it costs and what you own."
      />
    </>
  );
}
