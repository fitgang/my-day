import { configureStore } from "@reduxjs/toolkit";
import { logReducer, taskReducer } from "./reducers";

const store = configureStore({
  reducer​: {
    task: taskReducer,
    log: logReducer
  },
});

export default store