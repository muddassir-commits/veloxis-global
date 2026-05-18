import React from 'react';

/**
 * Card — Multi-variant card primitive.
 * Variants: elevated, outlined, interactive, feature, ghost
 */
const variantStyles = {
  elevated: {
    background: 'var(--surface-1)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-sm)',
    borderRadius: 'var(--radius-md)',
  },
  outlined: {
    background: 'transparent',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
  },
  interactive: {
    background: 'var(--surface-1)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all var(--duration-base) var(--ease-default)',
  },
  feature: {
    background: 'var(--surface-1)',
    border: '1px solid var(--border)',
    borderLeft: '3px solid var(--accent)',
    borderRadius: 'var(--radius-md)',
  },
  ghost: {
    background: 'transparent',
    border: 'none',
    borderRadius: 'var(--radius-md)',
  },
};

const Card = ({
  children,
  variant = 'elevated',
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  const baseStyle = variantStyles[variant] || variantStyles.elevated;

  return (
    <div
      className={`card card-${variant} ${className} ${variant === 'interactive' ? 'glass-card' : ''}`.trim()}
      style={{ ...baseStyle, ...style }}
      onClick={onClick}
      onMouseEnter={variant === 'interactive' ? (e) => {
        e.currentTarget.style.borderColor = 'var(--border-hover)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      } : undefined}
      onMouseLeave={variant === 'interactive' ? (e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      } : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
