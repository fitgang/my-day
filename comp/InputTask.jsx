import { useSelector, useDispatch } from "react-redux"
import { hideInputForm } from "../store/reducers/view"
import { validateData } from "../public/dataFunctions";

export default function InpustTask() {
  const { view } = useSelector(state => state.view);
  const dispatch = useDispatch();

  return (
    <form id="input-task-form" className={view === true ? "" : "none"} onSubmit={handleSubmit}>

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
          <input type="datetime-local" id="input-from" onInput={handleInputChange} />
        </div>

        <div className="field">
          <label htmlFor="input-to"></label>
          <input type="datetime-local" id="input-to" onChange={handleInputChange} />
        </div>
      </div>

      <div className="btn-grp">
        <button type="submit">add</button>
        <button type="button" onClick={() => dispatch(hideInputForm())}>cancel</button>
      </div>
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault();
    // Validate data
    const inputElems = e.target.querySelectorAll("input, textarea");
    let errorFound = false;

    inputElems.forEach(elem => {
      const errors = validateInput(elem);
      // Raise warning if errors found
      if (errors.length !== 0) {
        errorFound = true;
        showErrorToUser(errors, elem);
        return
      }
    });

    if (errorFound === true) return;
    // Else Store to database
    // Change UI accordingly
    // Raise warning if a problem occurs on storing in DB
    // Inform user about success
    console.log("correct inputs");
  }

  function handleInputChange(e) {
    const inputElem = e.target;
    console.log(inputElem, "got focus")
    // then validate data 
    const errors = validateInput(inputElem);
    // If errors found, raise warning
    if (errors.length !== 0) {
      showErrorToUser(errors, inputElem)
    }
    // Else do nothing
    else console.log("correct input");
  }

  function validateInput(inputElem) {
    if (inputElem.type.includes("text")) {
      return validateData(inputElem.value, "text")
    }
    return validateData(inputElem.value, "datetime")
  }

  function showErrorToUser(errorArr, inputElem) {
    console.log(errorArr[0])
  }
}