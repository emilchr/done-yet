import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import todoListReducer from '../features/todoList/todoListSlice';
import toastReducer from '../features/toast/toastSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoList: todoListReducer,
    toast: toastReducer,
  },
});
