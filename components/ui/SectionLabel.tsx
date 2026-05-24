import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'teal' | 'indigo' | 'orange';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ 
  children, 
  className = '', 
  color = 'blue' 
}) => {
  const colorClasses = {
    blue: 'text-royal-blue',
    teal: 'text-teal-accent',
    indigo: 'text-indigo-accent',
    orange: 'text-sunset-orange',
  };

  return (
    <span 
      className={`block font-bold text-[12px] tracking-[0.05em] uppercase mb-4 ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
};
