import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskId: 0,
  content: '',
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default todoSlice.reducer