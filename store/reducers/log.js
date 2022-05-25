import { createSlice } from "@reduxjs/toolkit"

// Initialize state with properties -
// log - is the user logged in
const initialState = {
  log: true,
};

const logSlice = createSlice({
  name: "log",
  initialState
});

export default logSlice.reducer;