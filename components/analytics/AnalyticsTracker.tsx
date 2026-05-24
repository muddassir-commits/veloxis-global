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

      if (href.startsWith('tel:')) {
        events.phoneClick();
      } else if (href.includes('wa.me') || href.includes('whatsapp.com') || href.includes('api.whatsapp.com')) {
        events.whatsappClick();
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
