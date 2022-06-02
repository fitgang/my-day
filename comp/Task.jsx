import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Task(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { heading, description, from, to } = props.task;

  return (
    <Card component="li" variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary">
          {heading}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography paragraph>
          {from} - {to}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
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