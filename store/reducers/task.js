import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getTasksForToday } from "../../js/dataFunctions";

// Initialize state with properties -
// task - all the tasks for the day
const tasks = await getTasksForToday();

for (const taskID in tasks) {
  const task = tasks[taskID];

  const hourRegex = /\d{1,2}(?=:)/,
    minRegex = /\d{1,2}(?!:)/,
    mRegex = /am|pm/i;

  ["from", "to"].forEach((timeType) => {
    let time = task[timeType],
      hour = time.match(hourRegex)[0],
      min = time.match(minRegex)[0],
      m = time.match(mRegex)[0];
    task[timeType] = {
      hour: hour,
      min: min,
      m: m,
    };
  });
}

const initialState = {
  task: tasks,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Add task to store
      const id = Object.keys(state.task).length + 1,
        taskObj = action.payload;
      taskObj.id = id;
      state.task[id] = taskObj;
    },
    removeTask: (state, action) => {
      // Remove task from state
      const taskID = action.payload;
      delete state.task[taskID];
    },
    updateTask: (state, action) => {
      // Update task in DB and in state
      const { id } = action.payload;
      state.task[id] = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
