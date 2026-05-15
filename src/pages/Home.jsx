import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Innovation from '../components/home/Innovation';
import Projects from '../components/home/Projects';
import Services from '../components/home/Services';
import ProblemsSolved from '../components/home/ProblemsSolved';
import Process from '../components/home/Process';
import Industries from '../components/home/Industries';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import MentorshipBridge from '../components/home/MentorshipBridge';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>AI Automation Agency | n8n Workflows, Lead Generation & AI Websites</title>
        <meta name="description" content="Scale your business with AI automation services, n8n workflows, AI lead generation systems, and AI-powered websites designed to increase leads, sales, and operational efficiency." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Veloxis Global",
              "url": "https://veloxisglobal.com",
              "logo": "https://veloxisglobal.com/logo.png",
              "description": "Scale your business with AI automation services, n8n workflows, AI lead generation systems, and AI-powered websites designed to increase leads, sales, and operational efficiency."
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <ProblemsSolved />
      <Process />
      <Industries />
      <Innovation />
      <Projects />
      <Pricing />
      <MentorshipBridge />
      <FAQ />
    </div>
  );
};

export default Home;
