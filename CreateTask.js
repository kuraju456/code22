import React, { useState } from 'react';

const CreateTask = ({ addTask, projects }) => {
  const [projectName, setProjectName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(projectName, taskName, taskTime);
    setProjectName('');
    setTaskName('');
    setTaskTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={projectName} onChange={(e) => setProjectName(e.target.value)} required>
        <option value="" disabled>Select Project</option>
        {projects.map((project, index) => <option key={index} value={project}>{project}</option>)}
      </select>
      <input type="text" placeholder="Enter Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      <input type="number" placeholder="Enter Time Spent (in hours)" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} required />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
