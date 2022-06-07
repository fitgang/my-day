import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useDispatch } from 'react-redux';
import { updateForm } from "../store/reducers/inputTask";

export default function TimeField(props) {
  const dispatch = useDispatch();

  const minHours = (new Date()).getHours(),
    minMinutes = (new Date()).getMinutes();

  const [helperText, setHelperText] = React.useState(''),
    [error, setError] = React.useState(props.hasOwnProperty("error") ? props.error : false);

  if (error === true) dispatch(updateForm({hasError: +1}));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        {...props}
        minTime={(new Date(0, 0, 0, minHours, minMinutes))}
        onError={handleError}
        onAccept={handleAccept}
        onChange={props.handleChange}
        renderInput={(params) => <TextField {...params} variant="filled" helperText={helperText} />}
      />
    </LocalizationProvider>
  );

  function handleAccept() {
    // Set form error status
    if (error === true) dispatch(updateForm({hasError: -1}));
    // Set local error status
    setError(false);
    setHelperText('')
  }

  function handleError(reason) {
    // Set form error status
    if (error === false) dispatch(updateForm({hasError: +1}));
    // Set local error
    setError(true);
    
    // Set helper text
    if (reason === "minTime") {
      
      let minTimeStr = '';

      if (minHours === 0) minTimeStr = `12:${minMinutes} AM`;
      else if (minHours === 12) minTimeStr = `12:${minMinutes} PM`;
      else if (minHours < 12) minTimeStr = `${minHours}:${minMinutes} AM`;
      else minTimeStr = `${minHours - 12}:${minMinutes} PM`;

      setHelperText(`Please choose a time after ${minTimeStr}`);
    }
  }
}
