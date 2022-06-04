import * as React from 'react';
import { Stack } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Options from './Options';
import ExpandMore from './ExpandMore';
import theme from '../styles/theme';

export default function Task(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const status = evaluateStatusOf(props.task);
  const { heading, description, from, to } = props.task;

  return (
    <Stack component="li"
      sx={{
        borderBottom: props.border,
        backgroundColor: evaluateBGColor(status),
        color: '#fff'
      }}>

      <Stack direction='row' sx={{ alignItems: 'center', padding: '0.5em 1em' }}>

        <FormControlLabel
          control={<Checkbox sx={{ marginRight: '0.5em' }} />}
          label={<ListItemText primary={heading} secondary={`${from} - ${to}`} sx={{ fontSize: '5em' }} />}
        />

        <ExpandMore
          expand={open}
          onClick={handleClick}
          aria-expanded={open}
          aria-label="show details"
        >
          <ExpandMoreIcon />
        </ExpandMore>

        <Options />

      </Stack>

      <Collapse in={open} timeout="auto">
        <ListItemText primary={description} sx={{ paddingX: "1em", paddingBottom: "0.5em" }} />
      </Collapse>
    </Stack>
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