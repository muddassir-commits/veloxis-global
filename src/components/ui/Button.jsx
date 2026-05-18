import React from 'react';

/**
 * Reusable Button primitive.
 * Enforces standard button variants (primary, secondary, outline) to prevent inline style drift.
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  ...props 
}) => {
  // Using generic class names that map to our future utility CSS structure
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  return (
    <button 
      type={type}
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
