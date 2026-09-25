'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { openCookieSettings } from '../../lib/consent';
import { Facebook, Instagram, Linkedin, XLogo } from '../ui/BrandIcons';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { ChevronDown, ChevronUp, ArrowUp, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { siteData } from '../../data/site';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setSuccess(null);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccess(true);
        setEmail('');
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0B0F19] text-white pt-20 pb-8 border-t border-slate-800/40 font-sans relative overflow-hidden">
      {/* Background radial glow decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-royal-blue/5 blur-[128px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-royal-blue/5 blur-[96px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">

        {/* Tier 1: Brand & Hero CTA Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-white/5 items-center">

          {/* Brand Info (col span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <Link href="/" className="flex items-center w-fit">
              <Image
                src="/images/logos/logo-footer.webp"
                alt="Veloxis Global"
                width={170}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[15px] sm:text-[16px] text-slate-400 leading-relaxed max-w-lg">
              A real estate marketing agency for builders, brokers and channel partners. We build project landing pages, run Meta and Google ads, and set up WhatsApp automation — measured on site visits.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-slate-400">
                Real estate only
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-slate-400">
                Founder-led
              </span>
            </div>
          </div>

          {/* Premium Callout Card (col span 6) */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-md shadow-lg shadow-black/20 text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-royal-blue/10 rounded-full blur-2xl"></div>
              <div className="flex flex-col gap-2 max-w-md">
                <span className="text-xs font-black tracking-widest text-blue-300 uppercase">FREE MARKETING AUDIT</span>
                <p className="text-lg sm:text-xl font-extrabold text-white">Want more site visits from your ad budget?</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Book a free audit call with the founder. We&apos;ll review your pages, ads and lead follow-up and show you what to fix first.
                </p>
              </div>
              <div className="shrink-0 w-full sm:w-auto text-center">
                <Button
                  href="/contact"
                  variant="primary"
                  className="!rounded-full hover:shadow-lg w-full sm:w-auto text-xs py-3.5 px-6 shrink-0"
                >
                  Get Free Audit →
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Tier 2: Link Directory Sitemap columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-16 text-left border-b border-white/5">

          {/* Services Column (span 3) */}
          <div className="lg:col-span-3 flex flex-col md:gap-5 border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('services')}
              aria-expanded={openSection === 'services'}
              aria-controls="footer-services-list"
              className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
            >
              <span className="text-[12px] tracking-[0.08em] uppercase text-slate-200 font-black">SERVICES</span>
              <span className="md:hidden text-slate-400">
                {openSection === 'services' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul
              id="footer-services-list"
              className={`flex flex-col gap-3 text-[14px] text-slate-400 mt-3 md:mt-0 ${openSection === 'services' ? 'block' : 'hidden md:flex'}`}
            >
              {/* New services will be added here */}
              <li>
                <Link href="/services/high-converting-landing-pages" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Landing Pages &amp; Microsites
                </Link>
              </li>
              <li>
                <Link href="/services/paid-ads" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Meta & Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  WhatsApp Chatbot &amp; Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column (span 3) */}
          <div className="lg:col-span-3 flex flex-col md:gap-5 border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('locations')}
              aria-expanded={openSection === 'locations'}
              aria-controls="footer-locations-list"
              className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
            >
              <span className="text-[12px] tracking-[0.08em] uppercase text-slate-200 font-black">WHO WE HELP</span>
              <span className="md:hidden text-slate-400">
                {openSection === 'locations' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul
              id="footer-locations-list"
              className={`flex flex-col gap-3 text-[14px] text-slate-400 mt-3 md:mt-0 ${openSection === 'locations' ? 'block' : 'hidden md:flex'}`}
            >
              <li>
                <Link href="/industries/real-estate" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Developers &amp; Builders
                </Link>
              </li>
              <li>
                <Link href="/channel-partners" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Channel Partners &amp; Brokers
                </Link>
              </li>
              <li>
                <Link href="/playbooks" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Example Playbooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column (span 3) */}
          <div className="lg:col-span-3 flex flex-col md:gap-5 border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('company')}
              aria-expanded={openSection === 'company'}
              aria-controls="footer-company-list"
              className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
            >
              <span className="text-[12px] tracking-[0.08em] uppercase text-slate-200 font-black">COMPANY</span>
              <span className="md:hidden text-slate-400">
                {openSection === 'company' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul
              id="footer-company-list"
              className={`flex flex-col gap-3 text-[14px] text-slate-400 mt-3 md:mt-0 ${openSection === 'company' ? 'block' : 'hidden md:flex'}`}
            >
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link href="/free-audit" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Free Marketing Audit
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (span 3) */}
          <div className="lg:col-span-3 flex flex-col md:gap-5 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('contact')}
              aria-expanded={openSection === 'contact'}
              aria-controls="footer-contact-info"
              className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
            >
              <span className="text-[12px] tracking-[0.08em] uppercase text-slate-200 font-black">GET IN TOUCH</span>
              <span className="md:hidden text-slate-400">
                {openSection === 'contact' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <div
              id="footer-contact-info"
              className={`flex flex-col gap-4 text-[14px] mt-3 md:mt-0 ${openSection === 'contact' ? 'block' : 'hidden md:flex'}`}
            >
              <a href={`tel:${siteData.phoneRaw}`} className="text-slate-300 hover:text-royal-blue transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-royal-blue shrink-0" />
                <span>{siteData.phone}</span>
              </a>
              <a href={`mailto:${siteData.email}`} className="text-slate-300 hover:text-royal-blue transition-colors flex items-center gap-2 break-all">
                <Mail className="w-4 h-4 text-royal-blue shrink-0" />
                <span>{siteData.email}</span>
              </a>
              <div className="text-slate-400 flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0 mt-1" />
                <span>{siteData.address}</span>
              </div>

              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-2 transition-all duration-300 w-full text-center shadow-md shadow-emerald-950/20"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Tier 3: Newsletter Signup Horizontal Panel */}
        <div className="py-12 border-b border-white/5">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-md">

            {/* Newsletter text details */}
            <div className="text-left flex flex-col gap-1 max-w-xl">
              <p className="text-base sm:text-lg font-extrabold text-white">Real estate marketing tips, by email</p>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Get property lead gen strategies, ad campaign blueprints, and conversion optimization tips for NCR developers.
              </p>
            </div>

            {/* Newsletter Input Form */}
            <div className="w-full lg:w-auto min-w-[280px] sm:min-w-[420px]">
              {success === true ? (
                <p className="text-royal-blue text-[14px] font-bold text-left py-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Subscribed successfully! Thank you for joining.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <label htmlFor="footer-email-input" className="sr-only">Your business email</label>
                    <input
                      id="footer-email-input"
                      type="email"
                      placeholder="Your business email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-royal-blue w-full text-sm font-sans"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="!rounded-xl text-xs py-3 px-6 shrink-0"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </Button>
                </form>
              )}
              {success === false && (
                <p className="text-red-400 text-xs font-semibold text-left mt-2">
                  Error subscribing. Please try again.
                </p>
              )}
            </div>

          </div>
        </div>

        {/* Tier 4: Bottom Copyright & Symmetrical Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-slate-400 font-semibold font-sans">

          {/* Brand Copyright and social row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Veloxis Global. All Rights Reserved.</span>

            {/* Social media items */}
            <div className="flex items-center gap-2.5" aria-label="Social media links">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/veloxisglobal/', label: 'Facebook' },
                { icon: Instagram, href: 'https://www.instagram.com/veloxisglobal/', label: 'Instagram' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/111872222/', label: 'LinkedIn' },
                { icon: XLogo, href: 'https://x.com/veloxisglobal', label: 'X' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 bg-white/5 hover:bg-royal-blue transition-all duration-300 rounded-full flex items-center justify-center text-white hover:-translate-y-0.5"
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Privacy & Sitemap links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <button type="button" onClick={openCookieSettings} className="hover:text-white transition-colors duration-300">
              Cookie settings
            </button>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
            <span className="text-slate-400 font-normal">
              Founded & run by Muddassir Ali
            </span>
          </div>

          {/* Interactive Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Scroll to top of the page"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-royal-blue hover:text-white text-slate-400 hover:border-royal-blue transition-all duration-300 shadow-md group shrink-0"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
