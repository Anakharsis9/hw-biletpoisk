import { FilterSearch } from "@/components/FilterSearch";
import style from "./page.module.scss";
import { FilmItem } from "@/components/FilmItem";

export default function Home() {
  const films = [
    {
      title: "Властелин колец: Братство Кольца",
      posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
      releaseYear: 2001,
      description:
        "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
      genre: "fantasy",
      id: "2aT976Fs_Bek0e2ZR_05V",
      rating: 8,
      director: "Питер Джексон",
      reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"]
    },
    {
      title: "Властелин колец: Две крепости",
      posterUrl: "https://i.postimg.cc/9MfFCgnP/2.webp",
      releaseYear: 2002,
      description:
        "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.",
      genre: "fantasy",
      id: "CTzeB2PGEHHBwxCNlU4uo",
      rating: 8,
      director: "Питер Джексон",
      reviewIds: ["yvLjlSo9w6T4Mp6gG22pc", "PnxKfx6XS_RqcIxC7w4a7"]
    }
  ];
  return (
    <div className={style.container}>
      <FilterSearch />
      <div className={style.filmsList}>
        {!!films.length &&
          films.map(film => <FilmItem key={film.id} film={film} />)}
      </div>
    </div>
  );
}
