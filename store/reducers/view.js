import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";

// Initialize state with properties -
// log - is the user logged in
const initialState = {
  view: false,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    hideInputForm: (state) => {
      state.view = false
    },
    showInputForm: (state) => {
      state.view = true
    },
    toggleInputForm: (state) => {
      state.view = !state.view
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const {hideInputForm, showInputForm, toggleInputForm} = viewSlice.actions;

export default viewSlice.reducer;