"use client";

import { Movie, MovieItem } from "@/components/MovieItem";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import style from "./MoviesList.module.scss";

export const MoviesList = () => {
  const { data: movies, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    return (
      <div className={style.moviesList}>
        <span className={style.isLoading}>Загрузка...</span>
      </div>
    );
  }

  if (!movies || error) {
    return (
      <div className={style.moviesList}>
        <span className={style.isError}>Not Found</span>
      </div>
    );
  }

  return (
    <div className={style.moviesList}>
      {!!movies?.length &&
        movies.map((movie: Movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
    </div>
  );
};
