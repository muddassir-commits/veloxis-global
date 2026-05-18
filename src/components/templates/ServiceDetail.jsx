import React from 'react';
import SeoHead from '../seo/SeoHead';
import HeroSection from '../sections/HeroSection';
import GridSection from '../sections/GridSection';
import CTASection from '../sections/CTASection';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MarkdownRenderer from '../cms/MarkdownRenderer';
import { serviceData as legacyRegistry } from '../../data/services';

/**
 * ServiceDetail Template
 * 
 * A single, dynamic generic template capable of rendering ANY service.
 * It prioritizes Markdown CMS data if provided, falling back to the legacy registry.
 */
const ServiceDetail = ({ serviceId, markdownContent, cmsData }) => {
  // If CMS data is passed, it becomes the canonical source of truth.
  // Otherwise, fallback to the legacy JS registry for backward compatibility.
  const service = cmsData || legacyRegistry.registry[serviceId];

  // Safety fallback if a service ID doesn't exist
  if (!service) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <p>The requested service could not be located.</p>
      </div>
    );
  }

  // Format points into generic grid items
  const featureItems = service.points ? service.points.map((point, index) => ({
    id: `point-${index}`,
    desc: point
  })) : [];

  // Use explicit markdown content if provided via CMS loader
  const bodyContent = markdownContent || service.content;

  return (
    <div className="service-detail-page" style={{ paddingTop: '100px' }}>
      <SeoHead 
        title={service.seo?.title || service.title} 
        description={service.seo?.description || service.shortDesc}
        schemaType={service.seo?.schemaType || "Service"}
        noIndex={service.status === 'review'}
        cmsData={service}
      />

      <HeroSection 
        badge={service.hero?.badge || "Service Details"}
        title={service.title}
        subtitle={service.hero?.subtitle || service.shortDesc}
      >
        <Button variant="primary">{service.hero?.ctaText || service.ctaText || "Explore Service"}</Button>
      </HeroSection>

      {/* Dynamic Markdown Body Injection */}
      {bodyContent && (
        <Section className="service-markdown-body">
          <Container>
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px' }}>
              <MarkdownRenderer content={bodyContent} />
            </div>
          </Container>
        </Section>
      )}

      {/* If the service has detail points, render them via GridSection */}
      {featureItems.length > 0 && (
        <GridSection 
          title="What This Includes"
          items={featureItems} 
          columns={2}
        />
      )}

      <CTASection 
        title="Ready to automate and scale?"
        subtitle="Book a free workflow audit to see how this service applies to your business."
      >
        <Button variant="primary">Book Free Strategy Call</Button>
      </CTASection>
    </div>
  );
};

export default ServiceDetail;


