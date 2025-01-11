import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toastVisible: false,
  activeType: '',
  type: {
    add: 'Todo created!',
    done: 'Todo completed',
    unDone: 'Todo is undone.',
  },
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toastVisible = action.payload.show;

      switch (action.payload.type) {
        case 'add':
          state.activeType = state.type.add;

          break;

        case 'done':
          state.activeType = state.type.done;

          break;
        case 'unDone':
          state.activeType = state.type.unDone;

          break;

        default:
          break;
      }
    },
  },
});

export const { toastVisible, activeType } = (state) => state.toastSlice;
export const { showToast } = toastSlice.actions;

export default toastSlice.reducer;
