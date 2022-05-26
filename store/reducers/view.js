import { createSlice } from "@reduxjs/toolkit"

// Initialize state with properties -
// log - is the user logged in
const initialState = {
  view: false,
};

const viewSlice = createSlice({
  name: "view",
  initialState
});

export default viewSlice.reducer;