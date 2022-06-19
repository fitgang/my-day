import { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../store/reducers/task";
import { DeleteIcon, EditIcon } from "./Icon";

export default function Options(props) {
  const dispatch = useDispatch();

  const optionsElem = useRef();

  return (
    <div
      className="options"
      ref={optionsElem}
      style={{
        maxHeight:
          props.show === true ? `${optionsElem.current.scrollHeight}px` : 0,
      }}
    >
      <button type="button">
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

  function handleClickOnEdit() {
    // Use taskID passed as a prop to find the task in the store
    // Put the data accordingly in the 'InputTask' form
  }
}
