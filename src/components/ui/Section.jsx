import React from 'react';

/**
 * Section — Structural layout primitive with variant support.
 * Variants: default, alternate (surface-2 bg), featured (accent-subtle bg), editorial (narrow)
 */
const Section = ({ children, className = '', variant = 'default', style = {}, id, ...props }) => {
  const variants = {
    default: { padding: 'var(--space-24) 0' },
    alternate: { padding: 'var(--space-24) 0', background: 'var(--surface-1)' },
    featured: { padding: 'var(--space-24) 0', background: 'var(--accent-subtle)' },
    compact: { padding: 'var(--space-16) 0' },
    hero: { padding: 'var(--space-32) 0', paddingTop: 'calc(var(--space-32) + 80px)' },
  };

  return (
    <section
      className={`section section-${variant} ${className}`.trim()}
      style={{ position: 'relative', ...variants[variant], ...style }}
      id={id}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
