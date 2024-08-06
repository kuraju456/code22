import React, { useState, useEffect } from 'react';
import CreateProject from './CreateProject';
import CreateTask from './CreateTask';
import ProjectList from './ProjcetList';
import TaskList from './TaskList';


const TimeTrackingApp = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    setProjects(savedProjects);
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addProject = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const addTask = (projectName, taskName, taskTime) => {
    setTasks([...tasks, { project: projectName, taskName: taskName, taskTime: taskTime }]);
  };

  return (
    <div>
      <h2>Time Tracking App</h2>
      <CreateProject addProject={addProject} />
      <ProjectList projects={projects} />
      <CreateTask addTask={addTask} projects={projects} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TimeTrackingApp;
