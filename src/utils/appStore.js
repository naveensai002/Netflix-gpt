import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import gptSlice from './gptSlice';
import configSlice from './configSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    movies: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});
