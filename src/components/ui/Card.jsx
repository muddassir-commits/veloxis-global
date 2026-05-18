import React from 'react';

/**
 * Card primitive. Standardizes the "glass-card" or flat card styling.
 */
const Card = ({ children, className = '', variant = 'glass', ...props }) => {
  const variantClass = variant === 'glass' ? 'glass-card' : `card-${variant}`;
  
  return (
    <div className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default Card;
