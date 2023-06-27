import type { Movie } from "@/components/MovieItem";
import { Review } from "@/components/ReviewItem";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Cinema = {
  id: string;
  movieIds: string[];
  name: string;
};

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: builder => ({
    getMovies: builder.query<Movie[], void>({ query: () => "movies" }),
    getMovie: builder.query({ query: movieId => `movie?movieId=${movieId}` }),
    getCinemas: builder.query<Cinema[], void>({ query: () => "cinemas" }),
    getCinemaMovies: builder.query({
      query: cinemaId => `movies?cinemaId=${cinemaId}`
    }),
    getReviews: builder.query<Review[], void>({ query: () => "reviews" }),
    getMovieReviews: builder.query({
      query: movieId => `reviews?movieId=${movieId}`
    }),
  })
});

export const {
  useGetMovieQuery,
  useGetMoviesQuery,
  useGetCinemasQuery,
  useGetCinemaMoviesQuery,
  useGetMovieReviewsQuery,
  useGetReviewsQuery
} = movieApi;
