import './Dashboard.css';
import TaskInput from '../components/TaskInput/TaskInput';
import TaskList from '../components/TaskList/TaskList';
import { useTasks } from '../hooks/useTasks';

function Dashboard() {
  const { tasks, handleAddTask, handleToggleTask, handleRemoveTask } =
    useTasks();


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
