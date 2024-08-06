import React, { useState } from 'react';

const CreateProject = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(projectName);
    setProjectName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;
