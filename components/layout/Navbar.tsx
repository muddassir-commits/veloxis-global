'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Target,
  LayoutTemplate,
  Search,
  Bot,
  ShoppingBag,
  Store,
  Building2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { navMenus, primaryLinks, freeAuditLink, type NavIcon, type NavbarMenu } from '../../data/navbar-data';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { WhatsAppLink } from '../ui/WhatsAppLink';
import { siteData } from '../../data/site';

const icons: Record<NavIcon, React.ComponentType<{ className?: string }>> = {
  ads: Target,
  web: LayoutTemplate,
  seo: Search,
  automation: Bot,
  ecommerce: ShoppingBag,
  local: Store,
  realestate: Building2,
};

/**
 * Navbar — 'use client' for scroll, pathname and menu state.
 * Desktop: Services and Industries dropdowns (hover on mouse devices, tap on touch), Blog, About, Free Audit.
 * Mobile: a drawer with the same two menus as accordions, then Blog, About, Contact.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
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

  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const clearHover = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all menus on page change (state adjusted during render, as React recommends).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setIsOpen(false);
    setOpenMenu(null);
    setMobileMenu(null);
  }

  // No page scroll behind the open drawer; Escape closes menus.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenMenu(null);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
      clearHover();
    };
  }, []);

  const isActive = (href: string) => {
    if (!pathname) return false;
    const p = pathname.replace(/\/$/, '') || '/';
    const h = href.replace(/\/$/, '') || '/';
    if (h === '/') return p === '/';
    return p === h || p.startsWith(h + '/');
  };

  const pill = scrolled ? 'px-2.5 py-1 text-[13px]' : 'px-3.5 py-1.5 text-[14px]';
  const pillState = (active: boolean) =>
    active ? 'bg-royal-blue text-white shadow-sm shadow-royal-blue/15' : 'text-slate-700 hover:bg-slate-100/80 hover:text-royal-blue';

  const renderDesktopMenu = (menu: NavbarMenu) => {
    const open = openMenu === menu.title;
    const id = `${menu.title.toLowerCase()}-dropdown`;
    return (
      <div
        key={menu.title}
        className="relative h-full py-4 flex items-center"
        onMouseEnter={() => {
          if (hasHover) {
            clearHover();
            setOpenMenu(menu.title);
          }
        }}
        onMouseLeave={() => {
          if (hasHover) hoverTimeout.current = setTimeout(() => setOpenMenu(null), 250);
        }}
      >
        <button
          type="button"
          onClick={() => {
            clearHover();
            setOpenMenu(open && !hasHover ? null : menu.title);
          }}
          aria-expanded={open}
          aria-controls={id}
          aria-haspopup="true"
          className={`flex items-center gap-1 font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap ${pill} ${pillState(isActive(menu.activePrefix) || open)}`}
        >
          {menu.title}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>

        <div
          id={id}
          role="region"
          aria-label={`${menu.title} menu`}
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-3xl shadow-2xl border border-slate-100/80 z-[60] mt-2.5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5 before:bg-transparent ${
            open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none invisible'
          }`}
        >
          <ul className="grid grid-cols-2 gap-2 p-4">
            {menu.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors duration-200 h-full"
                  >
                    <span className="w-10 h-10 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors leading-snug">{item.title}</span>
                      <span className="text-[12px] text-slate-500 leading-relaxed mt-0.5">{item.description}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="bg-slate-50 border-t border-slate-100 px-6 py-3.5 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-accent shrink-0" aria-hidden="true" />
              Month-to-month, no lock-in ·{' '}
              <Link href="/contact" className="text-slate-600 hover:text-royal-blue underline-offset-2 hover:underline">
                Contact us
              </Link>
            </span>
            <Link href={menu.all.href} className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-royal-blue whitespace-nowrap">
              {menu.all.title}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    );
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
          <Link href="/" className="flex items-center shrink-0" aria-label="Veloxis Global home">
            <Image
              src="/images/logos/logo.webp"
              alt="Veloxis Global"
              width={160}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-8 lg:h-9' : 'h-9 lg:h-10'}`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center h-full gap-2 xl:gap-3" aria-label="Main navigation">
            {navMenus.map(renderDesktopMenu)}
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans font-semibold transition-all duration-300 rounded-full whitespace-nowrap ${pill} ${pillState(
                  isActive(link.href) || (link.activeAlso ?? []).some(isActive),
                )}`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + WhatsApp */}
          <div className="hidden lg:flex items-center shrink-0 gap-3">
            <div className="hero-cta-hover !rounded-full shrink-0">
              <Button
                id="nav-free-audit-btn"
                href={freeAuditLink.href}
                variant="primary"
                size="sm"
                cta="nav_free_audit"
                className={`!rounded-full transition-all duration-300 ${scrolled ? 'px-3.5 py-1.5 text-xs' : 'px-4 py-2 text-xs'}`}
              >
                {freeAuditLink.title} →
              </Button>
            </div>
            <WhatsAppLink
              placement="nav"
              tooltip={`WhatsApp ${siteData.phone}`}
              aria-label={`Chat on WhatsApp ${siteData.phone}`}
              className={`flex items-center justify-center rounded-full bg-[#25D366]/10 ring-1 ring-[#25D366]/25 hover:bg-[#25D366]/20 hover:ring-[#25D366]/50 transition-all duration-300 shrink-0 ${
                scrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}
            >
              <WhatsAppIcon className={`shrink-0 ${scrolled ? 'w-[18px] h-[18px]' : 'w-5 h-5'}`} />
            </WhatsAppLink>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
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

      {/* Mobile drawer backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[99] bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed top-3 right-3 bottom-3 w-[calc(100%-1.5rem)] max-w-sm z-[100] bg-white rounded-3xl flex flex-col overflow-y-auto overscroll-contain p-5 shadow-2xl border border-slate-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-2">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="Veloxis Global home">
            <Image src="/images/logos/logo.webp" alt="Veloxis Global" width={160} height={40} className="h-8 w-auto max-w-[130px] object-contain" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-11 h-11 flex items-center justify-center text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col flex-grow" aria-label="Mobile navigation">
          {navMenus.map((menu) => {
            const open = mobileMenu === menu.title;
            const listId = `mobile-${menu.title.toLowerCase()}-list`;
            return (
              <div key={menu.title} className="border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => setMobileMenu(open ? null : menu.title)}
                  aria-expanded={open}
                  aria-controls={listId}
                  className={`flex items-center justify-between w-full min-h-[48px] font-bold text-[16px] ${isActive(menu.activePrefix) ? 'text-royal-blue' : 'text-slate-900'}`}
                >
                  <span>{menu.title}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <ul id={listId} className={`pb-3 flex-col ${open ? 'flex' : 'hidden'}`}>
                  {menu.items.map((item) => {
                    const Icon = icons[item.icon];
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 min-h-[44px] pl-1 text-[15px] ${
                            isActive(item.href) && item.href !== menu.all.href ? 'text-royal-blue font-bold' : 'text-slate-700 font-medium hover:text-royal-blue'
                          }`}
                        >
                          <span className="w-8 h-8 rounded-lg bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0" aria-hidden="true">
                            <Icon className="w-4 h-4" />
                          </span>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      href={menu.all.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-1.5 min-h-[44px] pl-1 text-[14px] font-bold text-royal-blue"
                    >
                      {menu.all.title} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
          {[...primaryLinks, { title: 'Contact', href: '/contact' }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center min-h-[48px] font-bold text-[16px] border-b border-slate-100 transition-colors ${
                isActive(link.href) ? 'text-royal-blue' : 'text-slate-900 hover:text-royal-blue'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-5 mt-5">
          <Button
            id="menu-free-audit-btn"
            href={freeAuditLink.href}
            onClick={() => setIsOpen(false)}
            variant="primary"
            cta="menu_free_audit"
            className="w-full text-center py-3 !rounded-full"
          >
            Get a {freeAuditLink.title.toLowerCase()} →
          </Button>
          <WhatsAppLink
            placement="menu"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 min-h-[44px] font-sans text-[14px] font-bold text-slate-600 hover:text-royal-blue"
          >
            <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
            <span>WhatsApp {siteData.phone}</span>
          </WhatsAppLink>
        </div>
      </div>
    </>
  );
};
