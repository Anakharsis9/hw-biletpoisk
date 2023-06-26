"use client";

import { useState } from "react";
import { Select } from "../Base/Select";
import style from "./FilterSearch.module.scss";

export const FilterSearch = () => {
  const [genre, setGenreValue] = useState("");
  const handleGenreSelect = (value: string) => {
    setGenreValue(value);
  };
  const options = [
    { title: "Боевик", value: "Боевик" },
    { title: "Комедия", value: "Комедия" },
    { title: "Фэнтези", value: "Фэнтези" },
    { title: "Ужасы", value: "Ужасы" }
  ];
  const selectedGenre = options.find(item => item.value === genre);

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
      </div>
    </div>
  );
};
