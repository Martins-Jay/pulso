import { useRef } from 'react';
import './TaskInput.css';

function TaskInput({ onAddTask }) {
  // Ref to access the input DOM element
  const taskInputRef = useRef();

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
      <input type="text" placeholder="Add a new task..." ref={taskInputRef} />

      <button onClick={submitTaskHandler}>Add</button>
    </div>
  );
}

export default TaskInput;
