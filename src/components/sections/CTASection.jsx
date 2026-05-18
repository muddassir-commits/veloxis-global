import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

/**
 * CTASection: A reusable Call To Action layout.
 */
const CTASection = ({ title, subtitle, children, className = '' }) => {
  return (
    <Section className={`cta-section text-center ${className}`}>
      <Container>
        {title && <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>{title}</h2>}
        {subtitle && <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>{subtitle}</p>}
        
        {/* Buttons are passed as children */}
        {children && (
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {children}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CTASection;
