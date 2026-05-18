import React from 'react';

/**
 * Container enforces max-width and horizontal padding for layout consistency.
 */
const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default Container;
