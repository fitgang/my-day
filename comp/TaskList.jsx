import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import Task from './Task';

export default function TaskList() {
  const tasks = useSelector(store => store.task.task); // 'tasks' is an obj containing all tasks with every 'task' an an obj value and its id as the key

  const border = '0.5px solid';
  return (
    <List
      sx={{
        padding: 0,
        borderLeft: border, 
        borderRight: border,
        overflowY: 'auto',
        maxHeight: '90%',
      }}
      aria-labelledby="tasks for the day"
    >
      {Object.values(tasks).map(taskObj => <Task task={taskObj} key={taskObj.id} border={border} />)}
    </List>
  );
}
