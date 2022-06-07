import { useDispatch, useSelector } from 'react-redux';
import TimeField from './TimeField'
import { updateForm } from '../store/reducers/inputTask';

export default function FromTimeField() {
  const dispatch = useDispatch();

  const { from } = useSelector(store => store.inputTask);

  return (
    <TimeField
      label="From"
      value={from}
      handleChange={handleChange}
    />
  );

  function handleChange(newValue) {
    dispatch(updateForm({ from: newValue.getTime()}))
  }
}
