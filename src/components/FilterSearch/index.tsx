"use client";

import { useState } from "react";
import { Select } from "../Base/Select";
import style from "./FilterSearch.module.scss";

export const FilterSearch = () => {
  const options = [
    { title: "Не выбран", value: "-" },
    { title: "Боевик", value: "Боевик" },
    { title: "Комедия", value: "Комедия" },
    { title: "Фэнтези", value: "Фэнтези" },
    { title: "Ужасы", value: "Ужасы" }
  ];
  const cinemas = [
    { title: "Не выбран", value: "-" },
    { title: "cinema1", value: "cinema1" },
    { title: "cinema2", value: "cinema2" },
    { title: "cinema3", value: "cinema3" },
  ];

  const [genre, setGenreValue] = useState("");
  const handleGenreSelect = (value: string) => {
    setGenreValue(value);
  };
  const selectedGenre = options.find(item => item.value === genre);

  const [cinema, setCinemaValue] = useState("");
  const handleCinemaSelect = (value: string) => {
    setCinemaValue(value);
  };
  const selectedCinema = cinemas.find(item => item.value === cinema);

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
          />
        </label>
        <label className={style["input-label"]}>
          Жанр
          <Select
            selected={selectedGenre || null}
            options={options}
            placeholder="Выберите жанр"
            onChange={handleGenreSelect}
          />
        </label>
        <label className={style["input-label"]}>
          Кинотеатр
          <Select
            selected={selectedCinema || null}
            options={cinemas}
            placeholder="Выберите кинотеатр"
            onChange={handleCinemaSelect}
          />
        </label>
      </div>
    </div>
  );
};
