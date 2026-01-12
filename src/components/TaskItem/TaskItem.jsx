import { useEffect, useRef, useState } from 'react';
import './TaskItem.css';

function TaskItem({ taskObj, onToggleTask, onRemoveTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef(null);

  // Auto-focus input when Editing starts
  useEffect(
    function () {
      function handleGlobalKeydown(e) {
        if (
          isEditing &&
          e.key.length === 1 &&
          !e.ctrl &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.altKey
        ) {
          editInputRef.current.focus();
        }
      }

      document.addEventListener('keydown', handleGlobalKeydown);

      return function () {
        document.removeEventListener('keydown', handleGlobalKeydown);
      };
    },
    [isEditing]
  );

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const taskId = taskObj.id;

      const normalized = editInputRef.current.value.trim();
      const newEnteredTask =
        normalized.slice(0, 1).toUpperCase() + normalized.slice(1);

      if (!newEnteredTask) return;
      onEditTask(taskId, newEnteredTask);
      setIsEditing(!isEditing);
    }

    if (e.key === 'Escape') setIsEditing(!isEditing);
  }

  return (
    <li className={`task-item ${taskObj.isCompleted ? 'completed' : ''}`}>
      <input type="checkbox" onChange={() => onToggleTask(taskObj.id)} />

      {isEditing ? (
        <input
          type="text"
          aria-label="Edit task"
          onKeyDown={handleKeyDown}
          ref={editInputRef}
        />
      ) : (
        <span className="task-text">{taskObj.text}</span>
      )}

      <div className="task-buttons">
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onRemoveTask(taskObj.id)}>
          X
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
