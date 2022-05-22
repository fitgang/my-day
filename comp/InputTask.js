export default function InpustTask(props) {
  return (
    <form id="input-task-form" className={props.view === true ? "" : "none"}>

      <div className="field-grp">

        <div className="field">
          <label htmlFor="input-heading"></label>
          <input type="text" id="input-heading" onChange={props.handleInputChange}/>
        </div>
        
        <div className="field">
          <label htmlFor="input-description"></label>
          <textarea id="input-description" onChange={props.handleInputChange}></textarea>
        </div>
      </div>

      <div className="field-grp">

        <div className="field">
          <label htmlFor="input-from"></label>
          <input type="datetime-local" id="input-from" onChange={props.handleInputChange}/>
        </div>

        <div className="field">
          <label htmlFor="input-to"></label>
          <input type="datetime-local" id="input-to" onChange={props.handleInputChange}/>
        </div>
      </div>

      <div className="btn-grp">
        <button type="submit" onClick={props.handleSubmit}>add</button>
        <button type="button" onClick={props.hideInputForm}>cancel</button>
      </div>
    </form>
  )
}