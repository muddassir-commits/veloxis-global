'use client';

import React from 'react';
import Link from 'next/link';
import { events } from '../../lib/analytics';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    // Base styles: transition: all 300ms ease
    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-md transition-all duration-300 ease-in-out focus:outline-none';
    
    // Variant styles matching design system requirements exactly
    const variants = {
      primary: 'bg-royal-blue text-white hover:bg-[#1D4ED8] hover:shadow-[0_0_0_4px_rgba(37,99,235,0.2)]',
      secondary: 'bg-transparent border-[1.5px] border-royal-blue text-royal-blue hover:bg-royal-blue/5',
      outline: 'bg-transparent border-[1.5px] border-royal-blue text-royal-blue hover:bg-royal-blue/5', // fallback mapped to secondary
      white: 'bg-white text-royal-blue hover:bg-slate-50 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]', // fallback white variant
      ghost: 'bg-transparent text-slate-900 border-none hover:bg-slate-100',
    };

    // Size styles matching design system spacing
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-base', // px-8 py-4 (32px padding left/right, 16px top/bottom) & text-base (16px)
      lg: 'px-10 py-5 text-lg',
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      if (typeof window !== 'undefined') {
        const location = window.location.pathname;
        const ctaText = typeof children === 'string' ? children : 'cta_button';
        events.ctaClick(location, ctaText);
      }
      if (props.onClick) {
        (props.onClick as any)(e);
      }
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          onClick={handleClick}
          {...(props as any)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

