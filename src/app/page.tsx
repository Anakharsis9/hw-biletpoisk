import { FilterSearch } from "@/components/FilterSearch";
import style from "./page.module.scss";
import { FilmItem } from "@/components/FilmItem";

export default function Home() {
  return (
    <div className={style.container}>
      <FilterSearch />
      <div className={style.filmsList}>
        <FilmItem/>
      </div>
    </div>
  );
}
