import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getTasksForToday } from "../../js/dataFunctions";

// Initialize state with properties -
// task - all the tasks for the day
const tasks = await getTasksForToday();

const initialState = {
  task: tasks,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state) => {
      // Add task to DB and update state
    },
    removeTask: (state) => {
      // Remove task from DB and update state
    },
    updateTask: (state) => {
      // Update task in DB and in state
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

export default taskSlice.reducer;