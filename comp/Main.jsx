import { useDispatch, useSelector } from 'react-redux'
import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { showInputForm } from '../store/reducers/view';
import styles from "../styles/Main.module.css"

export default function Main() {
  const dispatch = useDispatch();

  const taskArr = useSelector(store => store.task.task);
  return (
    <>
      <main className={styles.main}>
        <h1>get moving</h1>
        <ul id={styles["task-container"]}>
          {taskArr.map(taskObj => <Task task={taskObj} key={taskObj.id} />)}
        </ul>

        <button id={styles["add-task-btn"]} type='button' onClick={() => dispatch(showInputForm())}>+</button>
      </main>
      <InpustTask />
    </>
  )
}