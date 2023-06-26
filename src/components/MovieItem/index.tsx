"use client";

import { Button } from "../Base/Button";
import { CloseIcon } from "../Icons";
import Image from "next/image";
import style from "./MovieItem.module.scss";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { cartActions } from "@/redux/features/cart";
interface Movie {
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
interface MovieItemProps {
  movie: Movie;
  onClose?: () => void;
}

export const MovieItem = ({ movie, onClose }: MovieItemProps) => {
  const [ticketCount, setTicketCount] = useState(0);

  const dispatch = useAppDispatch();

  return (
    <div className={style.movieItemWrapper}>
      <div className={style.movieInfo}>
        <div className={style.moviePosterWrapper}>
          <Image
            className={style.moviePoster}
            src={movie?.posterUrl || "/imagePlaceholder.jpg"}
            alt={"poster" + movie?.title}
            width={100}
            height={120}
            placeholder="blur"
            blurDataURL="/imagePlaceholder.jpg"
          />
        </div>
        <div className={style.movieHeader}>
          <h2 className={style.movieName}>{movie?.title}</h2>
          <span className={style.movieGenre}>{movie?.genre}</span>
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
              dispatch(cartActions.decrement(movie.id));
            }}
          />
          <span className={style.ticketCount}>{ticketCount}</span>
          <Button
            variant={"filled"}
            iconName="plus"
            disabled={ticketCount === 30}
            onClick={() => {
              setTicketCount(prev => prev + 1);
              dispatch(cartActions.increment(movie.id));
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
