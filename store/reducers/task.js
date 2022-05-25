import { createSlice } from "@reduxjs/toolkit";
import { getTasksForToday } from "../../public/dataFunctions";

// Initialize state with properties -
// task - all the tasks for the day
const tasks = await getTasksForToday();

const initialState = {
  task: tasks,
};

const taskSlice = createSlice({
  name: "task",
  initialState
});

export default taskSlice.reducer;