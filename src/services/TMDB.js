import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const accessToken = import.meta.env.VITE_TMDB_API_KEY;
const page = 1
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`); // ✅ Proper format
      }
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () =>

        // Handle requests for a specific category
        // if (genreOrCategoryName && typeof genreOrCategoryName === 'string') {
        //   return `movie/${genreOrCategoryName}?language=en-US&page=${page}`;
        // }

        // Default to the 'popular' endpoint
        `movie/popular?language=en-US&page=${page}`

    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;