import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormDisplay, updateFormValues } from "../store/reducers/inputTask";
import { removeTask } from "../store/reducers/task";
import { DeleteIcon, EditIcon } from "./Icon";

export default function Options(props) {
  const dispatch = useDispatch();

  const optionsElem = useRef();

  // Use taskID passed as a prop to find the task in the store
  const task = useSelector((store) => store.task.task[props.taskID]);

  return (
    <div
      className="options"
      ref={optionsElem}
      style={{
        maxHeight:
          props.show === true ? `${optionsElem.current.scrollHeight}px` : 0,
      }}
    >
      <button type="button" onClick={editTask}>
        <EditIcon />
      </button>

      <button type="button" onClick={askForConfirmation}>
        <DeleteIcon />
      </button>
    </div>
  );

  async function askForConfirmation() {
    const confirm = window.confirm("Are you sure you want to delete the task.");

    if (confirm === true) {
      const status = await deleteTask(props.taskID);

      // If the status says successful
      // Update the UI
      // Alert the user
      if (status.code === 200) alert("Deleted.");
      // Else give an error message to the user
      else alert("Problem occured.");

      // Takes an ID, returns a status obj
      async function deleteTask(taskID) {
        // First delete the task from the database through an API

        // If successful,
        // Delete the task from the store
        dispatch(removeTask(taskID));
        // Return

        // Else failed
        // Give a suitable message causing the failure to the user
        return { code: 200 };
      }
    }
  }

  function editTask() {
    // Put the data accordingly in the 'InputTask' form
    dispatch(updateFormValues({newTask: false, ...task}));
    // Show the form
    dispatch(toggleFormDisplay(true));
    props.closeOptions();
  }
}
