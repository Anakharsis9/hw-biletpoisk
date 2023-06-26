import "./globals.scss";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

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
        <StoreProvider>
          <div className="app">
            <Header/>
            <main className="main">{children}</main>
            <Footer/>
          </div>
        </StoreProvider>
        <div id="dropdown-portal"></div>
      </body>
    </html>
  );
}
