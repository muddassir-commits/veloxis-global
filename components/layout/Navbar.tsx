'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { servicesGroups, industryMenuItems } from '../../data/navbar-data';

/**
 * Navbar — 'use client' for scroll, pathname, and menu state.
 * Dropdowns use CSS opacity/transform transitions triggered on hover and click.
 * Mobile drawer uses CSS translateX transition for smooth slide-in.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  // Track expanded mobile service groups
  const [mobileActiveServiceGroup, setMobileActiveServiceGroup] = useState<number | null>(null);

  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Refs for click outside detection
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  // Timeout refs to handle diagonal hover (grace period)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to clear all timeouts
  const clearAllHoverTimeouts = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
  };

  // Scroll handler for box shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect hover media capability (touch screens vs mouse desktop)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHover(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setHasHover(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Close all menus/drawers on page change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
    setLocationsOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileLocationsOpen(false);
    setMobileActiveServiceGroup(null);
  }, [pathname]);

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
      let closed = false;
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        closed = true;
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
        closed = true;
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
        closed = true;
      }
      if (closed) {
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
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'top-4 w-[calc(100%-2rem)] max-w-[1120px] h-14 lg:h-16 bg-white/80 backdrop-blur-[24px] border border-white/50 shadow-[0_12px_40px_rgba(15,23,42,0.08)] rounded-full px-4 md:px-6' 
            : 'top-0 w-full h-16 lg:h-[72px] bg-white/80 backdrop-blur-[20px] border-b border-slate-100 px-0'
        }`}
      >
        <div className={`w-full flex items-center justify-between h-full transition-all duration-500 ${scrolled ? 'px-2' : 'max-w-container-max mx-auto px-gutter'}`}>
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
          <a
            href="tel:+918887620727"
            className="flex items-center gap-2 font-sans text-sm lg:text-base font-extrabold text-royal-blue hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap shrink-0">+91-88876 20727</span>
          </a>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'top-4 w-[calc(100%-2rem)] max-w-[1120px] h-14 lg:h-16 bg-white/80 backdrop-blur-[24px] border border-white/50 shadow-[0_12px_40px_rgba(15,23,42,0.08)] rounded-full px-4 md:px-6' 
            : 'top-0 w-full h-16 lg:h-[72px] bg-white/80 backdrop-blur-[20px] border-b border-slate-100 px-0'
        }`}
      >
        <div className={`w-full flex items-center justify-between h-full transition-all duration-500 ${scrolled ? 'px-2' : 'max-w-container-max mx-auto px-gutter'}`}>
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
                  setIndustriesOpen(false);
                  setLocationsOpen(false);
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
                    setIndustriesOpen(false);
                    setLocationsOpen(false);
                  } else {
                    clearAllHoverTimeouts();
                    setServicesOpen(true);
                    setIndustriesOpen(false);
                    setLocationsOpen(false);
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
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[920px] bg-white/95 backdrop-blur-[20px] rounded-3xl shadow-2xl border border-slate-100/80 p-8 z-[60] mt-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5 before:bg-transparent ${
                  servicesOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}
              >
                {/* 3-Column main layout */}
                <div className="grid grid-cols-3 gap-8">
                  
                  {/* Column 1 — Paid Advertising & Leads */}
                  <div className="flex flex-col gap-5 border-r border-slate-100 pr-6">
                    <span className="text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-royal-blue to-indigo-accent bg-clip-text text-transparent">
                      {servicesGroups[0].title}
                    </span>
                    <div className="flex flex-col gap-4">
                      {servicesGroups[0].items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                        >
                          <span className="text-xl p-1 bg-slate-100 rounded-lg" aria-hidden="true">{item.emoji}</span>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 leading-normal mt-0.5 font-medium">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 — Organic Growth */}
                  <div className="flex flex-col gap-5 border-r border-slate-100 pr-6">
                    <span className="text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-royal-blue to-indigo-accent bg-clip-text text-transparent">
                      {servicesGroups[1].title}
                    </span>
                    <div className="flex flex-col gap-3.5">
                      {servicesGroups[1].items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                        >
                          <span className="text-xl p-1 bg-slate-100 rounded-lg" aria-hidden="true">{item.emoji}</span>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 leading-normal mt-0.5 font-medium">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 3 — Conversion & Strategy */}
                  <div className="flex flex-col gap-6">
                    {/* Sub-Group 1: Conversion & Automation */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-royal-blue to-indigo-accent bg-clip-text text-transparent">
                        {servicesGroups[2].title}
                      </span>
                      <div className="flex flex-col gap-3">
                        {servicesGroups[2].items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                          >
                            <span className="text-xl p-1 bg-slate-100 rounded-lg" aria-hidden="true">{item.emoji}</span>
                            <div className="flex flex-col">
                              <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-slate-500 leading-normal mt-0.5 font-medium">
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Sub-Group 2: Strategy & Audits */}
                    <div className="flex flex-col gap-4 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-royal-blue to-indigo-accent bg-clip-text text-transparent">
                        {servicesGroups[3].title}
                      </span>
                      <div className="flex flex-col gap-3">
                        {servicesGroups[3].items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                          >
                            <span className="text-xl p-1 bg-slate-100 rounded-lg" aria-hidden="true">{item.emoji}</span>
                            <div className="flex flex-col">
                              <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-slate-500 leading-normal mt-0.5 font-medium">
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Row — Technology & Training */}
                <div className="border-t border-slate-100 mt-6 pt-5 grid grid-cols-3 gap-6 items-center">
                  <div className="col-span-2 flex items-center gap-4">
                    {servicesGroups[4].items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-xs font-extrabold text-slate-700 hover:text-royal-blue"
                      >
                        <span aria-hidden="true">{item.emoji}</span>
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="text-right">
                    <Link
                      href="/services"
                      className="inline-block text-[14px] font-bold text-royal-blue hover:underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Industries dropdown (Mega Menu) */}
            <div
              ref={industriesRef}
              className="relative h-full py-4 flex items-center"
              onMouseEnter={() => {
                if (hasHover) {
                  clearAllHoverTimeouts();
                  setIndustriesOpen(true);
                  setServicesOpen(false);
                  setLocationsOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (hasHover) {
                  industriesTimeoutRef.current = setTimeout(() => {
                    setIndustriesOpen(false);
                  }, 250);
                }
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!hasHover) {
                    setIndustriesOpen(!industriesOpen);
                    setServicesOpen(false);
                    setLocationsOpen(false);
                  } else {
                    clearAllHoverTimeouts();
                    setIndustriesOpen(true);
                    setServicesOpen(false);
                    setLocationsOpen(false);
                  }
                }}
                aria-expanded={industriesOpen}
                aria-controls="industries-dropdown"
                aria-haspopup="true"
                className={`flex items-center gap-1 font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                  scrolled 
                    ? 'px-2.5 py-1 text-[13px]' 
                    : 'px-3.5 py-1.5 text-[14px]'
                } ${
                  isActive('/industries') || industriesOpen
                    ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15'
                    : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
                }`}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${industriesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Industries Dropdown Panel */}
              <div
                id="industries-dropdown"
                role="region"
                aria-label="Industries menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white/95 backdrop-blur-[20px] rounded-3xl shadow-2xl border border-slate-100/80 p-6 z-[60] mt-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5 before:bg-transparent ${
                  industriesOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}
              >
                {/* 2-Column Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {industryMenuItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-lg p-1 bg-slate-100 rounded-lg shrink-0" aria-hidden="true">{item.emoji}</span>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Footer link */}
                <div className="border-t border-slate-100 mt-5 pt-4 text-center">
                  <Link
                    href="/industries"
                    className="inline-block text-[14px] font-bold text-royal-blue hover:underline"
                  >
                    View All Industries →
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Locations dropdown */}
            <div
              ref={locationsRef}
              className="relative h-full py-4 flex items-center"
              onMouseEnter={() => {
                if (hasHover) {
                  clearAllHoverTimeouts();
                  setLocationsOpen(true);
                  setServicesOpen(false);
                  setIndustriesOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (hasHover) {
                  locationsTimeoutRef.current = setTimeout(() => {
                    setLocationsOpen(false);
                  }, 250);
                }
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!hasHover) {
                    setLocationsOpen(!locationsOpen);
                    setServicesOpen(false);
                    setIndustriesOpen(false);
                  } else {
                    clearAllHoverTimeouts();
                    setLocationsOpen(true);
                    setServicesOpen(false);
                    setIndustriesOpen(false);
                  }
                }}
                aria-expanded={locationsOpen}
                aria-controls="locations-dropdown"
                aria-haspopup="true"
                className={`flex items-center gap-1 font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                  scrolled 
                    ? 'px-2.5 py-1 text-[13px]' 
                    : 'px-3.5 py-1.5 text-[14px]'
                } ${
                  isActive('/digital-marketing-agency') || locationsOpen
                    ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15'
                    : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
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
                className={`absolute top-full left-0 w-[280px] bg-white/95 backdrop-blur-[20px] rounded-2xl shadow-2xl border border-slate-100/80 p-4 z-[60] mt-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5 before:bg-transparent ${
                  locationsOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}
              >
                {locationLinks.map((loc, index) => (
                  <Link
                    key={index}
                    href={loc.href}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300 group"
                  >
                    <span className="text-[14px] text-royal-blue" aria-hidden="true">📍</span>
                    <span className="text-[14px] font-medium text-slate-900 group-hover:text-royal-blue transition-colors duration-300">
                      {loc.name.replace('Digital Marketing Agency ', '')}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

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
              href="/case-studies"
              className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0 ${
                scrolled 
                  ? 'px-2.5 py-1 text-[13px]' 
                  : 'px-3.5 py-1.5 text-[14px]'
              } ${
                isActive('/case-studies') ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue'
              }`}
            >
              Case Studies
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
          <div className={`hidden lg:flex items-center shrink-0 transition-all duration-300 ${scrolled ? 'gap-2.5 xl:gap-4 lg:gap-3' : 'gap-4 lg:gap-5'}`}>
            <a
              href="tel:+918887620727"
              className="flex items-center gap-1 font-sans font-bold text-slate-600 hover:text-royal-blue transition-all duration-300 whitespace-nowrap shrink-0"
            >
              <span className="text-base leading-none shrink-0" aria-hidden="true">📞</span>
              <span className={`whitespace-nowrap shrink-0 ${
                scrolled 
                  ? 'hidden' 
                  : 'hidden xl:inline text-[13px] xl:text-[14px]'
              }`}>+91-88876 20727</span>
            </a>
            <div className="hero-cta-hover rounded-md shrink-0">
              <Button 
                href="/free-seo-audit" 
                variant="primary" 
                size="sm" 
                className={`transition-all duration-300 shrink-0 ${scrolled ? 'px-3 py-1.5 text-[11px]' : 'px-4 py-2 text-xs'}`}
              >
                Get Free Audit →
              </Button>
            </div>
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
                        {group.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-2 py-2.5 text-[14px] ${
                              isActive(item.href) ? 'text-royal-blue font-bold' : 'text-slate-600 font-medium hover:text-royal-blue'
                            }`}
                          >
                            <span aria-hidden="true">{item.emoji}</span>
                            <span>{item.title}</span>
                          </Link>
                        ))}
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

            {/* 2. Industries Accordion */}
            <div className="flex flex-col border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                aria-expanded={mobileIndustriesOpen}
                aria-controls="mobile-industries-list"
                className="flex items-center justify-between w-full font-bold text-slate-900 text-[16px] py-3 focus:outline-none"
              >
                <span>Focus Industries</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 text-slate-500 ${mobileIndustriesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-industries-list"
                className={`overflow-hidden flex flex-col pl-4 gap-1 mt-1 border-l-2 border-slate-100 transition-all duration-200 ${
                  mobileIndustriesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {industryMenuItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 py-2.5 text-[14px] ${
                        isActive(item.href) ? 'text-royal-blue font-bold' : 'text-slate-600 font-medium hover:text-royal-blue'
                      }`}
                    >
                      <span aria-hidden="true">{item.emoji}</span>
                      <span className="truncate">{item.title}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/industries"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold text-royal-blue mt-4 hover:underline"
                >
                  View All Industries →
                </Link>
              </div>
            </div>

            {/* 3. Locations Accordion */}
            <div className="flex flex-col border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                aria-expanded={mobileLocationsOpen}
                aria-controls="mobile-locations-list"
                className="flex items-center justify-between w-full font-bold text-slate-900 text-[16px] py-3 focus:outline-none"
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
                  mobileLocationsOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {locationLinks.map((loc, index) => (
                  <Link
                    key={index}
                    href={loc.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-2.5 text-[14px] ${
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
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/about') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              About
            </Link>

            <Link
              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className={`font-bold text-[16px] py-3 border-b border-slate-100 transition-colors duration-300 ${
                isActive('/case-studies') ? 'text-royal-blue font-bold' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              Case Studies
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
