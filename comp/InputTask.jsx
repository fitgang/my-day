// TODO: make the view of inputTAsk form a global state on the client side
import { useDispatch, useSelector } from "react-redux";
import { validateData } from "../js/dataFunctions";
import {
  emptyForm,
  toggleFormDisplay,
  updateFormValues,
} from "../store/reducers/inputTask";
import NameField from "./NameField";
import FromTimeField from "./FromTimeField";
import ToTimeField from "./ToTimeField";
import InputField from "./InputField";

export default function InputTask() {
  const { open, description, newTask, errors } = useSelector(
    (store) => store.inputTask
  );
  const dispatch = useDispatch();

  // console.log(FromTimeField);

  return (
    <div>
      <button aria-label="add task" onClick={handleClickOpen}></button>

      <form open={open} onClose={handleClose}>
        <h2>{newTask === true ? "New Task" : "Edit Task"}</h2>

        <NameField />

        <InputField />

        <div>
          <FromTimeField />
          <ToTimeField />
        </div>

        <div className="form-actions">
          <button size="large" onClick={handleClose} type="button">
            Cancel
          </button>
          <button size="large" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
    </div>
  );

  function handleClickOpen() {
    dispatch(toggleFormDisplay(true));
  }

  function handleClose() {
    dispatch(toggleFormDisplay(false));
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

  function checkForErrors() {
    console.table(errors);
    for (let field in errors) {
      if (errors[field] === true) return true;
    }

    return false;
  }

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
