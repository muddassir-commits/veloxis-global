'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useScrollDepth } from '../../lib/useScrollDepth';
import { events } from '../../lib/analytics';

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
  //    Priority: phone > WhatsApp > Calendly > CTA (any <Button>, or any link to /contact).
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const page = window.location.pathname;
      const anchor = target.closest('a');
      const href = anchor?.getAttribute('href') || '';

      if (href.startsWith('tel:')) return events.phoneClick(page);
      if (href.includes('wa.me') || href.includes('api.whatsapp.com/send')) return events.whatsappClick(page);
      if (href.includes('calendly.com')) return events.bookingClick(page);

      const cta = target.closest<HTMLElement>('[data-cta]');
      const isContactLink = href === '/contact' || href.startsWith('/contact?') || href.startsWith('/contact#');
      if (cta || isContactLink) {
        const el = cta ?? anchor!;
        events.ctaClick(page, (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60) || 'cta');
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
