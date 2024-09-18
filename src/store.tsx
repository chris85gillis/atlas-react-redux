import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/listsSlice.ts';

const store = configureStore({
  reducer: {
    example: exampleReducer, // Add your slices here
  },
});

export default store;