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
    handleTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.taskId === action.payload
      );

      !state.todos[todoIndex].isComplete
        ? (state.todos[todoIndex].isComplete = true)
        : (state.todos[todoIndex].isComplete = false);
    },
  },
});

export const { addTodo, handleTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
