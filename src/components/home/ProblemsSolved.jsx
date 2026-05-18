import React from 'react';
import { motion } from 'framer-motion';
import './ProblemsSolved.css';

const problems = [
  { title: 'Automate Repetitive Tasks', desc: 'Save hours every week by automating repetitive business operations with AI workflows and smart automation systems.' },
  { title: 'Improve Lead Response Time', desc: 'AI lead generation systems instantly qualify and route leads to improve conversions and reduce missed opportunities.' },
  { title: 'Connect Your Tools Seamlessly', desc: 'n8n workflow automation connects CRMs, websites, forms, APIs, and communication platforms into one efficient system.' },
  { title: 'Scale Without Extra Headcount', desc: 'Build scalable operational processes so your team can focus on closing deals instead of manual data entry.' },
];

const ProblemsSolved = () => {
  return (
    <section className="problems">
      <div className="problems__inner">
        <motion.div
          className="problems__left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="problems__label">Common Challenges</span>
          <h2 className="problems__title">
            Manual work slowing down
            <span className="problems__title-accent"> your business?</span>
          </h2>
          <p className="problems__desc">
            Businesses lose revenue because of inefficient processes, disconnected systems, and repetitive tasks. We eliminate these problems using structured automation.
          </p>
        </motion.div>

        <div className="problems__list">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problems__item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="problems__item-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="problems__item-title">{problem.title}</h3>
                <p className="problems__item-desc">{problem.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolved;
