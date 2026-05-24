import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  hoverable?: boolean; // fallback alias for backward compatibility
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  hoverable = false,
  ...props
}) => {
  const isHoverEnabled = hover || hoverable;

  // Dynamically check for style overrides in className to prevent collisions
  const hasBg = className.includes('bg-');
  const hasBorder = className.includes('border-') || className.includes('border ');
  const hasPadding = className.includes('p-') || className.includes('px-') || className.includes('py-');

  const bgStyle = hasBg ? '' : 'bg-white';
  const borderStyle = hasBorder ? '' : 'border border-slate-100';
  const paddingStyle = hasPadding ? '' : 'p-8';

  return (
    <div
      className={`${bgStyle} ${borderStyle} ${paddingStyle} rounded-xl transition-all duration-300 ${
        isHoverEnabled ? 'hover:-translate-y-1 shadow-sm' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
