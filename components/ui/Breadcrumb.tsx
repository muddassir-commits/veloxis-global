import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { SchemaMarkup } from './SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { SITE_URL } from '../../lib/seo-config';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

// Renders the visible trail and its matching BreadcrumbList JSON-LD, so the two never drift apart.
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const schema = getBreadcrumbListSchema([
    { name: 'Home', item: SITE_URL },
    ...items.filter((i) => i.href).map((i) => ({ name: i.name, item: `${SITE_URL}${i.href}` })),
  ]);

  return (
    <nav className="flex py-4 text-xs font-semibold text-on-surface-variant min-w-0 max-w-full" aria-label="Breadcrumb">
      <SchemaMarkup schema={schema} />
      <ol className="flex flex-wrap items-center gap-y-1 min-w-0 max-w-full">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center py-1.5 -my-1.5 hover:text-royal-blue transition-colors">
            <Home className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center min-w-0">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-400" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-slate-900 font-bold max-w-[200px] sm:max-w-none truncate" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="py-1.5 -my-1.5 hover:text-royal-blue transition-colors truncate max-w-[150px] sm:max-w-none">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
