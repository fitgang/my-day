// TODO: make the view of inputTAsk form a global state on the client side

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, Fab, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { validateData } from "../js/dataFunctions";
import { emptyForm, toggleFormDisplay, updateForm } from "../store/reducers/inputTask"
import NameField from './NameField';
import FromTimeField from './FromTimeField';
import ToTimeField from './ToTimeField';

export default function InputTask() {
  const { open, description, hasError } = useSelector(store => store.inputTask);
  const dispatch = useDispatch();

  // console.log(FromTimeField);

  return (
    <Box sx={{ position: 'relative', bottom: '20px' }}>
      <Fab color="primary" aria-label="add task" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <NameField />

            <TextField
              autoFocus
              id="input-description"
              label="Describe the task"
              type="text"
              fullWidth
              multiline
              rows={3}
              variant="filled"
              placeholder='The task will have a name and a description'
              value={description}
              onChange={(e) => dispatch(updateForm({ description: e.target.value }))}
            />

            <Stack direction="row" spacing={2}>
              {console.log(<FromTimeField />)}
              <ToTimeField />
            </Stack>

          </Stack>
        </DialogContent>

        <DialogActions>
          <Button size='large' onClick={handleClose}>Cancel</Button>
          <Button size="large" onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )

  function handleClickOpen() {
    dispatch(toggleFormDisplay(true))
  }

  function handleClose() {
    dispatch(toggleFormDisplay(false))
  }

  function handleSubmit() {
    // Check for errors
    if (hasError !== 0) {
      // Raise concern
      alert(`You have ${hasError} errors, clear them before submitting.`);
      return
    }
    // Create new task object
    validateAndCreateNewTask();
    // Save it to DB
    // Else update the store and inform the user about success
    // Empty and close the form
    dispatch(emptyForm());
    handleClose();
    console.log("submitted");
  }

  function validateAndCreateNewTask() {
    return
    // Validate data
    validateData()

    // View the first field with an error 
    if (errorFoundInElemAtIndex !== -1) {
      inputElems[errorFoundInElemAtIndex].focus();
      return
    }
  }
}

function validateInput(inputElem) {
  if (inputElem.type.includes("text")) {
    const input = inputElem.value.trimStart().replaceAll("  ", " ");
    inputElem.value = input;
  }
  return validateData(inputElem.value, inputElem.type)
}

function emptyFormAndHide(formElem) {
  // Hide form
  dispatch(hideInputForm());

  // Empty all fields in the form
  const inputElems = formElem.querySelectorAll("input, textarea");
  inputElems.forEach(elem => {
    // Clear fields
    elem.value = ""
    // Clear errors
    clearErrorBoxOf(elem);
  })
}

function showErrorToUser(error, inputElem) {
  const errorBox = inputElem.parentElement.querySelector(".error-box");
  errorBox.innerHTML = error;
}

function clearErrorBoxOf(inputElem) {
  const errorBox = inputElem.parentElement.querySelector(".error-box");
  errorBox.innerHTML = ""
}