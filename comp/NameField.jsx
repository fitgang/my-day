import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { updateFormValues, updateFormErrors } from "../store/reducers/inputTask";

export default function NameField() {
  const [name, error]  = useSelector(store => [store.inputTask.name, store.inputTask.errors.name]);
  const dispatch = useDispatch();
  const [helperText, setHelperText] = useState('');

  return (
    <></>
  )

  function handleChange(e) {
    // Update store or global state
    dispatch(updateFormValues({ name: e.target.value }));

    // Update local state
    if (e.target.value.length === 0) {
      dispatch(updateFormErrors({name: true}));
      setHelperText("Please fill this field.")
    }
    else {
      dispatch(updateFormErrors({name: false}));
      setHelperText("")
    }
  }
}