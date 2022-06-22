import { useDispatch } from "react-redux";
import { updateFormValues } from "../store/reducers/inputTask";

export default function InputField(props) {
  const dispatch = useDispatch();

  const { type, label, name, ...otherProps } = props;

  // For textarea inputs
  if (type === "textarea") {
    return (
      <div className="field" id={name}>
        <label htmlFor={props.id}>{label}</label>
        <textarea {...otherProps} onChange={handleChange}></textarea>
        <div className="error-box"></div>
      </div>
    );
  }

  // For other inputs
  return (
    <div className="field" id={name}>
      <label htmlFor={props.id}>{label}</label>
      <input type={type} {...otherProps} onChange={handleChange} />
      <div className="error-box"></div>
    </div>
  );

  function handleChange(e) {
    const elem = e.target;
    dispatch(updateFormValues({ [name]: elem.value }));
  }
}

export function TimeField(props) {
  const dispatch = useDispatch();

  const { id, label, value, name } = props;

  return (
    <div className="time field" id={label}>
      <label htmlFor={id}>{label}</label>

      <div className="time-input-container">
        <div className="number-input">
          <input
            type="number"
            className="input-hours"
            id={id}
            aria-label="hours"
            value={value.hour}
            onChange={handleHourChange}
            
          />

          <input
            type="number"
            className="input-minutes"
            aria-label="minutes"
            value={value.min}
            onChange={handleMinuteChange}
          />
        </div>

        <div className="ampm-input">
          <div
            className={"m " + (value.m.toLowerCase() === "am" ? "selected" : "")}
            data-input="AM"
          >
            AM
          </div>

          <div
            className={"m " + (value.m.toLowerCase() === "pm" ? "selected" : "")}
            data-input="PM"
          >
            PM
          </div>
        </div>
      </div>

      <div className="error-box"></div>
    </div>
  );

  function handleHourChange(e) {
    dispatch(
      updateFormValues({
        [name]: {
          ...value,
          hour: e.target.value.trim(),
        }
      })
    );
  }

  function handleMinuteChange(e) {
    dispatch(
      updateFormValues({
        [name]: {
          ...value,
          min: e.target.value.trim(),
        }
      })
    );
  }
}
