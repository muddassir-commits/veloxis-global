import React from 'react';
import Hero from '../components/home/Hero';
import Innovation from '../components/home/Innovation';
import Projects from '../components/home/Projects';
import Services from '../components/home/Services';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';

import MentorshipBridge from '../components/home/MentorshipBridge';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Innovation />
      <Projects />
      <Services />
      <Pricing />
      <MentorshipBridge />
      <FAQ />
    </div>
  );
};

export default Home;
