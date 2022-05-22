export default function InpustTask(props) {
  return (
    <form id="input-task-form" className={props.view === true ? "" : "none"}>

      <div className="field-grp">

        <div className="field">
          <label htmlFor="input-heading"></label>
          <input type="text" id="input-heading" />
        </div>
        
        <div className="field">
          <label htmlFor="input-description"></label>
          <textarea id="input-description"></textarea>
        </div>
      </div>

      <div className="field-grp">

        <div className="field">
          <label htmlFor="input-from"></label>
          <input type="date" id="input-from" />
        </div>

        <div className="field">
          <label htmlFor="input-to"></label>
          <input type="date" id="input-to" />
        </div>
      </div>

      <div className="btn-grp">
        <button type="submit">add</button>
        <button type="button">cancel</button>
      </div>
    </form>
  )
}