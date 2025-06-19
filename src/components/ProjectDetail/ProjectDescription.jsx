import React from 'react';

const ProjectDescription = ({ description }) => {
  return (
    <div className="detail-description">
      <h2>About This Project</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectDescription;