import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { taskReducer, inputTaskReducer } from "./reducers";

const makeStore = () =>
  configureStore({
    reducer: {
      task: taskReducer,
      inputTask: inputTaskReducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);