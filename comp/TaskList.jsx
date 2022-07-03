import { useSelector } from 'react-redux';
import Task from './Task';

export default function TaskList() {
  const tasks = useSelector(store => store.task.task); // 'tasks' is an obj containing all tasks with every 'task' an an obj value and its id as the key
  console.log(tasks);
  return (
    <ul
      aria-labelledby="tasks for the day"
      id='task-list'
    >
      {Object.values(tasks).map(taskObj => <Task task={taskObj} key={taskObj.id || taskObj._id} />)}
    </ul>
  );
}
