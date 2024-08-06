import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => <li key={index}>{project}</li>)}
      </ul>
    </div>
  );
};

export default ProjectList;
