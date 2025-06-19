import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projectsData';
import ProjectGallery from '../components/ProjectDetail/ProjectGallery';
import ProjectDescription from '../components/ProjectDetail/ProjectDescription';
import ProjectSidebar from '../components/ProjectDetail/ProjectSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === parseInt(projectId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="project-detail-container">
        <Helmet>
            <title>Project Not Found</title>
        </Helmet>
        <h2>Project Not Found</h2>
        <RouterLink to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </RouterLink>
      </div>
    );
  }

  const pageUrl = `https://ysnrw.github.io/myPortfolio/project/${project.id}`;
  const imageUrl = `https://ysnrw.github.io/myPortfolio${project.images[0]}`;

  return (
    <div className="project-detail-container">
      <Helmet>
        <title>{`Project: ${project.title} | Yusuf Nurwahid`}</title>
        <meta name="description" content={project.shortDesc} />

        <meta property="og:title" content={`Project: ${project.title}`} />
        <meta property="og:description" content={project.shortDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:title" content={`Project: ${project.title}`} />
        <meta name="twitter:description" content={project.shortDesc} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <RouterLink to="/" state={{ scrollTo: 'portfolio' }} className="back-link">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
      </RouterLink>

      <h1 className="detail-project-title">{project.title}</h1>

      <ProjectGallery images={project.images} title={project.title} />

      <div className="detail-main-content">
        <ProjectDescription description={project.longDesc} />
        <ProjectSidebar project={project} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;