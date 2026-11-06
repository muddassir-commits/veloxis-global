'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button, type ButtonProps } from './Button';
import { whatsappTarget, type WaPlacement, type WhatsAppOptions } from '../../lib/whatsapp';

export interface WhatsAppLinkProps extends WhatsAppOptions {
  /** Where the button sits on the page (sets the ref code and data-cta-location). */
  placement: WaPlacement;
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-label'?: string;
  /** Tooltip text (the HTML title attribute). */
  tooltip?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Render with the site's <Button> styles instead of a plain link. */
  button?: Pick<ButtonProps, 'variant' | 'size'>;
}

// Every WhatsApp link on the site. The message comes from data/whatsapp-messages.ts and depends on the
// page (read from the URL) and the placement. Clicks are tracked once by AnalyticsTracker (whatsapp_click
// with the data-cta name); the other data-* attributes are ready for GTM triggers and reports.
export function WhatsAppLink({
  placement,
  page,
  title,
  message,
  cta,
  children,
  className,
  id,
  tooltip,
  onClick,
  button,
  'aria-label': ariaLabel,
}: WhatsAppLinkProps) {
  const pathname = usePathname();
  const wa = whatsappTarget(pathname, placement, { page, title, message, cta });

  if (button) {
    return (
      <Button
        id={id}
        href={wa.href}
        target="_blank"
        rel="noopener noreferrer"
        cta={wa.cta}
        variant={button.variant}
        size={button.size}
        className={className}
        aria-label={ariaLabel}
        title={tooltip}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...wa.attrs}
      >
        {children}
      </Button>
    );
  }

  return (
    <a
      id={id}
      href={wa.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      title={tooltip}
      onClick={onClick}
      {...wa.attrs}
    >
      {children}
    </a>
  );
}
