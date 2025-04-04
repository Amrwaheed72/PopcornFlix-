import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const APIKEY = import.meta.env.VITE_TMDB_API_KEY
console.log(APIKEY)
export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        //Get Movies by [type]
        getMovies: builder.query({
            query: () => 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        })
    })
})