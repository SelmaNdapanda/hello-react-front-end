import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './greetingSlice';

const store = configureStore({
  reducer: {
    greet: greetReducer,
  },
});

export default store;
