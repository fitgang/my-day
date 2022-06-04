import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import Task from './Task';

export default function TaskList() {
  const taskArr = useSelector(store => store.task.task);

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
      {taskArr.map(taskObj => <Task task={taskObj} key={taskObj.id} border={border} />)}
    </List>
  );
}
