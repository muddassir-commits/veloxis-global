import React from 'react';

/**
 * Badge primitive used above section titles (e.g., "About Veloxis Global").
 */
const Badge = ({ children, className = '', ...props }) => {
  return (
    <span className={`section-badge ${className}`.trim()} {...props}>
      {children}
    </span>
  );
};

export default Badge;
