import Link from "next/link";
import style from "./Layout.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link href="/qa">Вопросы-ответы</Link>
      <Link href="about">О нас</Link>
    </footer>
  );
};
