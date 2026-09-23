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

  // 3. Track global tel/WhatsApp link clicks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const page = window.location.pathname;
      if (href.startsWith('tel:')) {
        events.phoneClick(page);
      } else if (href.includes('wa.me') || href.includes('api.whatsapp.com/send?phone')) {
        events.whatsappClick(page);
      } else if (href.includes('calendly.com')) {
        events.bookingClick(page);
      } else if (href === '/contact' || href.startsWith('/contact?')) {
        events.ctaClick(page, (anchor.textContent || '').trim().slice(0, 60));
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
