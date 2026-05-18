import React from 'react';

/**
 * Container — Width-constrained layout primitive.
 * Sizes: narrow (720px), default (1120px), wide (1400px)
 */
const Container = ({ children, size = 'default', className = '', style = {} }) => {
  const widths = {
    narrow: 'var(--content-width)',
    default: 'var(--page-width)',
    wide: 'var(--wide-width)',
  };

  return (
    <div
      className={`container container-${size} ${className}`.trim()}
      style={{
        maxWidth: widths[size],
        margin: '0 auto',
        padding: '0 var(--space-6)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
