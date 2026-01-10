import { useState } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Derived state
  const totalTasks = tasks.length;
  const completedTaskCount = tasks.filter(
    (taskObj) => taskObj.isCompleted
  ).length;
  const activeTaskCount = totalTasks - completedTaskCount;

  function handleAddTask(formattedTask) {
    // Create a new task object
    const newTask = {
      id: Date.now(),
      text: formattedTask,
      isCompleted: false,
    };

    // Update state with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleToggleTask(selectedId) {
    setTasks((prevTasks) =>
      prevTasks.map((taskObj) =>
        taskObj.id === selectedId
          ? { ...taskObj, isCompleted: !taskObj.isCompleted }
          : taskObj
      )
    );
  }

  function handleRemoveTask(selectedId) {
    setTasks((prevTasks) =>
      prevTasks.filter((taskObj) => taskObj.id !== selectedId)
    );
  }

  return {
    tasks,
    totalTasks,
    completedTaskCount,
    activeTaskCount,
    handleAddTask,
    handleToggleTask,
    handleRemoveTask,
  };
}
