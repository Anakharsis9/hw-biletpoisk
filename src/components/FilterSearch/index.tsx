import style from "./FilterSearch.module.scss";

export const FilterSearch = () => {
  return (
    <div className={style["filter-wrapper"]}>
      <div className={style["filter-header"]}>Фильтр поиска</div>
      <div className={style["filter-controls"]}>
        <label htmlFor="">
          Label text
          <input type="text" />
        </label>
      </div>
    </div>
  );
};
