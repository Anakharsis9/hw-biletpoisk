"use client";
import { CartIcon } from "@/components/Icons";
import style from "./Layout.module.scss";
import vars from "@/style/variables.module.scss";
import { selectTotal } from "@/redux/features/cart/selector";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";

export const Header = () => {
  const totalTickets = useAppSelector(state => selectTotal(state)) as ReactNode;

  return (
    <header className={style.header}>
      <h1 className={style["company-name"]}>Билетопоиск</h1>
      <div className={style["cart-wrapper"]}>
        {!!totalTickets && (
          <div className={style["cart-items-count"]}>{totalTickets}</div>
        )}
        <CartIcon color={vars.white} />
      </div>
    </header>
  );
};
