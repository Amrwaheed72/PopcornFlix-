import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';

import genreOrCategoryReducer from './currentGenreOrCategory'
const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
