function handleSubmit(e) {
  // Validate data
  // Raise warning if errors found
  // Else Store to database
  // Change UI accordingly
  // Inform user about success
  // Raise warning if errors found
}

function handleInputChange(e) {
  const inputElem = e.target;
  // If the input has focus
  if (document.activeElement === inputElem) {
    // then validate data 
    const errors = validateInput(inputElem);
    // If errors found, raise warning
    if (errors.length !== 0) {
      showErrorToUser()
    }
    // Else do nothing
  }
  // Else Do nothing
}

function validateInput(inputElem) {
  if (inputElem.type.includes("text")) {
    return validateData(inputElem.value, "text")
  }
  return validateData(inputElem.value, "datetime")
}

function showErrorToUser() {

}

function hideInputForm() {
  setViewOfInputForm(false)
}