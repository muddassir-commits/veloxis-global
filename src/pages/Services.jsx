import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/home/Services';

const ServicesPage = () => {
  return (
    <div className="services-page" style={{ paddingTop: '100px' }}>
      <Helmet>
        <title>Our Services | AI Automation & Web Development | Veloxis Global</title>
        <meta name="description" content="Explore our core services including AI automation, n8n workflows, CRM implementation, AI lead generation, and custom web development designed for growth." />
      </Helmet>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
