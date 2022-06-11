import { useDispatch, useSelector } from 'react-redux';
import TimeField from './TimeField'
import { updateFormValues, updateFormErrors } from '../store/reducers/inputTask';

export default function FromTimeField() {
  const dispatch = useDispatch();

  const { from , to} = useSelector(store => store.inputTask);

  return (
    <></>
  );

  function handleChange(newValue) {
    if (newValue.getTime() >= to) {
      dispatch(updateFormErrors({from: true}));
    }

    dispatch(updateFormValues({ from: newValue.getTime()}))
  }
}
