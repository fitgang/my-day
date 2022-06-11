export default function InputField() {
  return (
    <input
      autoFocus
      id="input-description"
      label="Describe the task"
      type="text"
      placeholder="The task will have a name and a description"
      onChange={(e) =>
        dispatch(updateFormValues({ description: e.target.value }))
      }
    />
  );
}
