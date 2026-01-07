import { useState } from 'react';
import './Dashboard.css';
import TaskInput from '../components/TaskInput/TaskInput';

function Dashboard() {
  // State to store all tasks
  const [tasks, setTasks] = useState([]);

  function handleAddTask(enteredTask) {
    // Create a new task object
    const newTask = {
      id: Date.now(),
      text: enteredTask,
      isCompleted: false,
    };

    // Update state with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(tasks);
  }

  return (
    <section className="dashboard">
      <h2>Tasks</h2>

      <TaskInput onAddTask={handleAddTask} />
    </section>
  );
}

export default Dashboard;
