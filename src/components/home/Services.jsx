import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, LineChart, Cpu, Layout, Target, Settings, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesCopy } from '../../constants/content';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const iconMap = [
    <Target size={24} />,
    <Settings size={24} />,
    <Zap size={24} />,
    <Globe size={24} />
  ];

  return (
    <section className="services section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <span className="section-badge">{servicesCopy.badge}</span>
          <h2 className="section-title">{servicesCopy.title}</h2>
          <p className="section-subtitle">{servicesCopy.subtitle}</p>
        </motion.div>

        <div className="services-tabs">
          {servicesCopy.services.map((service, index) => (
            <button 
              key={index} 
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="service-display glass-card"
        >
          <div className="service-info">
            <div className="service-icon-box">
              {iconMap[activeTab]}
            </div>
            <h3>{servicesCopy.services[activeTab].title}</h3>
            <p className="service-desc">{servicesCopy.services[activeTab].desc}</p>
            <ul className="service-points">
              {servicesCopy.services[activeTab].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button className="btn-primary" onClick={() => navigate(servicesCopy.services[activeTab].link || '/contact')}>{servicesCopy.services[activeTab].cta}</button>
          </div>
          <div className="service-image">
            <img src={servicesCopy.services[activeTab].image} alt={servicesCopy.services[activeTab].title} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
