'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin } from '../ui/BrandIcons';
import { Button } from '../ui/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

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

  const isAuditPage = pathname?.includes('free-seo-audit');

  if (isAuditPage) {
    return (
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800 text-center font-sans">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-left">
          <p>© {new Date().getFullYear()} Veloxis Global. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-16">

        {/* Col 1 — Brand (span 2 on desktop) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo-footer.png"
              alt="Veloxis Global"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-[16px] text-slate-400 leading-relaxed font-sans max-w-md">
            India&apos;s results-driven digital marketing agency — delivering
            measurable growth for businesses across India. Headquartered
            in Kanpur, serving clients pan-India.
          </p>

          {/* Social icons row — each link has aria-label for accessibility */}
          <div className="flex items-center gap-3" role="list" aria-label="Social media links">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/veloxisglobal/', label: 'Veloxis Global on Facebook' },
              { icon: Instagram, href: 'https://www.instagram.com/veloxisglobal/', label: 'Veloxis Global on Instagram' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/111872222/', label: 'Veloxis Global on LinkedIn' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  role="listitem"
                  className="w-10 h-10 bg-white/5 hover:bg-royal-blue transition-colors duration-300 rounded-full flex items-center justify-center text-white"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className="text-[12px] tracking-[0.02em] text-slate-500 font-semibold font-sans leading-relaxed">
            📍 12 Faithful Ganj, Cantt, Kanpur, UP — Serving Delhi · Noida · Lucknow · Kanpur
          </div>
        </div>

        {/* Col 2 — Services */}
        <div className="flex flex-col md:gap-6 border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
          <button
            onClick={() => toggleSection('services')}
            aria-expanded={openSection === 'services'}
            aria-controls="footer-services-list"
            className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
          >
            {/* p used instead of h4 — these are decorative column labels, not semantic headings */}
            <p className="text-[12px] tracking-[0.05em] uppercase text-slate-400 font-bold font-sans">SERVICES</p>
            <span className="md:hidden text-slate-400" aria-hidden="true">
              {openSection === 'services' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>
          <ul
            id="footer-services-list"
            className={`flex flex-col gap-3 text-[14px] text-slate-300 font-medium mt-3 md:mt-0 ${openSection === 'services' ? 'block' : 'hidden md:flex'}`}
          >
            <li><Link href="/services/seo" className="hover:text-white transition-colors duration-300">SEO Services</Link></li>
            <li><Link href="/services/social-media-marketing" className="hover:text-white transition-colors duration-300">Social Media Marketing</Link></li>
            <li><Link href="/services/google-ads-ppc" className="hover:text-white transition-colors duration-300">Google Ads &amp; PPC</Link></li>
            <li><Link href="/services/content-marketing" className="hover:text-white transition-colors duration-300">Content Marketing</Link></li>
            <li><Link href="/services/web-design-development" className="hover:text-white transition-colors duration-300">Web Design &amp; Dev</Link></li>
            <li><Link href="/services/email-marketing" className="hover:text-white transition-colors duration-300">Email Marketing</Link></li>
          </ul>
        </div>

        {/* Col 3 — Locations */}
        <div className="flex flex-col md:gap-6 border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
          <button
            onClick={() => toggleSection('locations')}
            aria-expanded={openSection === 'locations'}
            aria-controls="footer-locations-list"
            className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
          >
            <p className="text-[12px] tracking-[0.05em] uppercase text-slate-400 font-bold font-sans">LOCATIONS</p>
            <span className="md:hidden text-slate-400" aria-hidden="true">
              {openSection === 'locations' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>
          <ul
            id="footer-locations-list"
            className={`flex flex-col gap-3 text-[14px] text-slate-300 font-medium font-sans mt-3 md:mt-0 ${openSection === 'locations' ? 'block' : 'hidden md:flex'}`}
          >
            <li><Link href="/digital-marketing-agency-delhi" className="hover:text-white transition-colors duration-300">Digital Marketing Delhi</Link></li>
            <li><Link href="/digital-marketing-agency-noida" className="hover:text-white transition-colors duration-300">Digital Marketing Noida</Link></li>
            <li><Link href="/digital-marketing-agency-lucknow" className="hover:text-white transition-colors duration-300">Digital Marketing Lucknow</Link></li>
            <li><Link href="/digital-marketing-agency-kanpur" className="hover:text-white transition-colors duration-300">Digital Marketing Kanpur</Link></li>
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div className="flex flex-col md:gap-6 border-b border-white/10 md:border-b-0 pb-4 md:pb-0">
          <button
            onClick={() => toggleSection('company')}
            aria-expanded={openSection === 'company'}
            aria-controls="footer-company-list"
            className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
          >
            <p className="text-[12px] tracking-[0.05em] uppercase text-slate-400 font-bold font-sans">COMPANY</p>
            <span className="md:hidden text-slate-400" aria-hidden="true">
              {openSection === 'company' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>
          <ul
            id="footer-company-list"
            className={`flex flex-col gap-3 text-[14px] text-slate-300 font-medium font-sans mt-3 md:mt-0 ${openSection === 'company' ? 'block' : 'hidden md:flex'}`}
          >
            <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition-colors duration-300">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors duration-300">Pricing</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition-colors duration-300">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Col 5 — Contact & Newsletter */}
        <div className="flex flex-col md:gap-6 pb-4 md:pb-0">
          <button
            onClick={() => toggleSection('contact')}
            aria-expanded={openSection === 'contact'}
            aria-controls="footer-contact-info"
            className="flex items-center justify-between w-full md:cursor-default text-left md:pointer-events-none focus:outline-none py-2 md:py-0"
          >
            <p className="text-[12px] tracking-[0.05em] uppercase text-slate-400 font-bold font-sans">CONTACT</p>
            <span className="md:hidden text-slate-400" aria-hidden="true">
              {openSection === 'contact' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>

          <div
            id="footer-contact-info"
            className={`flex flex-col gap-3 text-[14px] font-sans mt-3 md:mt-0 ${openSection === 'contact' ? 'block' : 'hidden md:flex'}`}
          >
            <a
              href="tel:+918887620727"
              className="text-royal-blue font-semibold hover:underline block"
            >
              📞 +91-88876 20727
            </a>

            <a
              href="mailto:muddassir@veloxisglobal.com"
              className="text-slate-300 hover:text-white block break-all"
            >
              📧 muddassir@veloxisglobal.com
            </a>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/918887620727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-md font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-300 w-full text-center"
            >
              <span aria-hidden="true">💬</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Newsletter Form */}
          <div className={`pt-4 border-t border-slate-800 mt-4 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
            <span className="text-[11px] tracking-[0.05em] uppercase text-slate-400 font-bold block mb-2 font-sans">
              SUBSCRIBE TO INSIGHTS
            </span>

            {success === true ? (
              <p className="text-royal-blue text-[13px] font-bold mt-1">
                🎉 Subscribed successfully!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <label htmlFor="footer-email-input" className="sr-only">Your business email</label>
                <input
                  id="footer-email-input"
                  type="email"
                  placeholder="Your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-royal-blue w-full text-sm font-sans"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={isSubmitting}
                  className="w-full text-sm"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe →'}
                </Button>
                {success === false && (
                  <p className="text-red-400 text-xs font-semibold">
                    Error subscribing. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 pt-8 max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-400 font-semibold font-sans">
        <span>© {new Date().getFullYear()} Veloxis Global. All Rights Reserved.</span>

        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-300">
            Terms of Service
          </Link>
          <Link href="/sitemap.xml" className="hover:text-white transition-colors duration-300">
            Sitemap
          </Link>
        </div>

        <span className="text-slate-500 font-normal">
          Made with ❤️ for Indian businesses
        </span>
      </div>
    </footer>
  );
};
