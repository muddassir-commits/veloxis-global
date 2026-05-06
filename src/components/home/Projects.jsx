import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsCopy } from '../../constants/content';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">{projectsCopy.badge}</span>
          <h2 className="section-title">{projectsCopy.title}</h2>
          <p className="section-subtitle">{projectsCopy.subtitle}</p>
        </div>
        
        <div className="projects-list">
          {projectsCopy.projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      <span className="tag-dot"></span> {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.slug}`} className="btn-text">
                  {projectsCopy.cta} <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
