import './Dashboard.css';
import TaskInput from '../components/TaskInput/TaskInput';
import TaskList from '../components/TaskList/TaskList';
import { useTasks } from '../hooks/useTasks';
import { useState } from 'react';

function Dashboard() {
  const {
    tasks,
    totalTasks,
    completedTaskCount,
    activeTaskCount,
    handleAddTask,
    handleToggleTask,
    handleRemoveTask,
    handleEditTask,
  } = useTasks();

  const [filter, setFilter] = useState('all');

  const filteredTask = tasks.filter((taskObj) => {
    if (filter === 'active') return !taskObj.isCompleted;
    if (filter === 'completed') return taskObj.isCompleted;
    return true; // all
  });

  return (
    <section className="dashboard">
      <h2>Tasks</h2>
      <p>
        Total: {totalTasks} | Active: {activeTaskCount} | Completed:{' '}
        {completedTaskCount}
      </p>

      <TaskInput onAddTask={handleAddTask} />

      <div className="task-filters">
        <button
          className={`${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>

        <button
          className={`${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>

        <button
          className={`${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <TaskList
        tasks={filteredTask}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
        onEditTask={handleEditTask}
      />
    </section>
  );
}

export default Dashboard;
