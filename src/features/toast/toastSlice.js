import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  toastVisible: false,
  content: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default toastSlice.reducer;
