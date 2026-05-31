'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

/**
 * Navbar — 'use client' for scroll, pathname, and menu state.
 * Framer Motion removed: dropdowns use CSS opacity/transform transitions.
 * Mobile drawer uses CSS translateX transition for smooth slide-in.
 * ARIA: aria-expanded on accordion buttons, aria-label on hamburger/close.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Scroll handler for box shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all menus/drawers on page change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    const normPath = pathname.replace(/\/$/, '') || '/';
    const normHref = href.replace(/\/$/, '') || '/';
    if (normHref === '/') return normPath === '/';
    return normPath === normHref || normPath.startsWith(normHref + '/');
  };

  const col1Services = [
    { emoji: '🔍', title: 'SEO Services', href: '/services/seo' },
    { emoji: '📱', title: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { emoji: '💰', title: 'Google Ads & PPC', href: '/services/google-ads-ppc' },
  ];

  const col2Services = [
    { emoji: '✍️', title: 'Content Marketing', href: '/services/content-marketing' },
    { emoji: '💻', title: 'Web Design & Dev', href: '/services/web-design-development' },
    { emoji: '📧', title: 'Email Marketing', href: '/services/email-marketing' },
  ];

  const allServices = [...col1Services, ...col2Services];

  const locationLinks = [
    { name: 'Digital Marketing Agency Delhi', href: '/digital-marketing-agency-delhi' },
    { name: 'Digital Marketing Agency Noida', href: '/digital-marketing-agency-noida' },
    { name: 'Digital Marketing Agency Lucknow', href: '/digital-marketing-agency-lucknow' },
    { name: 'Digital Marketing Agency Kanpur', href: '/digital-marketing-agency-kanpur' },
  ];

  const isAuditPage = pathname?.includes('free-seo-audit');

  if (isAuditPage) {
    return (
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out h-16 md:h-[72px] flex items-center bg-[rgba(255,255,255,0.7)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.4)] ${
          scrolled ? 'shadow-[0_1px_20px_rgba(15,23,42,0.06)]' : 'shadow-none'
        }`}
      >
        <div className="max-w-container-max mx-auto px-gutter w-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo.png"
              alt="Veloxis Global"
              width={160}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
          <a
            href="tel:+918887620727"
            className="flex items-center gap-2 font-sans text-sm md:text-base font-extrabold text-royal-blue hover:text-[#1D4ED8] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>+91-88876 20727</span>
          </a>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out h-16 md:h-[72px] flex items-center bg-[rgba(255,255,255,0.7)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.4)] ${
          scrolled ? 'shadow-[0_1px_20px_rgba(15,23,42,0.06)]' : 'shadow-none'
        }`}
      >
        <div className="max-w-container-max mx-auto px-gutter w-full flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo.png"
              alt="Veloxis Global"
              width={160}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 h-full" aria-label="Main navigation">
            {/* Services dropdown */}
            <div
              className="relative h-full py-4"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                aria-haspopup="true"
                className={`flex items-center gap-1 font-sans text-[15px] font-semibold transition-colors duration-300 py-2 ${
                  isActive('/services') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Mega Menu — CSS transition, no Framer Motion */}
              <div
                id="services-dropdown"
                role="region"
                aria-label="Services menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-lg border border-slate-100 p-8 z-[60] mt-1 transition-all duration-200 ease-out origin-top ${
                  servicesOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-3">
                    {col1Services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300 group"
                      >
                        <span className="text-xl" aria-hidden="true">{service.emoji}</span>
                        <span className="text-[15px] font-semibold text-slate-900 group-hover:text-royal-blue transition-colors duration-300">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                  {/* Column 2 */}
                  <div className="flex flex-col gap-3">
                    {col2Services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300 group"
                      >
                        <span className="text-xl" aria-hidden="true">{service.emoji}</span>
                        <span className="text-[15px] font-semibold text-slate-900 group-hover:text-royal-blue transition-colors duration-300">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mega Menu Footer */}
                <div className="border-t border-slate-100 mt-6 pt-4 text-center">
                  <Link
                    href="/services"
                    className="inline-block text-[15px] font-bold text-royal-blue hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Locations dropdown */}
            <div
              className="relative h-full py-4"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                aria-expanded={locationsOpen}
                aria-controls="locations-dropdown"
                aria-haspopup="true"
                className={`flex items-center gap-1 font-sans text-[15px] font-semibold transition-colors duration-300 py-2 ${
                  isActive('/digital-marketing-agency') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
                }`}
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${locationsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Dropdown — CSS transition */}
              <div
                id="locations-dropdown"
                role="region"
                aria-label="Locations menu"
                className={`absolute top-full left-0 w-[280px] bg-white rounded-xl shadow-lg border border-slate-100 p-4 z-[60] mt-1 flex flex-col gap-2 transition-all duration-200 ease-out origin-top ${
                  locationsOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                {locationLinks.map((loc, index) => (
                  <Link
                    key={index}
                    href={loc.href}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300 group"
                  >
                    <span className="text-[14px]" aria-hidden="true">📍</span>
                    <span className="text-[14px] font-medium text-slate-900 group-hover:text-royal-blue transition-colors duration-300">
                      {loc.name.replace('Digital Marketing Agency ', '')}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className={`font-sans text-[15px] font-semibold transition-colors duration-300 ${
                isActive('/about') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              About
            </Link>

            <Link
              href="/case-studies"
              className={`font-sans text-[15px] font-semibold transition-colors duration-300 ${
                isActive('/case-studies') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={`font-sans text-[15px] font-semibold transition-colors duration-300 ${
                isActive('/blog') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Right: Desktop CTA & Phone */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+918887620727"
              className="flex items-center gap-1 font-sans text-[14px] text-slate-600 hover:text-royal-blue transition-colors duration-300"
            >
              <span aria-hidden="true">📞</span>
              <span>+91-88876 20727</span>
            </a>
            <div className="hero-cta-hover rounded-md">
              <Button href="/free-seo-audit" variant="primary" size="sm">
                Get Free Audit →
              </Button>
            </div>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-royal-blue hover:bg-slate-50 rounded-md transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay — CSS transition, no Framer Motion */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[99] bg-black/20 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[100] bg-white flex flex-col justify-between overflow-y-auto p-6 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header area in Drawer */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <Image
              src="/images/logos/logo.png"
              alt="Veloxis Global"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-none object-contain"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Drawer Links Stack */}
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {/* Services Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                className="flex items-center justify-between w-full font-semibold text-slate-900 text-[16px] py-3 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 text-slate-500 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-services-list"
                className={`overflow-hidden flex flex-col pl-4 gap-1 mt-1 border-l-2 border-slate-100 transition-all duration-200 ${
                  mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {allServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-3 text-[15px] ${
                      isActive(service.href) ? 'text-royal-blue font-bold' : 'text-slate-600 hover:text-royal-blue'
                    }`}
                  >
                    <span aria-hidden="true">{service.emoji}</span>
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                aria-expanded={mobileLocationsOpen}
                aria-controls="mobile-locations-list"
                className="flex items-center justify-between w-full font-semibold text-slate-900 text-[16px] py-3 focus:outline-none"
              >
                <span>Locations</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 text-slate-500 ${mobileLocationsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-locations-list"
                className={`overflow-hidden flex flex-col pl-4 gap-1 mt-1 border-l-2 border-slate-100 transition-all duration-200 ${
                  mobileLocationsOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {locationLinks.map((loc, index) => (
                  <Link
                    key={index}
                    href={loc.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-3 text-[15px] ${
                      isActive(loc.href) ? 'text-royal-blue font-bold' : 'text-slate-600 hover:text-royal-blue'
                    }`}
                  >
                    <span aria-hidden="true">📍</span>
                    <span>{loc.name.replace('Digital Marketing Agency ', '')}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Core Stacked Links */}
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-[16px] py-3 transition-colors duration-300 ${
                isActive('/about') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              About
            </Link>

            <Link
              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-[16px] py-3 transition-colors duration-300 ${
                isActive('/case-studies') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-[16px] py-3 transition-colors duration-300 ${
                isActive('/blog') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Bottom area with CTA and Phone */}
        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 mt-6">
          <a
            href="tel:+918887620727"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 font-sans text-[14px] text-slate-600 hover:text-royal-blue py-3"
          >
            <span aria-hidden="true">📞</span>
            <span>+91-88876 20727</span>
          </a>
          <Button href="/free-seo-audit" onClick={() => setIsOpen(false)} variant="primary" className="w-full text-center py-3">
            Get Free Audit →
          </Button>
        </div>
      </div>
    </>
  );
};
