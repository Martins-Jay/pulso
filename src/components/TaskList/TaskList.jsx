import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css'

function TaskList({ tasks, onToggleTask, onRemoveTask, onEditTask }) {
  // conditional rendering: show message if theres no task yet
  if (tasks.length === 0) {
    return <p className="empty-text">No task added yet</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((taskObj) => (
        <TaskItem
          key={taskObj.id}
          taskObj={taskObj}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
