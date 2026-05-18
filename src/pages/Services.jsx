import React from 'react';
import { useNavigate } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import HeroSection from '../components/sections/HeroSection';
import GridSection from '../components/sections/GridSection';
import Button from '../components/ui/Button';
import { serviceData, getTopLevelServices } from '../data/services';

const ServicesPage = () => {
  const navigate = useNavigate();
  const topLevelServices = getTopLevelServices();

  // Map the registry data into the format expected by GridSection
  const gridItems = topLevelServices.map(service => ({
    id: service.id,
    title: service.title,
    desc: service.shortDesc,
    // Provide a generic button in the description slot or extend GridSection
    // In our new GridSection, we can render arbitrary children or just use desc
    // For now, we'll map the description, but future revisions can add CTA support inside cards.
  }));

  return (
    <div className="services-page" style={{ paddingTop: '100px' }}>
      <SeoHead 
        title={serviceData.seo.title} 
        description={serviceData.seo.description} 
      />
      
      <HeroSection 
        badge={serviceData.hero.badge}
        title={serviceData.hero.title}
        subtitle={serviceData.hero.subtitle}
      />

      <GridSection 
        items={gridItems} 
        columns={2} // Use 2 columns for services to give them more room
      />
    </div>
  );
};

export default ServicesPage;

