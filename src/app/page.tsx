"use client";

import { FilterSearch } from "@/components/FilterSearch";
import style from "./page.module.scss";
import { Movie, MovieItem } from "@/components/MovieItem";
import { useGetMoviesQuery } from "@/redux/services/movieApi";

export default function Home() {
  const { data, isLoading, error } = useGetMoviesQuery();
  const movies = data;
  return (
    <div className={style.container}>
      <FilterSearch />
      <div className={style.moviesList}>
        {!!movies?.length &&
          movies.map((movie: Movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}
