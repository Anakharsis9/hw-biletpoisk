"use client";

import { Button } from "../Base/Button";
import { CloseIcon } from "../Icons";
import Image from "next/image";
import style from "./MovieItem.module.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cartActions } from "@/redux/features/cart";
import { selectMovieTicketsAmount } from "@/redux/features/cart/selector";
import Link from "next/link";
import { Modal } from "../Base/Modal";
export interface Movie {
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
  onClose?: (id: string) => void;
}

export const MovieItem = ({ movie, onClose }: MovieItemProps) => {
  const ticketCount = useAppSelector(state =>
    selectMovieTicketsAmount(state, movie.id)
  );

  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);

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
          />
        </div>
        <div className={style.movieHeader}>
          <Link href={`/movie/${movie.id}`} className={style.movieName}>
            {movie?.title}
          </Link>
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
              if (onClose && (ticketCount === 1)) {
                setShowModal(true);
                return;
              }
              dispatch(cartActions.decrement(movie.id));
            }}
          />
          <span className={style.ticketCount}>{ticketCount}</span>
          <Button
            variant={"filled"}
            iconName="plus"
            disabled={ticketCount === 30}
            onClick={() => {
              dispatch(cartActions.increment(movie.id));
            }}
          />
        </div>
        {onClose && (
          <Button
            variant={"none"}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <CloseIcon width={20} height={20} />
          </Button>
        )}
        <Modal
          show={showModal}
          title={"Удаление билета"}
          onClose={() => setShowModal(false)}
          onYes={() => {
            onClose?.(movie.id);
            setShowModal(false);
          }}
        >
          <span>Вы уверены, что хотите удалить билет?</span>
        </Modal>
      </div>
    </div>
  );
};
