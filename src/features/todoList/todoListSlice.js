import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      taskId: 1,
      content: 'Create a Todo list',
      isComplete: false,
    },
    {
      taskId: 2,
      content: 'Complete a task',
      isComplete: true,
    },
    {
      taskId: 3,
      content: 'Complete everything!',
      isComplete: true,
    },
  ],
  showCompleted: true,
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        taskId: Math.floor(Math.random() * 100000),
        content: action.payload,
        isCompleted: false,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
