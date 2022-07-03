import { createSlice } from "@reduxjs/toolkit";

// Initialize state with properties -
// open - is the inputTask comp in view
// newTask - tells whether currently a new task is being added or an old one is being edited
// other values are the input values with property indicating the input ids
const initialState = {
  open: false,
  newTask: true,
  name: "",
  description: "",
  from: {
    hour: '12',
    min: '',
    m: "pm"
  },
  to: {
    hour: '12',
    min: '',
    m: "pm"
  },
};

const inputTaskSlice = createSlice({
  name: "inputTask",
  initialState,
  reducers: {
    emptyForm: () => {
      return {
        open: false,
        newTask: true,
        ...initialState
      };
    },
    toggleFormDisplay: (state, action) => {
      state.open = action.payload;
    },
    updateFormValues: (state, action) => {
      // Update the values of form inputs
      for (let prop in action.payload) {
        state[prop] = action.payload[prop]
      }
    },
  },
});

export const { emptyForm, toggleFormDisplay, updateFormValues } =
  inputTaskSlice.actions;
export default inputTaskSlice.reducer;
