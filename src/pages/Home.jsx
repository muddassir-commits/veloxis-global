import React from 'react';
import SeoHead from '../components/seo/SeoHead';
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
import { homeData } from '../data/home';

const Home = () => {
  return (
    <div className="home-page">
      <SeoHead 
        title={homeData.seo.title} 
        description={homeData.seo.description} 
        schemaType={homeData.seo.schemaType}
      />
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

