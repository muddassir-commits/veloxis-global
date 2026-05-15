import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectsSection from '../components/home/Projects';

const ProjectsPage = () => {
  return (
    <div className="projects-page" style={{ paddingTop: '100px' }}>
      <Helmet>
        <title>Our Projects | AI Automation & Growth Systems | Veloxis Global</title>
        <meta name="description" content="View our portfolio of successful AI automation, lead generation, and CRM implementation projects for real estate, healthcare, B2B, and service businesses." />
      </Helmet>
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;
