import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { title: 'Multi-Channel Lead Routing Engine', desc: 'Automated B2B lead capture from Meta Ads, website forms, and WhatsApp into a unified CRM pipeline.', tags: ['n8n', 'CRM', 'Lead Gen'] },
  { title: 'AI-Powered Outreach Automation', desc: 'Conversational AI agent that qualifies prospects, books appointments, and syncs to sales pipelines automatically.', tags: ['AI Agent', 'Automation'] },
  { title: 'Operational Dashboard Platform', desc: 'Real-time systems monitoring dashboard tracking webhook health, pipeline throughput, and conversion rates.', tags: ['Analytics', 'Monitoring'] },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="home-projects">
      <div className="home-projects__inner">
        <motion.div
          className="home-projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="home-projects__label">Case Studies</span>
            <h2 className="home-projects__title">Systems we've built</h2>
          </div>
          <button className="home-projects__all" onClick={() => navigate('/projects')}>
            View all <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </motion.div>

        <div className="home-projects__grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => navigate('/projects')}
            >
              <div className="project-card__tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-card__tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
