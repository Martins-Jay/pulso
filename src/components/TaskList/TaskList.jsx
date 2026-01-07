import TaskItem from '../TaskItem/TaskItem';

function TaskList(taskArr) {
  return taskArr.map((taskObj) => <TaskItem taskObj={taskObj} />);
}

export default TaskList