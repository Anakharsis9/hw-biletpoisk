"use client";

import { Movie, MovieItem } from "@/components/MovieItem";
import style from "./MoviesList.module.scss";

import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

interface MoviesListProps {
  movies: Movie[] | undefined;
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
  onClose?: (id: string) => void;
}

export const MoviesList = ({
  movies,
  isLoading = false,
  error = undefined,
  onClose
}: MoviesListProps) => {
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
          <MovieItem key={movie.id} movie={movie} onClose={onClose} />
        ))}
    </div>
  );
};
