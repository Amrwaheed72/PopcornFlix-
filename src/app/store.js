import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';

import genreOrCategoryReducer from './currentGenreOrCategory'
import userReducer from './UserSlice'
const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
