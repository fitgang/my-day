import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../store/reducers/task";
import { CheckIcon } from "./Icon";

export default function CheckBox(props) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false),
    [timeoutID, setTimeoutID] = useState();

  const taskID = props.taskID;

  return (
    <div className="checkbox" aria-label="checkbox" onClick={toggleCheck}>
      {check === true ? <CheckIcon /> : <></>}
    </div>
  );

  function toggleCheck() {

    if (check === false) {
      // Set the current status of task to completed
      // Remove the task from DB and UI
      let id = setTimeout(() => dispatch(removeTask(taskID)), 3000);
      setTimeoutID(id)
    }

    else {
      // Clear the previous timeout, if present
      clearTimeout(timeoutID);
      setTimeoutID(null)
    }
    setCheck((prev) => !prev);
  }
}
