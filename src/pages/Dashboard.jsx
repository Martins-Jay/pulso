import { useEffect, useState } from 'react';
import './Dashboard.css';
import TaskInput from '../components/TaskInput/TaskInput';
import TaskList from '../components/TaskList/TaskList';

function Dashboard() {
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

  useEffect(
    function () {
      console.log(tasks);
    },
    [tasks]
  );

  return (
    <section className="dashboard">
      <h2>Tasks</h2>

      <TaskInput onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
      />
    </section>
  );
}

export default Dashboard;
