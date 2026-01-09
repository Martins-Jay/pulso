import { useEffect, useRef } from 'react';
import './TaskInput.css';

function TaskInput({ onAddTask }) {
  // Ref to access the input DOM element without re-rendering
  const taskInputRef = useRef();

  useEffect(function () {
    function handleGlobalKeydown(e) {
      // Focus input when user starts typing anywhere
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        taskInputRef.current.focus();
      }
    }

    document.addEventListener('keydown', handleGlobalKeydown);

    return function () {
      document.removeEventListener('keydown', handleGlobalKeydown);
    };
  }, []);

  function handleKeyDown(e) {
    if (e.code === 'Enter') {
      submitTaskHandler();
    }
  }

  function submitTaskHandler() {
    // Get the task entered by the user
    const enteredTask = taskInputRef.current.value;

    if (!enteredTask) return;

    // Forward the entered task to the parent so it can be used to update the state in the parent
    onAddTask(enteredTask);

    // Clear the input field
    taskInputRef.current.value = '';

    // Focus back on the input field for faster entry
    taskInputRef.current.focus();
  }

  return (
    <div className="task-input-container">
      {/* Label to improve accessibility even though it is visually hidden */}
      <label htmlFor="task-input" className="visually-hidden">
        Add a new task
      </label>

      <input
        type="text"
        placeholder="Add a new task..."
        onKeyDown={handleKeyDown}
        ref={taskInputRef}
      />

      <button onClick={submitTaskHandler}>Add</button>
    </div>
  );
}

export default TaskInput;
