import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from "../store/reducers/inputTask";

export default function FromTimeField() {
  const { from } = useSelector(store => store.inputTask);
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="From"
        value={from}
        onChange={(newValue) => dispatch(updateForm({ from: newValue.getTime() }))}
        renderInput={(params) => <TextField {...params} variant="filled" />}
      />
    </LocalizationProvider>
  );
}
