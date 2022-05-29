import { useDispatch, useSelector } from 'react-redux'
import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { showInputForm } from '../store/reducers/view';

export default function Main() {
  const dispatch = useDispatch();
  
  const taskArr = useSelector(store => store.task.task);
  return (
    <>
      <main>
        <h1>get moving</h1>
        <ul id="task-container">
          {taskArr.map(taskObj => <Task task={taskObj} key={taskObj.id}/>)}
        </ul>
      </main>

      <InpustTask/>

      <button id="add-task-btn" type='button' onClick={() => dispatch(showInputForm())}>+</button>
    </>
  )
}