import React, { useState, useRef } from 'react';

const TaskList = ({ tasks }) => {
  const [timers, setTimers] = useState({});

  const intervalRef = useRef({});

  const startTimer = (taskId) => {
    const startTime = Date.now();
    setTimers({ ...timers, [taskId]: startTime });
    intervalRef.current[taskId] = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      setTimers({ ...timers, [taskId]: startTime + elapsedSeconds * 1000 });
    }, 1000);
  };

  const stopTimer = (taskId) => {
    clearInterval(intervalRef.current[taskId]);
    const startTime = timers[taskId];
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000;
    alert(`Time spent on task: ${elapsedTime} seconds`);
    setTimers({ ...timers, [taskId]: null });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h3>Task List</h3>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Task Name</th>
            <th>Task Time</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.project}</td>
              <td>{task.taskName}</td>
              <td>{task.taskTime}</td>
              <td>
                {timers[`${task.project}_${task.taskName}`] ? (
                  <div>
                    <span>{formatTime(Math.floor((Date.now() - timers[`${task.project}_${task.taskName}`]) / 1000))}</span>
                    <button onClick={() => stopTimer(`${task.project}_${task.taskName}`)}>Stop</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => startTimer(`${task.project}_${task.taskName}`)}>Start</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
