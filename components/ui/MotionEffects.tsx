'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * MotionEffects — one tiny client component that powers the site's scroll and hover motion.
 *
 * 1. Scroll reveal: elements marked `.section-reveal`, `.stagger-reveal` (children animate in
 *    turn) or `[data-reveal]` fade/slide in when they scroll into view. Only elements that are
 *    BELOW the fold get hidden (`.reveal-pending`), so nothing on screen ever flashes, the LCP
 *    element is never touched, and without JS everything simply stays visible.
 * 2. Spotlight: `.spotlight` cards get a cursor-following glow (Magic UI "Magic Card" idea,
 *    done with two CSS variables instead of a React wrapper per card).
 *
 * Revealing never depends on a remembered list: every check looks up `.reveal-pending` in the
 * live document, so an element can't be left hidden by a page change, React dev mode running
 * effects twice, or hot reload. All animation styles live in app/globals.css and switch off
 * for prefers-reduced-motion.
 */
const REVEAL_SELECTOR = '.section-reveal, .stagger-reveal, [data-reveal]';

function reveal(el: Element) {
  el.classList.remove('reveal-pending');
  el.classList.add('reveal-in');
  // Drop the animation class once finished so hover transforms work normally again
  window.setTimeout(() => el.classList.remove('reveal-in'), 1800);
}

// Un-hide instantly, without animating (used when a scan is torn down)
function unhideAll() {
  document.querySelectorAll('.reveal-pending').forEach((el) => el.classList.remove('reveal-pending'));
}

// Reveal every hidden element that is on screen or already scrolled past. Catches anything the
// observer misses: fast jumps (End key, flicks, anchor links), taller windows (full-page
// screenshot tools, rotating a phone) and printing.
function sweep(all = false) {
  const bottom = window.innerHeight;
  document.querySelectorAll('.reveal-pending').forEach((el) => {
    if (all || el.getBoundingClientRect().top < bottom) reveal(el);
  });
}

export function MotionEffects() {
  const pathname = usePathname();

  // Page-wide listeners, set up once for the whole visit
  useEffect(() => {
    // Browsers fire scroll at most once per frame; the sweep checks ~20 elements, so it's cheap
    const onScroll = () => sweep();
    const onPrint = () => sweep(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('beforeprint', onPrint);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('beforeprint', onPrint);
      unhideAll();
    };
  }, []);

  // Scan the page for reveal targets — again after every client-side navigation
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          if (entry.target.classList.contains('reveal-pending')) reveal(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    const fold = window.innerHeight * 0.9;
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      if (el.classList.contains('reveal-pending') || el.classList.contains('reveal-in')) {
        io.observe(el); // already hidden by an earlier scan: keep watching it
        return;
      }
      const rect = el.getBoundingClientRect();
      // On screen, above it, or not rendered at all: leave it alone
      if (rect.top < fold || (rect.width === 0 && rect.height === 0)) return;
      if (el.classList.contains('stagger-reveal')) {
        Array.from(el.children).forEach((child, i) =>
          (child as HTMLElement).style.setProperty('--reveal-i', String(Math.min(i, 8))),
        );
      }
      el.classList.add('reveal-pending');
      io.observe(el);
    });

    return () => {
      io.disconnect();
      // Never leave anything hidden once this scan is torn down. (React dev mode runs this
      // effect twice; the second scan simply hides the same below-the-fold elements again.)
      unhideAll();
    };
  }, [pathname]);

  // Spotlight glow — mouse/trackpad devices only
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>('.spotlight');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--spot-y', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return null;
}
