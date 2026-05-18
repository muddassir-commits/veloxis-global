import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import HeroSection from '../components/sections/HeroSection';
import GridSection from '../components/sections/GridSection';
import { projectsData } from '../data/projects';

const ProjectsPage = () => {
  // Map project data to grid items
  const gridItems = projectsData.list.map(project => ({
    id: project.id,
    title: project.title,
    desc: project.desc,
  }));

  return (
    <div className="projects-page" style={{ paddingTop: '100px' }}>
      <SeoHead 
        title={projectsData.seo.title} 
        description={projectsData.seo.description} 
      />
      
      <HeroSection 
        badge={projectsData.hero.badge}
        title={projectsData.hero.title}
        subtitle={projectsData.hero.subtitle}
      />

      <GridSection 
        items={gridItems} 
        columns={2}
      />
    </div>
  );
};

export default ProjectsPage;

