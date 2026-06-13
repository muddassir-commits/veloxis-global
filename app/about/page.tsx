import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  ExternalLink, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Briefcase, 
  Globe 
} from 'lucide-react';
import { Linkedin } from '../../components/ui/BrandIcons';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { FaqAccordion } from '../../components/sections/FaqAccordion';

// 1. Dynamic Metadata with E-E-A-T optimization
export function generateMetadata(): Metadata {
  return constructMetadata({
    title: pageMeta.about.title,
    description: pageMeta.about.description,
    path: pageMeta.about.path
  });
}

export default function AboutPage() {
  const breadcrumbItems = [{ name: 'About Us', href: '/about' }];

  // 2. Organization + Person Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://veloxisglobal.com/#organization",
    "name": "Veloxis Global",
    "url": "https://veloxisglobal.com",
    "logo": "https://veloxisglobal.com/images/logos/logo.png",
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Muddassir Ali",
      "url": "https://www.linkedin.com/in/muddassir-alii/",
      "sameAs": [
        "https://www.linkedin.com/in/muddassir-alii/",
        "https://muddassirali.com"
      ]
    },
    "sameAs": [
      "https://www.instagram.com/veloxisglobal/",
      "https://www.linkedin.com/company/111872222/",
      "https://www.facebook.com/veloxisglobal/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918887620727",
      "email": "muddassir@veloxisglobal.com",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://veloxisglobal.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://veloxisglobal.com/about"
      }
    ]
  };

  const certifications = [
    {
      title: "Google Ads Search Certification",
      issuer: "Google Skillshop",
      status: "Verified",
      link: "https://skillshop.exceedlms.com/student/path/18128-google-ads-search-certification"
    },
    {
      title: "Google Analytics 4 Certification",
      issuer: "Google Skillshop",
      status: "Verified",
      link: "https://skillshop.exceedlms.com/student/path/29485-google-analytics-individual-qualification"
    },
    {
      title: "HubSpot Digital Marketing",
      issuer: "HubSpot Academy",
      status: "Certification in progress",
      link: "#"
    }
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5 text-royal-blue" />,
      title: "Results First",
      desc: "Every strategy is measured by business outcomes, not vanity metrics."
    },
    {
      icon: <Eye className="w-5 h-5 text-royal-blue" />,
      title: "Radical Transparency",
      desc: "You see everything — reports, spend, results. No black boxes."
    },
    {
      icon: <Users className="w-5 h-5 text-royal-blue" />,
      title: "Long-term Thinking",
      desc: "We build relationships, not just campaigns."
    },
    {
      icon: <Globe className="w-5 h-5 text-royal-blue" />,
      title: "🇮🇳 Built for Indian Businesses",
      desc: "We understand Indian businesses — their culture, their customers, and what digital marketing actually takes to work in India."
    }
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={organizationSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-royal-blue/20 blur-[128px]"></div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-[800px] flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-royal-blue uppercase tracking-wider">
              GROWTH PARTNER
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              We're Not Just an Agency — We're Your Growth Partner
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              At Veloxis Global, we engineer structured client acquisition engines combining performance advertising, search optimization, and custom AI automations.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story copy (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">
                FOUNDING STORY
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Genesis & Philosophy
              </h2>
              
              <p>
                I started this agency with one simple belief — digital marketing should bring real business growth, not just likes, views, or empty promises.
              </p>
              
              <p>
                My name is <strong>Muddassir Ali</strong>, founder of Veloxis Global, a digital marketing agency focused on helping businesses generate leads, increase sales, and build strong online systems using digital marketing, paid advertising, SEO, and AI automation.
              </p>
              
              <p>
                My journey started with a deep interest in social media marketing and online business growth. Over the years, I worked with educational institutes, local businesses, e-commerce brands, real estate companies, and startups. While working with different clients, I noticed a common problem — many businesses were spending money on ads and marketing, but they didn’t have the right systems to convert those leads into customers.
              </p>
              
              <div className="border-l-4 border-royal-blue pl-4 py-2 my-2 italic text-slate-900 font-semibold bg-slate-50">
                That is where my approach became different.
              </div>
              
              <p>
                Instead of only running Facebook Ads or Instagram campaigns, I started building complete marketing systems. These systems included lead generation, WhatsApp automation, CRM integration, AI-powered follow-ups, landing pages, SEO optimization, and performance tracking. The goal was simple: help businesses grow faster with smarter digital marketing.
              </p>
              
              <p>
                With more than 6 years of experience in digital marketing, I have worked on Meta Ads campaigns, SEO projects, social media management, website optimization, and AI automation workflows. I have also trained hundreds of students in digital marketing and helped businesses improve their online visibility and customer acquisition process.
              </p>
              
              <p>
                Today, Veloxis Global works as a growth partner for businesses that want more than basic marketing services. We help brands create scalable systems that attract the right audience, automate repetitive tasks, improve customer communication, and increase conversions.
              </p>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 mt-4">
                <span className="font-extrabold text-slate-900 block mb-3">Our Core Core Pillars:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Digital Marketing Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Facebook & Instagram Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>SEO Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Lead Generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>WhatsApp Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>AI-Powered Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>CRM & Funnel Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Website Optimization</span>
                  </div>
                </div>
              </div>

              <p className="mt-4">
                We believe modern businesses need more than traditional marketing. They need automation, data-driven decisions, and consistent lead generation systems that work 24/7. At Veloxis Global, every project is built with a long-term growth mindset. This agency was built to help businesses grow with smart marketing, powerful automation, and real strategy — not guesswork.
              </p>
            </div>

            {/* Founder Card (Right) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 max-w-[380px] mx-auto bg-slate-100 aspect-[4/5]">
                <Image 
                  src="/images/profiles/Muddassir_Ali.webp" 
                  alt="Muddassir Ali" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Info Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 w-full max-w-[380px] mx-auto text-left relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue/20 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-extrabold mb-1">Muddassir Ali</h3>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider block mb-4">
                  Founder & CEO
                </span>

                <div className="flex flex-col gap-3 text-sm text-slate-300 font-semibold mb-6">
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>4 Years in Digital Marketing</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Google & HubSpot Certified</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
                  <Link 
                    href="https://www.linkedin.com/in/muddassir-alii/" 
                    target="_blank"
                    className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-lg text-xs font-bold text-white"
                  >
                    <span>Connect on LinkedIn</span>
                    <Linkedin className="w-4 h-4 text-royal-blue" />
                  </Link>
                  <Link 
                    href="https://muddassirali.com" 
                    target="_blank"
                    className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-lg text-xs font-bold text-white"
                  >
                    <span>Founder Portfolio</span>
                    <ExternalLink className="w-4 h-4 text-royal-blue" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
              <span className="bg-royal-blue/10 text-royal-blue text-xs font-bold uppercase px-3 py-1 rounded-full w-fit">
                OUR MISSION
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Data-Driven & Honest growth
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                "To help every business in India unlock the power of digital marketing with honest, data-driven strategies and no fluff."
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
              <span className="bg-teal-accent/15 text-teal-accent text-xs font-bold uppercase px-3 py-1 rounded-full w-fit">
                OUR VISION
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Dominating Regional Digital Growth
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                "To be India's most trusted digital growth partner — starting from Kanpur and growing to serve businesses across the country by 2027."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl mx-auto flex flex-col items-start gap-4">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">
              OPERATIONAL MODEL
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A Lean, Results-First Infrastructure
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mt-2">
              "Veloxis Global is a lean, focused agency. I work with a trusted network of SEO specialists, content writers, designers, and ads managers — bringing in the right expertise for each client's needs. No bloated retainer, no unnecessary overhead. Just results."
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              E-E-A-T CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industry Certifications & Audits
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We strictly adhere to industry verification standards set by official marketing publishers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((c, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between items-start gap-6">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue mb-2">
                    {c.link === '#' ? <BookOpen className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    {c.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    {c.issuer}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full pt-4 border-t border-slate-50">
                  <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                    c.status === 'Verified' ? 'bg-teal-accent/10 text-teal-accent' : 'bg-orange-400/10 text-orange-500'
                  }`}>
                    {c.status}
                  </span>
                  {c.link !== '#' && (
                    <Link 
                      href={c.link} 
                      target="_blank"
                      className="text-xs font-bold text-royal-blue hover:text-royal-blue/80 flex items-center gap-1"
                    >
                      <span>Verify ↗</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Four Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-100">
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About FAQs */}
      <FaqAccordion
        title="About Veloxis Global FAQs"
        badgeText="FAQ"
        customFaqs={[
          {
            question: "Who is the founder of Veloxis Global?",
            answer: "Veloxis Global was founded by Muddassir Ali, a digital marketing consultant with over 6 years of experience in lead generation, search engine optimization (SEO), Meta ads campaigns, and marketing CRM integrations."
          },
          {
            question: "Where is Veloxis Global based?",
            answer: "Veloxis Global is based in Kanpur, Uttar Pradesh, India. However, we operate on a remote-first collaborative model, servicing clients across Delhi NCR, Noida, Lucknow, and international markets."
          },
          {
            question: "What makes Veloxis Global different from traditional agencies?",
            answer: "We don't sell vanity metrics like impressions or clicks. We build complete sales pipelines, linking paid traffic directly with custom-built landing pages, lead routing mechanisms, WhatsApp automations, and CRM integrations for clear business growth."
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
        
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest">
              LET'S COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Let's Build Something Great Together
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Schedule a direct 30-minute growth strategy discovery call with Muddassir or connect on LinkedIn to talk campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link 
                href="https://calendly.com/veloxis-global/30min" 
                target="_blank"
                className="bg-royal-blue text-white px-8 py-4 font-bold rounded-lg transition-colors hover:bg-royal-blue/90 w-full sm:w-auto text-center"
              >
                Book Discovery Call →
              </Link>
              <Link 
                href="https://www.linkedin.com/in/muddassir-alii/" 
                target="_blank"
                className="border border-white/20 hover:bg-white/10 px-8 py-4 font-bold rounded-lg transition-colors text-white w-full sm:w-auto text-center"
              >
                LinkedIn Profile ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
