import style from "./FilterSearch.module.scss";

export const FilterSearch = () => {
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
      </div>
    </div>
  );
};
