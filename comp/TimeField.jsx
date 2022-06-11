import { useDispatch, useSelector } from 'react-redux';
import { updateFormErrors } from "../store/reducers/inputTask";
import { useState } from 'react';

export default function TimeField(props) {
  const error = useSelector(store =>store.inputTask.errors[props.label.toLowerCase()]);
  console.log(error);

  const dispatch = useDispatch();

  const minHours = (new Date()).getHours(),
    minMinutes = (new Date()).getMinutes();

  const [helperText, setHelperText] = useState('');

  return (
    <></>
  );

  function handleAccept() {
    dispatch(updateFormErrors({ [props.label.toLowerCase()]: false }));
    setHelperText('')
  }

  function handleError(reason) {
    dispatch(updateFormErrors({ [props.label.toLowerCase()]: true }))
    
    // Set helper text
    if (reason === "minTime") {
      
      let minTimeStr = '';

      if (minHours === 0) minTimeStr = `12:${minMinutes} AM`;
      else if (minHours === 12) minTimeStr = `12:${minMinutes} PM`;
      else if (minHours < 12) minTimeStr = `${minHours}:${minMinutes} AM`;
      else minTimeStr = `${minHours - 12}:${minMinutes} PM`;

      setHelperText(`Please choose a time after ${minTimeStr}`);
    }
  }
}
