import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskId: 0,
  content: '',
  isComplete: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    completeTodo: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default todoSlice.reducer;
