import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, Fab, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TimeField from './TimeField';
import { validateData } from "../js/dataFunctions";

export default function InputTask() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{position: 'relative', bottom: '20px'}}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Task</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              autoFocus
              id="input-name"
              label="Name"
              type="text"
              fullWidth
              variant="filled"
              placeholder='Create a new task'
            />

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
            />

            <Stack direction="row" spacing={2}>
              <TimeField label="From" variant="filled" />
              <TimeField label="To" variant="filled" />
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
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleSubmit() {
    console.log("submitted");
    handleClose();
  }
}


function IpustTask() {
  const { view } = useSelector(state => state.view);
  const dispatch = useDispatch();

  return (
    <form id="input-task-form" className={view === true ? "" : "none"} onSubmit={handleSubmit} noValidate>

      <div className="field-grp">
        {/*heading */}
        <div className="field form-floating">
          <label htmlFor="input-heading">write a task</label>
          <input type="text" className="form-control" id="input-heading" />
          <div className="error-box"></div>
        </div>
        {/*description */}
        <div className="field form-floating">
          <label htmlFor="input-description">describe the task</label>
          <textarea id="input-description" className="form-control"></textarea>
          <div className="error-box"></div>
        </div>
      </div>

      <div className="field-grp">
        {/*from time */}
        <div className="field form-floating">
          <label htmlFor="input-from">from time</label>
          <input type="time" className="form-control" id="input-from" />
          <div className="error-box"></div>
        </div>
        {/*to time */}
        <div className="field form-floating">
          <label htmlFor="input-to">to time</label>
          <input type="time" className="form-control" id="input-to" />
          <div className="error-box"></div>
        </div>
      </div>

      <div className="btn-grp">
        <button type="submit">add</button>
        <button type="button" onClick={(e) => emptyFormAndHide(document.getElementById("input-task-form"))}>cancel</button>
      </div>
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault();
    // Validate data
    const inputElems = e.target.querySelectorAll("input, textarea");
    let errorFoundInElemAtIndex = -1;

    inputElems.forEach((elem, index) => {
      clearErrorBoxOf(elem);

      const errorStr = validateInput(elem);
      if (errorStr !== undefined) {
        // Raise warning if errors found
        if (errorFoundInElemAtIndex === -1) errorFoundInElemAtIndex = index;
        showErrorToUser(errorStr, elem);
      }
      // Else do nothing
    });

    // View the first field with an error 
    if (errorFoundInElemAtIndex !== -1) {
      inputElems[errorFoundInElemAtIndex].focus();
      return
    }

    // Else Store to database
    // Raise warning if a problem occurs on storing in DB

    // Update redux store

    // Hide form
    emptyFormAndHide(e.target);

    // Inform user about success
    // Add the new task to UI
    // Show a success toast
    console.log("correct inputs");
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
}