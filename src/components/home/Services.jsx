import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesCopy } from '../../constants/content';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="home-services">
      <div className="home-services__inner">
        <motion.div
          className="home-services__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="home-services__label">{servicesCopy.badge}</span>
          <h2 className="home-services__title">{servicesCopy.title}</h2>
          <p className="home-services__subtitle">{servicesCopy.subtitle}</p>
        </motion.div>

        <div className="home-services__grid">
          {servicesCopy.services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => navigate(service.link || '/contact')}
            >
              <div className="service-card__number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <span className="service-card__link">
                Learn more <ArrowUpRight size={14} strokeWidth={1.5} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
