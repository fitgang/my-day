import { useSelector } from 'react-redux'
import Task from '../comp/Task'
import InputTask from '../comp/InputTask'
import styles from "../styles/Main.module.css"

export default function Main() {

  const taskArr = useSelector(store => store.task.task);
  return (
      <main className={styles.main}>
        <h1>get moving</h1>
        <ul id={styles["task-container"]}>
          {taskArr.map(taskObj => <Task task={taskObj} key={taskObj.id} />)}
        </ul>

      <InputTask />
      </main>
  )
}