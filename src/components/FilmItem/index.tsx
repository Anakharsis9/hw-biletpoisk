"use client";

import { Button } from "../Base/Button";
import { CloseIcon } from "../Icons";
import Image from "next/image";
import style from "./FilmItem.module.scss";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { cartActions } from "@/redux/features/cart";
interface Film {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}
interface FilmItemProps {
  film: Film;
  onClose?: () => void;
}

export const FilmItem = ({ film, onClose }: FilmItemProps) => {
  const [ticketCount, setTicketCount] = useState(0);

  const dispatch = useAppDispatch();

  return (
    <div className={style.filmItemWrapper}>
      <div className={style.filmInfo}>
        <div className={style.filmPosterWrapper}>
          <Image
            className={style.filmPoster}
            src={film?.posterUrl || "/imagePlaceholder.jpg"}
            alt={"poster" + film?.title}
            width={100}
            height={120}
            placeholder="blur"
            blurDataURL="/imagePlaceholder.jpg"
          />
        </div>
        <div className={style.filmHeader}>
          <h2 className={style.filmName}>{film?.title}</h2>
          <span className={style.filmGenre}>{film?.genre}</span>
        </div>
      </div>
      <div className={style.controls}>
        <div className={style.ticketControls}>
          <Button
            variant={"filled"}
            iconName="minus"
            disabled={ticketCount === 0}
            onClick={() => {
              setTicketCount(prev => prev - 1);
              dispatch(cartActions.decrement(film.id));
            }}
          />
          <span className={style.ticketCount}>{ticketCount}</span>
          <Button
            variant={"filled"}
            iconName="plus"
            disabled={ticketCount === 30}
            onClick={() => {
              setTicketCount(prev => prev + 1);
              dispatch(cartActions.increment(film.id));
            }}
          />
        </div>
        {!!onClose && (
          <Button variant={"none"}>
            <CloseIcon width={20} height={20} />
          </Button>
        )}
      </div>
    </div>
  );
};
