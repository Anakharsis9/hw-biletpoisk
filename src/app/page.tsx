import { FilterSearch } from "@/components/FilterSearch";
import style from "./page.module.scss";
import { MoviesList } from "@/components/MoviesList";

export default function Home() {
  return (
    <div className={style.container}>
      <FilterSearch />
      <MoviesList />
    </div>
  );
}
