import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { taskReducer } from "./reducers";

const makeStore = () =>
  configureStore({
    reducer: {
      task: taskReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);