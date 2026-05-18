import React from 'react';

/**
 * Button — Primary UI primitive with strict variant system.
 * Variants: primary, secondary, ghost, outline, destructive
 * Sizes: sm, md, lg
 */
const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-sm)',
    transition: 'all var(--duration-base) var(--ease-default)',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    border: '1px solid transparent',
  },
  sizes: {
    sm: { fontSize: 'var(--text-sm)', padding: '8px 16px' },
    md: { fontSize: 'var(--text-sm)', padding: '11px 22px' },
    lg: { fontSize: 'var(--text-base)', padding: '14px 28px' },
  },
  variants: {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-inverse)',
      borderColor: 'var(--accent)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-hover)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'transparent',
    },
    outline: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'var(--accent-border)',
    },
  },
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  style: customStyle = {},
  ...props
}) => {
  const variantStyle = styles.variants[variant] || styles.variants.primary;
  const sizeStyle = styles.sizes[size] || styles.sizes.md;

  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles.base,
        ...sizeStyle,
        ...variantStyle,
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        ...customStyle,
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.background = 'var(--accent-hover)';
          e.currentTarget.style.borderColor = 'var(--accent-hover)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--text-secondary)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        } else if (variant === 'outline') {
          e.currentTarget.style.background = 'var(--accent-subtle)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = variantStyle.background;
        e.currentTarget.style.borderColor = variantStyle.borderColor;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
