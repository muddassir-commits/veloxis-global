import React from 'react';
import { motion } from 'framer-motion';
import './ProblemsSolved.css';
import { Settings, Zap, Repeat, TrendingUp } from 'lucide-react';

const problems = [
  {
    icon: <Repeat size={24} />,
    title: 'Automate Repetitive Tasks',
    desc: 'Save hours every week by automating repetitive business operations with AI workflows and smart automation systems.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Improve Lead Response Time',
    desc: 'Our AI lead generation systems instantly qualify and route leads to improve conversions and reduce missed opportunities.'
  },
  {
    icon: <Settings size={24} />,
    title: 'Connect Your Tools Seamlessly',
    desc: 'We use n8n workflow automation to connect CRMs, websites, forms, APIs, and communication platforms into one efficient system.'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Scale Operations Without Extra Headcount',
    desc: 'Build scalable operational processes so your team can focus on closing deals instead of manual data entry.'
  }
];

const ProblemsSolved = () => {
  return (
    <section className="problems-solved">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="problems-header"
        >
          <h2>Manual Work Slowing Down Your Business?</h2>
          <p>Many businesses lose valuable time and revenue because of inefficient processes, disconnected systems, and repetitive tasks. Veloxis Global helps companies eliminate these problems using AI automation services.</p>
        </motion.div>
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="problem-card" 
              key={index}
            >
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolved;
