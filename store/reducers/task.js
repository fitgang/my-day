import { createSlice } from "@reduxjs/toolkit";
import { getTasksForToday } from "../../public/dataFunctions";
import { HYDRATE } from "next-redux-wrapper";

// Initialize state with properties -
// task - all the tasks for the day
const tasks = await getTasksForToday();

const initialState = {
  task: tasks,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
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