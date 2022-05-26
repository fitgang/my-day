import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { viewReducer, taskReducer } from "./reducers";

const makeStore = () =>
  configureStore({
    reducer: {
      task: taskReducer,
      view: viewReducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);