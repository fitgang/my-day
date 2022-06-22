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

  // changing 'from' time
  let time = task.from,
    hour = Number(time.match(hourRegex)[0]),
    min = Number(time.match(minRegex)[0]),
    m = time.match(mRegex)[0];
  task.from = {
    hour: hour,
    min: min,
    m: m,
  };

  // changing 'to' time
  time = task.to;
  hour = Number(time.match(hourRegex)[0]);
  min = Number(time.match(minRegex)[0]);
  m = time.match(mRegex)[0];
  task.to = {
    hour: hour,
    min: min,
    m: m,
  };
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
      state.task[id] = taskObj
    },
    removeTask: (state, action) => {
      // Remove task from state
      for (const taskID in state.task) {
        if (taskID == action.payload) {
          delete state.task[taskID];
          break;
        }
      }
    },
    updateTask: (state) => {
      // Update task in DB and in state
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
