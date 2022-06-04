import * as React from 'react';
import { Stack, Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Options from './Options';
import ExpandMore from './ExpandMore';

export default function Task(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const { heading, description, from, to } = props.task;

  return (
    <Stack component="li" sx={{ borderBottom: props.border }}>
      <Stack direction='row' sx={{alignItems: 'center', padding: '0.5em 1em'}}>

        <ListItemText primary={heading} secondary={`${from} - ${to}`} />

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
}

{/* <li className="task">

<section className="details">
  <h2 className="heading">{heading}</h2>
  <p className="description">{description}</p>
</section>

<div className="duration">
  <div className="from">{from}</div>
  <div className="to">{to}</div>
</div>

<div className="actions">
  <div className="done"></div>
  <div className="others">
    <div className="delete"></div>
    <div className="edit"></div>
  </div>
</div>

</li> */}