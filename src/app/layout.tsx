import { CartIcon } from "@/components/Icons";
import "./globals.scss";
import vars from "../style/variables.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Билетпоиск",
  description: "Сервис поĸупĸи билетов в ĸино"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="app">
          <header className="header">
            <h1 className="company-name">Билетопоиск</h1>
            <div className="cart-wrapper">
              <div className="cart-items-count">30</div>
              <CartIcon color={vars.white} />
            </div>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <span>Вопросы-ответы</span>
            <span>О нас</span>
          </footer>
        </div>
        <div id='dropdown-portal'>
        </div>
      </body>
    </html>
  );
}
