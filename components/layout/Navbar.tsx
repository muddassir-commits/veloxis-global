'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Zap, Target, Bot, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { servicesGroups } from '../../data/navbar-data';
import { siteData } from '../../data/site';

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '/services/high-converting-landing-pages': Zap,
  '/services/paid-ads': Target,
  '/services/ai-automation': Bot,
};

const serviceAccentMap: Record<string, { bg: string; text: string; ring: string }> = {
  '/services/high-converting-landing-pages': { bg: 'bg-teal-accent/10', text: 'text-teal-accent', ring: 'group-hover:ring-teal-accent/20' },
  '/services/paid-ads': { bg: 'bg-indigo-accent/10', text: 'text-indigo-accent', ring: 'group-hover:ring-indigo-accent/20' },
  '/services/ai-automation': { bg: 'bg-sunset-orange/10', text: 'text-sunset-orange', ring: 'group-hover:ring-sunset-orange/20' },
};

/**
 * Navbar — 'use client' for scroll, pathname, and menu state.
 * Dropdowns use CSS opacity/transform transitions triggered on hover and click.
 * Mobile drawer uses CSS translateX transition for smooth slide-in.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mouse (hover-capable) vs touch device, kept in sync with the media query. False on the server.
  const hasHover = useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia('(hover: hover)');
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => window.matchMedia('(hover: hover)').matches,
    () => false,
  );

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);


  // Track expanded mobile service groups
  const [mobileActiveServiceGroup, setMobileActiveServiceGroup] = useState<number | null>(null);

  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Refs for click outside detection
  const servicesRef = useRef<HTMLDivElement>(null);

  // Timeout refs to handle diagonal hover (grace period)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to clear all timeouts
  const clearAllHoverTimeouts = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
  };

  // Scroll handler for box shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all menus/drawers on page change (state adjusted during render, as React recommends).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileActiveServiceGroup(null);
  }

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => clearAllHoverTimeouts();
  }, []);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        clearAllHoverTimeouts();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (!pathname) return false;
    const normPath = pathname.replace(/\/$/, '') || '/';
    const normHref = href.replace(/\/$/, '') || '/';
    if (normHref === '/') return normPath === '/';
    return normPath === normHref || normPath.startsWith(normHref + '/');
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'top-4 w-[calc(100%-2rem)] max-w-[1120px] h-14 lg:h-16 bg-white/80 backdrop-blur-[24px] border border-white/50 shadow-[0_12px_40px_rgba(15,23,42,0.08)] rounded-full px-4 md:px-6'
            : 'top-0 w-full h-16 lg:h-[72px] bg-white/80 backdrop-blur-[20px] border-b border-slate-100 px-0'
        }`}
      >
        <div className={`w-full flex items-center justify-between h-full transition-all duration-500 ${scrolled ? 'px-3 lg:px-4' : 'max-w-container-max mx-auto px-gutter'}`}>
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logos/logo.webp"
              alt="Veloxis Global"
              width={160}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-8 lg:h-9' : 'h-9 lg:h-10'}`}
            />
          </Link>

          {/* Center: Desktop Nav Links */}
          <nav className={`hidden lg:flex items-center h-full transition-all duration-300 ${scrolled ? 'gap-1.5 xl:gap-3.5 lg:gap-2' : 'gap-3 xl:gap-5 lg:gap-4'}`} aria-label="Main navigation">

            {/* 1. Services dropdown (Mega Menu) */}
            <div
              ref={servicesRef}
              className="relative h-full py-4 flex items-center"
              onMouseEnter={() => {
                if (hasHover) {
                  clearAllHoverTimeouts();
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (hasHover) {
                  servicesTimeoutRef.current = setTimeout(() => {
                    setServicesOpen(false);
                  }, 250); // 250ms grace period to allow diagonal mouse movement
                }
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!hasHover) {
                    setServicesOpen(!servicesOpen);
                  } else {
                    clearAllHoverTimeouts();
                    setServicesOpen(true);
                  }
                }}
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                aria-haspopup="true"
                className={`flex items-center gap-1 font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                  scrolled
                    ? 'px-2.5 py-1 text-[13px]'
                    : 'px-3.5 py-1.5 text-[14px]'
                } ${
                  isActive('/services') || servicesOpen
                    ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15'
                    : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Services Mega Dropdown Panel */}
              <div
                id="services-dropdown"
                role="region"
                aria-label="Services menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white/95 backdrop-blur-[20px] rounded-3xl shadow-2xl border border-slate-100/80 z-[60] mt-2.5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5 before:bg-transparent ${
                  servicesOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}
              >
                <div className="p-7 pb-6">
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-royal-blue to-indigo-accent bg-clip-text text-transparent">
                      What We Do
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">Three services. One growth engine.</span>
                  </div>

                  {/* 3-column service cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {servicesGroups.flatMap((group) => group.items).map((item, idx) => {
                      const ItemIcon = serviceIconMap[item.href] || Zap;
                      const accent = serviceAccentMap[item.href] || serviceAccentMap['/services/high-converting-landing-pages'];
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className="group flex flex-col gap-3 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/80 hover:shadow-sm transition-all duration-200"
                        >
                          <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-transparent transition-all duration-200 ${accent.bg} ${accent.text} ${accent.ring} group-hover:scale-105`} aria-hidden="true">
                            <ItemIcon className="w-5 h-5" />
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[13.5px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors leading-snug">
                              {item.title}
                            </span>
                            <span className="text-[11.5px] text-slate-500 leading-relaxed mt-1">
                              {item.description}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-royal-blue opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 mt-auto">
                            Explore <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom trust bar */}
                <div className="bg-slate-50 border-t border-slate-100 px-7 py-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                    Real estate only · Month-to-month, no lock-in
                  </span>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-royal-blue"
                  >
                    View All Services
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Audience links */}
            <Link
              href="/industries/real-estate"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/industries/real-estate') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              Developers
            </Link>

            <Link
              href="/channel-partners"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 hidden xl:inline-block ${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/channel-partners') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              Channel Partners
            </Link>

            <Link
              href="/about"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/about') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              About
            </Link>

            <Link
              href="/playbooks"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/playbooks') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              Playbooks
            </Link>

            <Link
              href="/pricing"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/pricing') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                scrolled
                  ? 'px-2.5 py-1 text-[13px]'
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/blog') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Right: Desktop CTA & Phone */}
          <div className={`hidden lg:flex items-center shrink-0 transition-all duration-300 ${scrolled ? 'gap-2.5 xl:gap-3.5 lg:gap-3' : 'gap-4 lg:gap-5'}`}>
            <div className="hero-cta-hover !rounded-full shrink-0">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className={`!rounded-full transition-all duration-300 shrink-0 ${scrolled ? 'px-3.5 py-1.5 text-[11px]' : 'px-4 py-2 text-xs'}`}
              >
                Get Free Audit →
              </Button>
            </div>
            <a
              href={`tel:${siteData.phoneRaw}`}
              title={`Call ${siteData.phone}`}
              className={`flex items-center justify-center rounded-full bg-royal-blue/10 text-royal-blue hover:bg-royal-blue hover:text-white transition-all duration-300 shrink-0 ${
                scrolled
                  ? 'w-8 h-8'
                  : 'w-10 h-10'
              }`}
            >
              <Phone className={`shrink-0 ${scrolled ? 'w-4 h-4' : 'w-4.5 h-4.5'}`} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-royal-blue hover:bg-slate-50 rounded-md transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[99] bg-slate-900/10 backdrop-blur-sm transition-opacity duration-300 ${
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
        className={`fixed top-4 right-4 bottom-4 w-[calc(100%-2rem)] max-w-sm z-[100] bg-white/95 backdrop-blur-[24px] rounded-3xl flex flex-col justify-between overflow-y-auto p-6 shadow-2xl border border-slate-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header area in Drawer */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <Image
              src="/images/logos/logo.webp"
              alt="Veloxis Global"
              width={160}
              height={40}
              className="h-8 w-auto max-w-[120px] object-contain"
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
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">

            {/* 1. Services Accordion */}
            <div className="flex flex-col border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                className="flex items-center justify-between w-full font-bold text-slate-900 text-[16px] py-3 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 text-slate-500 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-services-list"
                className={`overflow-hidden flex flex-col pl-4 gap-2 mt-1 border-l-2 border-slate-100 transition-all duration-200 ${
                  mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {servicesGroups.map((group, groupIdx) => {
                  const isGroupActive = mobileActiveServiceGroup === groupIdx;
                  return (
                    <div key={groupIdx} className="flex flex-col mt-2">
                      <button
                        onClick={() => setMobileActiveServiceGroup(isGroupActive ? null : groupIdx)}
                        className="flex items-center justify-between w-full text-xs font-black uppercase text-slate-400 py-1.5 focus:outline-none"
                      >
                        <span>{group.title}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isGroupActive ? 'rotate-180 text-royal-blue' : ''}`} />
                      </button>

                      <div className={`flex flex-col pl-2 border-l border-slate-100 overflow-hidden transition-all duration-200 ${isGroupActive ? 'max-h-[300px] opacity-100 mt-1' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                        {group.items.map((item, idx) => {
                          const ItemIcon = serviceIconMap[item.href] || Zap;
                          return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-2 py-2.5 text-[14px] ${
                              isActive(item.href) ? 'text-royal-blue font-bold' : 'text-slate-600 font-medium hover:text-royal-blue'
                            }`}
                          >
                            <ItemIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{item.title}</span>
                          </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold text-royal-blue mt-4 hover:underline"
                >
                  View All Services →
                </Link>
              </div>
            </div>

            {/* 2. Audience links */}
            <Link
              href="/industries/real-estate"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/industries/real-estate') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              For Developers
            </Link>

            <Link
              href="/channel-partners"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/channel-partners') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              For Channel Partners
            </Link>

            {/* Core Stacked Links */}
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/about') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              About
            </Link>

            <Link
              href="/playbooks"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/playbooks') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Playbooks
            </Link>

            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/pricing') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
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
            className="flex items-center justify-center gap-2 font-sans text-[14px] font-bold text-slate-600 hover:text-royal-blue py-3"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>+91-88876 20727</span>
          </a>
          <Button href="/contact" onClick={() => setIsOpen(false)} variant="primary" className="w-full text-center py-3 !rounded-full">
            Get Free Audit →
          </Button>
        </div>
      </div>
    </>
  );
};
