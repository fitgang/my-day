export default function InputField(props) {
  const { type, label, ...otherProps } = props;

  // For textarea inputs
  if (type === "textarea") {
    return (
      <div className="field" id={label}>
        <label htmlFor={props.id}>{label}</label>
        <textarea {...otherProps}></textarea>
        <div className="error-box"></div>
      </div>
    );
  }

  // For other inputs
  return (
    <div className="field" id={label}>
      <label htmlFor={props.id}>{label}</label>
      <input type={type} {...otherProps} />
      <div className="error-box"></div>
    </div>
  );
}

export function TimeField(props) {
  const { id, label, defaultValue } = props;

  return (
    <div className="time field" id={label}>
      <label htmlFor={id}>{label}</label>

      <div className="time-input-container">
        <div className="number-input">
          <input
            className="input-hours"
            id={id}
            aria-label="hours"
            defaultValue={defaultValue.slice(0, 2)}
          />

          <input
            className="input-minutes"
            aria-label="minutes"
            defaultValue={defaultValue.slice(3, 5)}
          />
        </div>

        <div className="ampm-input">
          <div
            className={"m" + defaultValue.slice(-2) === "AM" ? "selected" : ""}
            data-input="AM"
          >
            AM
          </div>

          <div
            className={"m" + defaultValue.slice(-2) === "PM" ? "selected" : ""}
            data-input="PM"
          >
            PM
          </div>
        </div>
      </div>

      <div className="error-box"></div>
    </div>
  );
}
