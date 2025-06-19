import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const PortfolioItem = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`portfolio-box ${inView ? 'in-view' : ''}`}>
      <img src={project.images[0]} alt={project.title} className="portfolio-img" />
      <div className="portfolio-layer">
        <h4>{project.title}</h4>
        <p>{project.shortDesc}</p>
        <Link to={`/project/${project.id}`}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        {projectsData.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;