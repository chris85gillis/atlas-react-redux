import { createSlice } from '@reduxjs/toolkit';

const listsSlice = createSlice({
  name: 'example',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = listsSlice.actions;
export default listsSlice.reducer;