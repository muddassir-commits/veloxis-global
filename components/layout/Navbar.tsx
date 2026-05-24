'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const pathname = usePathname();

  // Scroll handler for box shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    const normPath = pathname.replace(/\/$/, '') || '/';
    const normHref = href.replace(/\/$/, '') || '/';
    
    if (normHref === '/') {
      return normPath === '/';
    }
    
    return normPath === normHref || normPath.startsWith(normHref + '/');
  };

  const col1Services = [
    { emoji: '🔍', title: 'SEO Services', href: '/services/seo/' },
    { emoji: '📱', title: 'Social Media Marketing', href: '/services/social-media-marketing/' },
    { emoji: '💰', title: 'Google Ads & PPC', href: '/services/google-ads-ppc/' },
  ];

  const col2Services = [
    { emoji: '✍️', title: 'Content Marketing', href: '/services/content-marketing/' },
    { emoji: '💻', title: 'Web Design & Dev', href: '/services/web-design-development/' },
    { emoji: '📧', title: 'Email Marketing', href: '/services/email-marketing/' },
  ];

  const allServices = [...col1Services, ...col2Services];

  const locationLinks = [
    { name: 'Digital Marketing Agency Delhi', href: '/digital-marketing-agency-delhi/' },
    { name: 'Digital Marketing Agency Noida', href: '/digital-marketing-agency-noida/' },
    { name: 'Digital Marketing Agency Lucknow', href: '/digital-marketing-agency-lucknow/' },
    { name: 'Digital Marketing Agency Kanpur', href: '/digital-marketing-agency-kanpur/' },
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
            <Phone className="w-4 h-4" />
            <span>+91-88876 20727</span>
          </a>
        </div>
      </header>
    );
  }

  return (
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
        <nav className="hidden md:flex items-center gap-8 h-full">
          {/* Services dropdown container */}
          <div
            className="relative h-full py-4"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-sans text-[15px] font-semibold transition-colors duration-300 py-2 ${
                isActive('/services') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-lg border border-slate-100 p-8 z-[60] mt-1"
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
                          <span className="text-xl">{service.emoji}</span>
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
                          <span className="text-xl">{service.emoji}</span>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Locations dropdown container */}
          <div
            className="relative h-full py-4"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-sans text-[15px] font-semibold transition-colors duration-300 py-2 ${
                isActive('/digital-marketing-agency') ? 'text-royal-blue underline decoration-royal-blue decoration-2 underline-offset-4' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Locations
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${locationsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown */}
            <AnimatePresence>
              {locationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 w-[280px] bg-white rounded-xl shadow-lg border border-slate-100 p-4 z-[60] mt-1 flex flex-col gap-2"
                >
                  {locationLinks.map((loc, index) => (
                    <Link
                      key={index}
                      href={loc.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300 group"
                    >
                      <span className="text-[14px]">📍</span>
                      <span className="text-[14px] font-medium text-slate-900 group-hover:text-royal-blue transition-colors duration-300">
                        {loc.name.replace('Digital Marketing Agency ', '')}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
            <span>📞</span>
            <span>+91-88876 20727</span>
          </a>
          <motion.div whileHover={{ boxShadow: '0 0 0 4px rgba(37,99,235,0.25)' }} className="rounded-md">
            <Button href="/free-seo-audit" variant="primary" size="sm">
              Get Free Audit →
            </Button>
          </motion.div>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-royal-blue hover:bg-slate-50 rounded-md transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col justify-between overflow-y-auto p-6"
          >
            {/* Header area in Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <Image
                  src="/images/logos/logo.png"
                  alt="Veloxis Global"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Drawer Links Stack */}
              <nav className="flex flex-col gap-4">
                {/* Services Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full font-semibold text-slate-900 text-[16px] py-2"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 text-slate-500 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col pl-4 gap-2 mt-1 border-l-2 border-slate-100"
                      >
                        {allServices.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className={`flex items-center gap-2 py-2 text-[15px] ${
                              isActive(service.href) ? 'text-royal-blue font-bold' : 'text-slate-600 hover:text-royal-blue'
                            }`}
                          >
                            <span>{service.emoji}</span>
                            <span>{service.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Locations Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                    className="flex items-center justify-between w-full font-semibold text-slate-900 text-[16px] py-2"
                  >
                    <span>Locations</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 text-slate-500 ${
                        mobileLocationsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileLocationsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col pl-4 gap-2 mt-1 border-l-2 border-slate-100"
                      >
                        {locationLinks.map((loc, index) => (
                          <Link
                            key={index}
                            href={loc.href}
                            className={`flex items-center gap-2 py-2 text-[15px] ${
                              isActive(loc.href) ? 'text-royal-blue font-bold' : 'text-slate-600 hover:text-royal-blue'
                            }`}
                          >
                            <span>📍</span>
                            <span>{loc.name.replace('Digital Marketing Agency ', '')}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Core Stacked Links */}
                <Link
                  href="/about"
                  className={`font-semibold text-[16px] py-2 transition-colors duration-300 ${
                    isActive('/about') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
                  }`}
                >
                  About
                </Link>

                <Link
                  href="/case-studies"
                  className={`font-semibold text-[16px] py-2 transition-colors duration-300 ${
                    isActive('/case-studies') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
                  }`}
                >
                  Case Studies
                </Link>

                <Link
                  href="/blog"
                  className={`font-semibold text-[16px] py-2 transition-colors duration-300 ${
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
                className="flex items-center justify-center gap-2 font-sans text-[14px] text-slate-600 hover:text-royal-blue py-2"
              >
                <span>📞</span>
                <span>+91-88876 20727</span>
              </a>
              <Button href="/free-seo-audit" variant="primary" className="w-full text-center">
                Get Free Audit →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
