import { Accordion } from "@/components/Base/Accordion";
import style from "./style.module.scss";

const qas = [
  {
    q: "Что такое Билетопоиск?",
    a: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
  },
  {
    q: "Какой компании принадлежит Билетопоиск?",
    a: "Самой лучшей"
  },
  {
    q: "Как купить билет на Билетопоиск?",
    a: "Просто."
  },
  {
    q: "Что такое Билетопоиск?",
    a: "Мы — крупнейший сервис о кино в рунете."
  },
  {
    q: "Как оставить отзыв на Билетопоиск?",
    a: "Если ты читаешь это, то знай, я очень хочу спать"
  }
];

export default function Page() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Вопросы-ответы</h2>
      <div className={style.accordionsWrapper}>
        {qas.map(qa => (
          <Accordion key={qa.q} title={qa.q} text={qa.a} />
        ))}
      </div>
    </div>
  );
}
