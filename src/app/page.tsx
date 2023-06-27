"use client";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectMoviesModule } from "@/redux/features/movies/selector";
import { moviesActions } from "@/redux/features/movies";
import { useEffect, useState } from "react";
import { FilterSearch } from "@/components/FilterSearch";
import style from "./page.module.scss";
import { MoviesList } from "@/components/MoviesList";

export default function Home() {
  const { value: movies } = useAppSelector(state => selectMoviesModule(state));
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useGetMoviesQuery();
  useEffect(() => {
    dispatch(moviesActions.update(data));
  }, [data, dispatch]);

  const [filters, setFilters] = useState({
    name: "",
    genre: "",
    cinema: ""
  });

  return (
    <div className={style.container}>
      <FilterSearch value={filters} onChange={setFilters} />
      <MoviesList
        movies={movies?.filter(movie => {
          return (
            ((filters.genre && filters.genre === movie.genre) ||
              !filters.genre) &&
            movie.title.toLowerCase().includes(filters.name.toLowerCase())
          );
        })}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
