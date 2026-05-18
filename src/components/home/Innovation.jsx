import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { innovationCopy } from '../../constants/content';
import './Innovation.css';

const Innovation = () => {
  const navigate = useNavigate();

  return (
    <section className="innovation">
      <div className="innovation__inner">
        <motion.div
          className="innovation__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="innovation__label">{innovationCopy.badge}</span>
          <h2 className="innovation__title">{innovationCopy.title}</h2>
          <p className="innovation__body">{innovationCopy.body}</p>
          <button className="innovation__link" onClick={() => navigate('/about')}>
            {innovationCopy.cta} <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </motion.div>

        <div className="innovation__cards">
          {innovationCopy.cards.map((card, index) => (
            <motion.div
              key={index}
              className="innovation__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="innovation__card-id">{card.id}</span>
              <h3 className="innovation__card-title">{card.title}</h3>
              <p className="innovation__card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
