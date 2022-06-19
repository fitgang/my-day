import { createSlice } from "@reduxjs/toolkit";

// Initialize state with properties -
// open - is the inputTask comp in view
// newTask - tells whether currently a new task is being added or an old one is being edited
// other values are the input values with property indicating the input ids
const initialState = {
  open: false,
  newTask: true,
  name: '',
  description: '',
  from: '',
  to: ''
};

const inputTaskSlice = createSlice({
  name: "inputTask",
  initialState,
  reducers: {
    emptyForm: () => {
      return { open: true, newTask: true, ...initialState }
    },
    toggleFormDisplay: (state, action) => {
      state.open = action.payload
    },
    updateFormValues: (state, action) => {
      // Update the values of form inputs
      const inputs = action.payload;
      if (inputs.hasOwnProperty("name")) state.name = inputs.name;
      else if (inputs.hasOwnProperty("description")) state.description = inputs.description;
      else if (inputs.hasOwnProperty("from")) state.from = inputs.from;
      else if (inputs.hasOwnProperty("to")) state.to = inputs.to;
    }
  }
});

export const { emptyForm, toggleFormDisplay, updateFormValues } = inputTaskSlice.actions;
export default inputTaskSlice.reducer;