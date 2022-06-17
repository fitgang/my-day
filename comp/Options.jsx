import { useState, useRef } from "react";
import { DeleteIcon, EditIcon } from "./Icon";

export default function Options(props) {
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
        <EditIcon/>
      </button>

      <button type="button">
        <DeleteIcon/>
      </button>
    </div>
  );

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickOnEdit() {
    // Use taskID passed as a prop to find the task in the store
    // Put the data accordingly in the 'InputTask' form
  }

  function handleClickOnDelete() {}
}
