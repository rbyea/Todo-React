import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: counterReducer,
  },
});
