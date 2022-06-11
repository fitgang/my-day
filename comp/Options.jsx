import { useState } from "react";

export default function Options() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (<></>)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleClickOnEdit() {
    // Use taskID passed as a prop to find the task in the store
    // Put the data accordingly in the 'InputTask' form
  }

  function handleClickOnDelete() {
    
  }
}
