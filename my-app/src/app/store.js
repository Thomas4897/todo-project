import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
// import moduleName from '../features/todos'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
