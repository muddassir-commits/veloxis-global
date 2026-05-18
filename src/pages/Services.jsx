import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SeoHead from '../components/seo/SeoHead';
import { serviceData } from '../data/services';
import './Services.css';

const Services = () => {
  const services = Object.values(serviceData.registry);

  return (
    <div className="services-page">
      <SeoHead
        title="AI Automation Services for Modern Businesses | Veloxis Global"
        description="Enterprise-grade AI automation, n8n workflow engineering, CRM integrations, and smart lead generation systems."
      />

      {/* Hero */}
      <section className="services-page__hero">
        <div className="services-page__hero-inner">
          <span className="services-page__label">Core Services</span>
          <h1 className="services-page__title">AI Automation Services for Modern Businesses</h1>
          <p className="services-page__subtitle">
            At Veloxis Global, we deliver AI automation services designed to help modern businesses reduce manual work, improve productivity, and scale efficiently.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page__grid-section">
        <div className="services-page__grid-inner">
          <div className="services-page__grid">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={service.slug}
                className="services-page__card"
              >
                <span className="services-page__card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="services-page__card-title">{service.title}</h2>
                <p className="services-page__card-desc">
                  {service.shortDesc}
                </p>
                <span className="services-page__card-link">
                  View Service <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
