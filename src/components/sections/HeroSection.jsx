import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';

/**
 * HeroSection: A reusable hero layout.
 * Accepts data as props rather than hardcoding content.
 */
const HeroSection = ({ badge, title, subtitle, children, className = '' }) => {
  return (
    <Section className={`hero-section ${className}`}>
      <Container className="hero-content text-center">
        {badge && <Badge>{badge}</Badge>}
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        
        {/* Render buttons or other specific CTA logic passed as children */}
        {children && <div className="hero-actions">{children}</div>}
      </Container>
    </Section>
  );
};

export default HeroSection;
