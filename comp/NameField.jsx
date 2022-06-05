import { useState } from "react";
import { useSelector } from "react-redux"
import { TextField } from "@mui/material";

export default function NameField() {
  const { name } = useSelector(store => store.inputTask);
  const [error, setError] = useState(false),
    [helperText, setHelperText] = useState('');

  return (
    <TextField
      autoFocus
      id="input-name"
      label="Name"
      type="text"
      fullWidth
      variant="filled"
      placeholder='Create a new task'
      value={name}
      error={error}
      helperText={helperText}
      onChange={handleChange}
    />
  )

  function handleChange(e) {
    // Update store or global state
    dispatch(updateForm({ name: e.target.value }));

    // Update local state
    if (e.target.value.length === 0) {
      setError(true);
      setHelperText("Please fill this field.")
    }
    else {
      setError(false);
      setHelperText("")
    }
  }
}