import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { projectsCopy } from '../constants/content';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsCopy.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container section-padding text-center">
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn-primary mt-4">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,1)), url(${project.image})` }}>
        <div className="container">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          <div className="hero-content">
            <span className="section-badge">{project.category}</span>
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-subtitle">{project.desc}</p>
          </div>
        </div>
      </div>

      <section className="project-info section-padding">
        <div className="container">
          <div className="info-grid">
            <div className="info-main">
              <div className="info-block">
                <h3>The Challenge</h3>
                <p>{project.details.challenge}</p>
              </div>
              <div className="info-block">
                <h3>The Solution</h3>
                <p>{project.details.solution}</p>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="results-card glass-card">
                <h3>Key Results</h3>
                <ul className="results-list">
                  {project.details.results.map((result, i) => (
                    <li key={i}>
                      <CheckCircle size={20} className="text-accent" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="project-tags mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary w-full mt-6">
                  Book a Strategy Call <ExternalLink size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
