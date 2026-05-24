import React from 'react';

interface BadgeProps {
  color?: 'teal' | 'indigo' | 'orange' | 'blue';
  variant?: 'teal' | 'indigo' | 'orange' | 'blue'; // fallback to preserve backward compatibility
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ color, variant, children, className = '' }) => {
  // Use color if provided, fallback to variant, fallback to 'teal'
  const activeColor = color || variant || 'teal';
  
  // Design details: px-3 py-1, rounded-full, label-caps typography (12px/700/0.05em)
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 font-bold text-[12px] tracking-[0.05em] uppercase leading-none';
  
  const colors = {
    teal: 'bg-teal-accent/10 text-teal-accent',
    indigo: 'bg-indigo-accent/10 text-indigo-accent',
    orange: 'bg-sunset-orange/10 text-sunset-orange',
    blue: 'bg-royal-blue/10 text-royal-blue',
  };

  return (
    <span className={`${baseStyles} ${colors[activeColor]} ${className}`}>
      {children}
    </span>
  );
};
