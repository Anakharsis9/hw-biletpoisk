"use client";

import { useEffect, useMemo } from "react";
import { Select } from "../Base/Select";
import style from "./FilterSearch.module.scss";
import {
  useGetCinemaMoviesQuery,
  useGetCinemasQuery
} from "@/redux/services/movieApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectMoviesModule } from "@/redux/features/movies/selector";
import { moviesActions } from "@/redux/features/movies";

const genres = [
  { title: "Не выбран", value: "" },
  { title: "Боевик", value: "action" },
  { title: "Комедия", value: "comedy" },
  { title: "Фэнтези", value: "fantasy" },
  { title: "Ужасы", value: "horror" }
];

type Value = {
  name: string;
  genre: string;
  cinema: string;
};

export const FilterSearch = ({
  value,
  onChange
}: {
  value: Value;
  onChange: (value: Value) => void;
}) => {
  const dispatch = useAppDispatch();

  const selectedGenre = useMemo(
    () => genres.find(item => item.value === value.genre),
    [value.genre]
  );

  const loadCinemas = useGetCinemasQuery();

  const cinemas = loadCinemas.data?.map(cinema => ({
    title: cinema.name,
    value: cinema.id
  }));

  const selectedCinema = cinemas?.find(item => item.value === value.cinema);

  const { data } = useGetCinemaMoviesQuery(selectedCinema?.value);

  useEffect(() => {
    dispatch(moviesActions.update(data));
  }, [data, dispatch]);

  return (
    <div className={style["filter-wrapper"]}>
      <div className={style["filter-header"]}>Фильтр поиска</div>
      <div className={style["filter-controls"]}>
        <label className={style["input-label"]}>
          Название
          <input
            type="text"
            id="film-name"
            className={style["input-field"]}
            placeholder="Введите название"
            onChange={e => {
              onChange({ ...value, name: e.target.value });
            }}
          />
        </label>
        <label className={style["input-label"]}>
          Жанр
          <Select
            selected={selectedGenre || null}
            options={genres}
            placeholder="Выберите жанр"
            onChange={genre => {
              onChange({ ...value, genre });
            }}
          />
        </label>
        <label className={style["input-label"]}>
          Кинотеатр
          <Select
            selected={selectedCinema || null}
            options={cinemas || []}
            placeholder="Выберите кинотеатр"
            onChange={cinema => {
              onChange({ ...value, cinema });
            }}
          />
        </label>
      </div>
    </div>
  );
};
