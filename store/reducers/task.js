import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getTasksForToday, storeTaskToDB } from "../../js/dataFunctions";

// Initialize state with properties -
// task - all the tasks for the day
const tasksArr = await getTasksForToday();

let tasksObj = {};

for (const task of tasksArr) {
  // const task = tasks[taskID];

  const hourRegex = /\d{1,2}(?=:)/,
    minRegex = /:\d{1,2}/,
    mRegex = /am|pm/i;

  ["from", "to"].forEach((timeType) => {
    let time = task[timeType],
      hour = time.match(hourRegex)[0],
      min = time.match(minRegex)[0].substring(1),
      m = time.match(mRegex)[0];
    task[timeType] = {
      hour: hour,
      min: min,
      m: m,
    };
  });

  tasksObj[task._id] = task
}

const initialState = {
  task: tasksObj,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Add task to store
      const {id} = action.payload;
      state.task[id] = action.payload;
      console.log("task added");
    },
    removeTask: (state, action) => {
      // Remove task from DB
      // Remove task from state
      const taskID = action.payload;
      delete state.task[taskID];
    },
    updateTask: (state, action) => {
      // Update task in DB
      // Update task in DB
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
