import React from 'react';

/**
 * Section enforces vertical spacing consistency (padding/margin) across the application.
 */
const Section = ({ children, className = '', id, ...props }) => {
  return (
    <section id={id} className={`section-padding ${className}`.trim()} {...props}>
      {children}
    </section>
  );
};

export default Section;
