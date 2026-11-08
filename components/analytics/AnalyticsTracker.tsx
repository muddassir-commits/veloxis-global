'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useScrollDepth } from '../../lib/useScrollDepth';
import { events, industryFromPath, type ClickContext } from '../../lib/analytics';

// The GA4 `cta` parameter: an explicit data-cta value, else the aria-label, else the visible text
// (arrows and extra spaces removed), else the link target. Never empty, so no "(not set)".
function ctaName(el: HTMLElement, href: string) {
  const clean = (v: string | null | undefined) =>
    (v || '').replace(/[→←↗›»]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
  return clean(el.dataset.cta) || clean(el.getAttribute('aria-label')) || clean(el.textContent) || clean(href) || 'cta';
}

export default function AnalyticsTracker() {
  const pathname = usePathname();

  // 1. Trigger Scroll Depth Hook
  useScrollDepth();

  // 2. Track PageView on route change (Meta Pixel)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  // 3. One click listener for the whole site, so each click sends exactly one event.
  //    Priority: phone > WhatsApp > email > Calendly > CTA (any <Button>, or any link to /contact).
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const page = window.location.pathname;
      const anchor = target.closest('a');
      const href = anchor?.getAttribute('href') || '';

      // Context from the link's data-* attributes (WhatsAppLink, NicheCta...), else the page URL.
      const tagged = target.closest<HTMLElement>('[data-cta], [data-industry], [data-cta-location]');
      const ds = anchor?.dataset ?? tagged?.dataset ?? {};
      const industry =
        ds.industry || target.closest<HTMLElement>('[data-industry]')?.dataset.industry || industryFromPath(page);
      const ctx: ClickContext = {
        cta: ds.cta || undefined,
        ctaLocation: ds.ctaLocation || undefined,
        pageType: ds.pageType || undefined,
        waRef: ds.ref || undefined,
        industry,
      };

      if (href.startsWith('tel:')) return events.phoneClick(page, ctx);
      // A named WhatsApp button (data-cta) also sends its name, so each placement can be compared.
      if (href.includes('wa.me') || href.includes('api.whatsapp.com/send')) return events.whatsappClick(page, ctx);
      if (href.startsWith('mailto:')) return events.emailClick(page, ctx);
      if (href.includes('calendly.com')) return events.bookingClick(page, ctx);

      const cta = target.closest<HTMLElement>('[data-cta]');
      const isContactLink = href === '/contact' || href.startsWith('/contact?') || href.startsWith('/contact#');
      if (cta || isContactLink) {
        const el = cta ?? anchor!;
        events.ctaClick(page, ctaName(el, href), el.dataset.industry || industry, el.dataset.ctaLocation || undefined);
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
