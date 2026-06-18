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
  Globe,
  Search,
  Layers,
  Zap,
  MessageSquare,
  TrendingUp
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
    "logo": "https://veloxisglobal.com/images/logos/logo.webp",
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
      "email": "info@veloxisglobal.com",
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
              We Are the Best Digital Marketing Agency & Lead Generation Partner
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Veloxis Global is a top digital marketing agency in India. We help businesses grow by building automated lead generation services, paid advertising campaigns, and search engine optimization services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story copy (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">
                OUR STORY
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                How Veloxis Global Helps Businesses Grow
              </h2>
              
              <p>
                Veloxis Global was started with one main goal: to make digital marketing simple, clear, and highly profitable. We believe that every marketing campaign should bring real business sales, not just views, likes, or empty promises.
              </p>
              
              <p>
                As a leading **digital marketing agency in India**, we focus on building predictable client acquisition engines. This means we design systems that combine high-performing paid ads, organic search engine optimization, and custom CRM automation to help you get more customers consistently.
              </p>
              
              <p>
                We noticed that many businesses spend a lot of money on a **paid advertising company** or social media ads, but they do not have a good system to convert those leads into paying customers. Veloxis Global was created to solve this exact problem by building end-to-end marketing funnels.
              </p>
              
              <div className="border-l-4 border-royal-blue pl-4 py-2 my-2 italic text-slate-900 font-semibold bg-slate-50">
                We do not just run ads. We set up complete lead generation systems for your business.
              </div>
              
              <p>
                Instead of running single Facebook or Google ads, we build a complete customer journey. We combine targeted traffic from Facebook ads marketing and Google Ads PPC services with automated WhatsApp follow-ups, CRM lead tracking, and conversion-optimized landing pages. This keeps your sales pipeline full and makes sure no lead is wasted.
              </p>
              
              <p>
                Today, Veloxis Global serves as a trusted growth partner for companies in real estate, e-commerce, coaching, legal, and software industries. We help brands automate their daily sales tasks, optimize their websites, and scale their customer growth using real data and honest strategies.
              </p>
            </div>

            {/* Agency Approach (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <span className="text-xs font-extrabold text-royal-blue uppercase tracking-wider block mb-4">OUR SERVICES</span>
                <div className="flex flex-col gap-3.5 text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" />
                    <span>Facebook Ads Marketing & Google PPC</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" />
                    <span>Search Engine Optimization Services (SEO)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" />
                    <span>WhatsApp Automation for Business</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" />
                    <span>CRM Lead Management & Sales Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" />
                    <span>High-Converting Landing Page Design</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" />
                    <span>Full Website Optimization & SEO Audits</span>
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-white/5 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-royal-blue/10 rounded-full blur-xl"></div>
                  <span className="text-2xl sm:text-3xl font-black text-royal-blue block">62+</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block mt-1">SEO Audits Done</span>
                </div>
                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-white/5 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-teal-accent/10 rounded-full blur-xl"></div>
                  <span className="text-2xl sm:text-3xl font-black text-teal-accent block">100%</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block mt-1">ROI Focus</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Digital Marketing Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              OUR WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Step Digital Marketing Process
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              We do not believe in guessing. We use a clear, step-by-step method to audit, build, and scale your customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">01</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Detailed Audit
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We look at your website speed, SEO keywords, and current ads as a **website optimization company** and **best SEO agency** to find issues.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">02</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Funnel Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We design high-converting landing pages and map out a customer journey focused on **sales funnel optimization**.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">03</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  High-Performance Traffic
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We launch custom campaigns as a **Meta Ads performance agency** and manage your **Google Ads PPC services** to drive real buyers.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">04</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Sales Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We set up **WhatsApp automation for business** and **sales pipeline automation** to contact and close leads instantly.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">05</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Scale & Optimize
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  As a performance-focused **lead generation agency**, we analyze data weekly to scale campaigns and get you **ROI-focused digital marketing**.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white text-left">
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
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
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
      <section className="py-20 bg-white text-left">
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
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
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

      {/* Founder Profile Section */}
      <section className="py-20 bg-white border-t border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-[380px] mx-auto bg-slate-100 aspect-[4/5]">
                <Image 
                  src="/images/profiles/Muddassir_Ali.webp" 
                  alt="Muddassir Ali" 
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right side: Bio & Info */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">
                MEET THE FOUNDER
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Muddassir Ali
              </h2>
              <span className="text-sm font-bold text-slate-500 -mt-4 uppercase tracking-widest block">
                Founder, Digital Marketing Consultant & Lead Generation Specialist
              </span>
              
              <p>
                Muddassir Ali is the founder of Veloxis Global. He is a professional **digital marketing consultant** with more than 6 years of experience helping businesses get more customers. He specializes in setting up **B2B lead generation systems** and client acquisition engines that run on autopilot.
              </p>
              
              <p>
                After working with many local businesses, training institutes, and real estate brands, Muddassir realized that most companies waste money on ads because they do not have a good follow-up system. To solve this, he started Veloxis Global, which is now recognized as a trusted provider of **digital marketing services in Kanpur** and across India. He helped build this **marketing automation agency** to ensure businesses can turn cold traffic into loyal clients.
              </p>
              
              <p>
                Muddassir is certified by Google and HubSpot. He manages ad campaigns, optimizes websites for search engines, and builds automation flows that nurture leads. He keeps things simple, honest, and focused on helping your business make more money.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                <Link 
                  href="https://www.linkedin.com/in/muddassir-alii/" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-royal-blue hover:bg-royal-blue/90 transition-colors px-6 py-3 rounded-xl text-xs font-bold text-white shadow-sm shadow-royal-blue/20 animate-fade-in"
                >
                  <span>Connect on LinkedIn ↗</span>
                  <Linkedin className="w-4 h-4 text-white" />
                </Link>
                <Link 
                  href="https://muddassirali.com" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-colors px-6 py-3 rounded-xl text-xs font-bold text-slate-700"
                >
                  <span>Founder Portfolio ↗</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>

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
            answer: "Veloxis Global was founded by Muddassir Ali, a digital marketing consultant with over 6 years of experience in lead generation services, search engine optimization (SEO), Meta ads, and sales automation."
          },
          {
            question: "Where is Veloxis Global based?",
            answer: "Veloxis Global is based in Kanpur, Uttar Pradesh, India. If you are looking for the best digital marketing services in Kanpur, we are here to help you. We also work with businesses in Noida, Delhi NCR, Lucknow, and other countries."
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
