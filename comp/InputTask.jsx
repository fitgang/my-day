// TODO: make the view of inputTAsk form a global state on the client side
import { useDispatch, useSelector } from "react-redux";
import { AddIcon } from "./Icon";
import { emptyForm, toggleFormDisplay } from "../store/reducers/inputTask";
import InputField, { TimeField } from "./InputField";
import { addTask, updateTask } from "../store/reducers/task";
import { storeTaskToDB } from "../js/dataFunctions";

export default function InputTask() {
  const { open, name, description, to, from, newTask, id } = useSelector(
    (store) => store.inputTask
  );
  const dispatch = useDispatch();

  return (
    <>
      <button aria-label="add task" onClick={handleClickOpen}>
        <AddIcon />
      </button>

      <div className={open === true ? "modal" : "none"}>
        <form id="input-task-form">
          <h2>{newTask === true ? "New Task" : "Edit Task"}</h2>

          <InputField
            id="input-name"
            name="name"
            label="Name"
            type="text"
            placeholder="Create a new task"
            value={name}
          />

          <InputField
            id="input-description"
            label="Describe the task"
            name="description"
            type="textarea"
            placeholder="The task will have a name and a description"
            value={description}
          />

          <div>
            <TimeField label="from" id="input-from" name="from" value={from} />
            <TimeField label="to" id="input-to" name="to" value={to} />
          </div>

          <div className="form-actions">
            <button onClick={handleClose} type="button">
              Cancel
            </button>

            <button onClick={handleSubmit}>
              {newTask === true ? "Add" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );

  function handleClickOpen() {
    dispatch(toggleFormDisplay(true));
  }

  function handleClose() {
    // Clears and hides the form
    dispatch(emptyForm());
    document
      .querySelectorAll(".error-box")
      .forEach((elem) => (elem.innerHTML = ""));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Check for errors and informs the user if found
    if (checkForErrors() === true) return;

    if (newTask === true) {
      // Create new task object
      const task = createNewTask();
      // Save it to DB
      const id = await storeTaskToDB(task);

      // If some error occured, inform the user and return
      if (id.length === 0) alert("error occured on storing to DB.");

      else {
        // Else update the store and change the UI
        task.id = id;
        dispatch(addTask(task));
      }

    } else {
      // If an old task is updated
      // A new task object will be replaced with the old one in the database
      const task = createNewTask();
      // Save it to DB
      // If some error occured, inform the user and return
      // Else update the store and change the UI

      dispatch(updateTask({ id, ...task }));
    }

    handleClose();
  }

  function checkForErrors() {
    let errorFound = false;

    // Check 'name' field
    if (name.trim().length === 0) {
      document.querySelector("#name .error-box").innerHTML =
        "*Please enter the task name.";
      errorFound = true;
    }

    // Check if time fields are empty
    if (from.hour.trim().length === 0) {
      document.querySelector("#from .error-box").innerHTML =
        "*Please provide an hour to start from";
      errorFound = true;
    }

    if (to.hour.trim().length === 0) {
      document.querySelector("#to .error-box").innerHTML =
        "*Please provide an hour as deadline.";
      errorFound = true;
    }

    if (errorFound) return true;

    // Check if 'from' time is greater than or equal to 'to' time
    if (from.m === to.m) {
      // If both are same,i.e., 'am' or 'pm'
      if (
        Number(from.hour) > Number(to.hour) ||
        (from.hour === to.hour && Number(from.min) >= Number(to.min))
      ) {
        ["from", "to"].forEach(
          (id) =>
            (document.querySelector(`#${id} .error-box`).innerHTML =
              "*Please choose a 'to' time which comes later than 'from' time or do the opposite.")
        );
        return true;
      }
    } else if (from.m.toLowerCase() === "pm") {
      ["from", "to"].forEach(
        (id) =>
          (document.querySelector(`#${id} .error-box`).innerHTML =
            "*Please choose a 'to' time which comes later than 'from' time or do the opposite.")
      );
      return true;
    }

    return false;
  }

  function createNewTask() {
    const task = {
      name: name.trim().replaceAll("  ", " "),
      description: description.trim().replaceAll("  ", " "),
      from: from,
      to: to,
    };
    return task;
  }
}
