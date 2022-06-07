import { useDispatch, useSelector } from 'react-redux';
import TimeField from './TimeField'
import { updateForm } from '../store/reducers/inputTask';

export default function ToTimeField() {
  const dispatch = useDispatch();

  const { from, to } = useSelector(store => store.inputTask);

  return (
    <TimeField
      label="To"
      value={to}
      error={to <= from}
      handleChange={handleChange}
    />
  );

  function handleChange(newValue) {
    dispatch(updateForm({ to: newValue.getTime() }))
  }
}