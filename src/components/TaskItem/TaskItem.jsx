import './TaskItem.css';

function TaskItem({ taskObj, onToggleTask, onRemoveTask }) {
  return (
    <li
      className={`task-item ${taskObj.isCompleted ? 'completed' : ''}`}
      onClick={() => onToggleTask(taskObj.id)}
    >
      <span className="task-text">{taskObj.text}</span>

      <button className="delete-btn" onClick={() => onRemoveTask(taskObj.id)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;
