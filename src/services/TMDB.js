import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const accessToken = import.meta.env.VITE_TMDB_ACCESS_KEY;
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {

        //get Movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&language=en-US`
        }
        //get movies by categories
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?language=en-US&page=${page}`
        }
        //get movies by genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&language=en-US&page=${page}`
        }
        //get one movie
        // get popular movies
        return `movie/popular?language=en-US&page=${page}`
      },
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?language=en`,
    }),
    getMovie: builder.query({
      query: (movieId) => `movie/${movieId}?language=en-US&append_to_response=videos,credits`
    }),
    // getCredits: builder.query({
    //   query: (movieId) => `/movie/${movieId}/credits`,
    // }),
    getRecommendations: builder.query({
      query: ({ movieId, list }) => `/movie/${movieId}/${list}?language=en-US`
    }),
    getActor: builder.query({
      query: (actorId) => `person/${actorId}?language=en-US`
    }),
    getMoviesByActorId: builder.query({
      query: ({ actorId, page }) => `/discover/movie?with_cast=${actorId}&page=${page}`
    }),
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?session_id=${sessionId}&page=${page}`
    })
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery, useGetCreditsQuery, useGetRecommendationsQuery, useGetActorQuery, useGetMoviesByActorIdQuery, useGetListQuery } = tmdbApi;
