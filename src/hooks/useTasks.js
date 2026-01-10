import { useState } from "react";

export function useTasks() {
  // State to store all tasks
  const [tasks, setTasks] = useState([]);

  function handleAddTask(formattedTask) {
    // Create a new task object
    const newTask = {
      id: Date.now(),
      text: formattedTask,
      isCompleted: false,
    };

    // Update state with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(tasks);
  }

  function handleToggleTask(selectedId) {
    setTasks((prevTasks) =>
      prevTasks.map((taskObj) =>
        taskObj.id === selectedId ? { ...taskObj, isCompleted: true } : taskObj
      )
    );
  }

  function handleRemoveTask(selectedId) {
    setTasks((prevTasks) =>
      prevTasks.filter((taskObj) => taskObj.id !== selectedId)
    );
  }

  return {tasks, handleAddTask, handleToggleTask, handleRemoveTask}
}