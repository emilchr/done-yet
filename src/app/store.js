import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../features/todoList/todoListSlice';
import toastReducer from '../features/toast/toastSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    toast: toastReducer,
  },
});
