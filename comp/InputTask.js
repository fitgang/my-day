import { useSelector, useDispatch } from "react-redux"
import { hideInputForm } from "../store/reducers/view";

export default function InpustTask() {
  const { view } = useSelector(state => state.view);
  const dispatch = useDispatch();

  return (
    <form id="input-task-form" className={view === true ? "" : "none"}>

      <div className="field-grp">

        <div className="field">
          <label htmlFor="input-heading"></label>
          <input type="text" id="input-heading" onChange={handleInputChange} />
        </div>

        <div className="field">
          <label htmlFor="input-description"></label>
          <textarea id="input-description" onChange={handleInputChange}></textarea>
        </div>
      </div>

      <div className="field-grp">

        <div className="field">
          <label htmlFor="input-from"></label>
          <input type="datetime-local" id="input-from" onChange={handleInputChange} />
        </div>

        <div className="field">
          <label htmlFor="input-to"></label>
          <input type="datetime-local" id="input-to" onChange={handleInputChange} />
        </div>
      </div>

      <div className="btn-grp">
        <button type="submit" onClick={handleSubmit}>add</button>
        <button type="button" onClick={() => dispatch(hideInputForm())}>cancel</button>
      </div>
    </form>
  )

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
}