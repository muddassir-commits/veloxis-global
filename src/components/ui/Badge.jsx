import React from 'react';

/**
 * Badge — Small status/label indicator.
 * Variants: default, accent, outline
 */
const Badge = ({ children, variant = 'default', className = '', style = {} }) => {
  const variants = {
    default: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      padding: '4px 0',
    },
    accent: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      padding: '4px 0',
    },
    pill: {
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: 'var(--text-secondary)',
      padding: '4px 10px',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-2)',
    },
  };

  return (
    <span
      className={`badge badge-${variant} ${className}`.trim()}
      style={{ display: 'inline-block', ...variants[variant], ...style }}
    >
      {children}
    </span>
  );
};

export default Badge;
