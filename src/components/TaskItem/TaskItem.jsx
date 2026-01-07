function TaskItem({taskObj}) {
  return <li className="task-item">
    <span>{taskObj.title}</span>

    <button>X</button>
  </li>;
}

export default TaskItem