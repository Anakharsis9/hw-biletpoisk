"use client";
import { CartIcon } from "@/components/Icons";
import style from "./Layout.module.scss";
import vars from "@/style/variables.module.scss";
import { selectTotal } from "@/redux/features/cart/selector";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "@/components/Base/Button";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const totalTickets = useAppSelector(state => selectTotal(state)) as ReactNode;

  return (
    <header className={style.header}>
      <Link href="/" className={style["company-name"]}>
        Билетопоиск
      </Link>
      <Button variant={"none"} onClick={() => router.push("/cart")}>
        <div className={style["cart-wrapper"]}>
          {!!totalTickets && (
            <div className={style["cart-items-count"]}>{totalTickets}</div>
          )}
          <CartIcon color={vars.white} />
        </div>
      </Button>
    </header>
  );
};
