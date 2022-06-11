import { useState } from 'react';
import Options from './Options';
import theme from '../styles/theme';

export default function Task(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const status = evaluateStatusOf(props.task);
  const { heading, description, from, to, id } = props.task;

  return (
    <li>
      <div className="primary">
        <div className="check-action-container">
          <input type="checkbox" aria-label={heading}/>
        </div>
        <div className="details">
          <h4>{heading}</h4>
          <div className="duration">
            <span className="from">{from}</span> - <span className="to">{to}</span>
          </div>
        </div>
        <div className="other-actions-container">
          <button className="more" type='button'></button>
          <button className="show" type='button'></button>
        </div>
      </div>
      <p className="secondary">{description}</p>
    </li>
  );

  // Returns a char for status
  function evaluateStatusOf(taskObj) {
    // If the task has been completed, then return
    if (taskObj.hasOwnProperty("status") && taskObj.status === "C") return;

    // Else find the status
    // Compare time in minutes
    let timeFrom = Number(taskObj.from.substring(0, 2)) * 60 + Number(taskObj.from.substring(3, 5)),
      timeTo = Number(taskObj.to.substring(0, 2)) * 60 + Number(taskObj.to.substring(3, 5));

    if (taskObj.from.toUpperCase().includes("PM")) timeFrom += 12 * 60;
    if (taskObj.to.toUpperCase().includes("PM")) timeTo += 12 * 60;

    // Current Time
    const currentDate = new Date(),
      currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

    // Compare time in minutes
    if (currentTime < timeFrom) return "Y"; // 'Y'et to come

    if (currentTime > timeTo) return "L"; // 'L'ate

    return "G"; // time to 'G'o
  }

  // Input is a char, Returns a color
  function evaluateBGColor(status) {
    switch(status){
      case "C": return theme.palette.success.main;
      case "Y": return theme.palette.warning.main;
      case "L": return theme.palette.wait.main;
      default: return theme.palette.primary.main; // For 'G'
    }
  }
}