import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectSidebar = ({ project }) => {
  return (
    <aside className="detail-sidebar">
      <div className="detail-info-card">
        <h3>Project Details</h3>
        <div className="info-item">
          <strong><FontAwesomeIcon icon={faUser} /> Client:</strong>
          <span>{project.client}</span>
        </div>
        <div className="info-item">
          <strong><FontAwesomeIcon icon={faCalendarAlt} /> Year:</strong>
          <span>{project.year}</span>
        </div>
        
        <strong>Technologies:</strong>
        <div className="tech-tags">
          {project.technologies.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
        </div>

        <div className="project-links">
          {project.liveLink && project.liveLink !== '#' && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
              <FontAwesomeIcon icon={faGlobe} /> Live Demo
            </a>
          )}
          {project.repoLink !=='#' && (
             <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FontAwesomeIcon icon={faCode} /> View Code
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ProjectSidebar;