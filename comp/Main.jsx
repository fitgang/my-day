import TaskList from "./TaskList";
import Bar from "./Bar";
import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <main>
      <h1>get moving</h1>
      <TaskList />
      <Bar />
    </main>
  );
}
