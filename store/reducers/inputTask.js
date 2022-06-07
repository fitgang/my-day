import { createSlice } from "@reduxjs/toolkit";

// Initialize state with properties -
// open - is the inputTask comp in view
// other values are the input values with property indicating the input ids
const initialState = {
  open: false,
  hasError: 0,
  name: 'Task',
  description: '',
  from: Date.now(),
  to: Date.now() + 1 * 60 * 1000
};

const inputTaskSlice = createSlice({
  name: "inputTask",
  initialState,
  reducers: {
    emptyForm: () => {
      return { open: true, ...initialState }
    },
    toggleFormDisplay: (state, action) => {
      state.open = action.payload
    },
    updateForm: (state, action) => {
      // Update the values of form inputs
      const inputs = action.payload;
      if (inputs.hasOwnProperty("name")) state.name = inputs.name;
      else if (inputs.hasOwnProperty("description")) state.description = inputs.description;
      else if (inputs.hasOwnProperty("from")) state.from = inputs.from;
      else if (inputs.hasOwnProperty("to")) state.to = inputs.to;
      else if (inputs.hasOwnProperty("hasError")) state.hasError += inputs.hasError;
    }
  }
});

export const { emptyForm, toggleFormDisplay, updateForm } = inputTaskSlice.actions;
export default inputTaskSlice.reducer;