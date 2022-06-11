import { useDispatch, useSelector } from 'react-redux';
import TimeField from './TimeField'
import { updateFormValues, updateFormErrors } from '../store/reducers/inputTask';

export default function ToTimeField() {
  const dispatch = useDispatch();

  const { from, to } = useSelector(store => store.inputTask);

  return (
    <></>
  );

  function handleChange(newValue) {
    if (newValue.getTime() <= from) {
      dispatch(updateFormErrors({to: true}));
    }
    dispatch(updateFormValues({ to: newValue.getTime() }))
  }
}