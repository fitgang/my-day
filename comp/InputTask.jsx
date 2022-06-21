// TODO: make the view of inputTAsk form a global state on the client side
import { useDispatch, useSelector } from "react-redux";
import { AddIcon } from "./Icon";
import { validateData } from "../js/dataFunctions";
import {
  emptyForm,
  toggleFormDisplay,
  updateFormValues,
} from "../store/reducers/inputTask";
import InputField, { TimeField } from "./InputField";
import { useRef } from "react";

export default function InputTask() {
  const { open, name, description, to, from, newTask } = useSelector(
    (store) => store.inputTask
  );
  const dispatch = useDispatch();

  const formElem = useRef();

  return (
    <>
      <button aria-label="add task" onClick={handleClickOpen}>
        <AddIcon />
      </button>

      <div className={open === true ? "modal" : "none"}>
        <form id="input-task-form" ref={formElem}>
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

            <button onClick={handleSubmit}>Add</button>
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
  }

  function handleSubmit() {
    // Check for errors
    if (checkForErrors() === true) return;

    // Create new task object
    validateAndCreateNewTask();
    // Save it to DB
    // Else update the store and inform the user about success
    // Empty and close the form
    dispatch(emptyForm());
    handleClose();
    console.log("submitted");
  }

  function checkForErrors() {}

  function validateAndCreateNewTask() {
    return;
    // Validate data
    validateData();

    // View the first field with an error
    if (errorFoundInElemAtIndex !== -1) {
      inputElems[errorFoundInElemAtIndex].focus();
      return;
    }
  }
}

function validateInput(inputElem) {
  if (inputElem.type.includes("text")) {
    const input = inputElem.value.trimStart().replaceAll("  ", " ");
    inputElem.value = input;
  }
  return validateData(inputElem.value, inputElem.type);
}

function emptyFormAndHide(formElem) {
  // Hide form
  dispatch(hideInputForm());

  // Empty all fields in the form
  const inputElems = formElem.querySelectorAll("input, textarea");
  inputElems.forEach((elem) => {
    // Clear fields
    elem.value = "";
    // Clear errors
    clearErrorBoxOf(elem);
  });
}

function showErrorToUser(error, inputElem) {
  const errorBox = inputElem.parentElement.querySelector(".error-box");
  errorBox.innerHTML = error;
}

function clearErrorBoxOf(inputElem) {
  const errorBox = inputElem.parentElement.querySelector(".error-box");
  errorBox.innerHTML = "";
}
