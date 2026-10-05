import React from 'react';
import Link from 'next/link';
import { CONTENT_REVIEWED } from '../../lib/seo-config';
import { siteData } from '../../data/site';

// Visible freshness + authorship line for evergreen pages (offer, services, audiences).
export const ReviewedLine: React.FC<{ className?: string }> = ({ className = 'text-slate-400' }) => (
  <p className={`text-xs ${className}`}>
    Last reviewed{' '}
    <time dateTime={CONTENT_REVIEWED}>
      {new Date(`${CONTENT_REVIEWED}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' })}
    </time>{' '}
    by{' '}
    <Link href="/about" className="underline-offset-2 hover:underline">
      {siteData.founder}
    </Link>
  </p>
);
