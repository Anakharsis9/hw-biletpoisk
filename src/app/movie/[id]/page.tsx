"use client";

import { Movie } from "@/components/MovieItem";
import style from "./style.module.scss";
import Image from "next/image";
import { Button } from "@/components/Base/Button";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { cartActions } from "@/redux/features/cart";
import {
  useGetMovieQuery,
  useGetMovieReviewsQuery
} from "@/redux/services/movieApi";
import { Review, ReviewItem } from "@/components/ReviewItem";

interface Props {
  params: { id: string };
}
export default function Page({ params }: Props) {
  const [ticketCount, setTicketCount] = useState(0);
  const dispatch = useAppDispatch();

  const { data: movie, isLoading, error } = useGetMovieQuery(params.id);

  const { data: reviews } = useGetMovieReviewsQuery(params.id);

  return (
    <div className={style.moviePageWrapper}>
      <div className={style.movieWrapper}>
        <Image
          className={style.moviePoster}
          src={movie?.posterUrl || "/imagePlaceholder.jpg"}
          alt={"poster" + movie?.title}
          width={400}
          height={500}
        />
        {isLoading && <span>Загрузка...</span>}
        <div className={style.info}>
          <div className={style.mainInfo}>
            <div className={style.header}>
              <h2 className={style.title}>{movie?.title}</h2>
              <div className={style.subInfoWrapper}>
                <div className={style.subInfo}>
                  <h3 className={style.subHeader}>Жанр:</h3>
                  <span className={style.subText}>{movie?.genre}</span>
                </div>
                <div className={style.subInfo}>
                  <h3 className={style.subHeader}>Год выпуска:</h3>
                  <span className={style.subText}>{movie?.releaseYear}</span>
                </div>
                <div className={style.subInfo}>
                  <h3 className={style.subHeader}>Рейтинг:</h3>
                  <span className={style.subText}>{movie?.rating}</span>
                </div>
                <div className={style.subInfo}>
                  <h3 className={style.subHeader}>Режиссер: </h3>
                  <span className={style.subText}>{movie?.director}</span>
                </div>
              </div>
            </div>
            <div className={style.ticketControls}>
              <Button
                variant={"filled"}
                iconName="minus"
                disabled={ticketCount === 0}
                onClick={() => {
                  setTicketCount(prev => prev - 1);
                  dispatch(cartActions.decrement(movie?.id));
                }}
              />
              <span className={style.ticketCount}>{ticketCount}</span>
              <Button
                variant={"filled"}
                iconName="plus"
                disabled={ticketCount === 30}
                onClick={() => {
                  setTicketCount(prev => prev + 1);
                  dispatch(cartActions.increment(movie?.id));
                }}
              />
            </div>
          </div>

          <div className={style.description}>
            <h3 className={style.subHeader}>Описание</h3>
            <p className={style.descriptionText}>{movie?.description}</p>
          </div>
        </div>
      </div>
      <div className={style.reviews}>
        {!!reviews?.length &&
          reviews.map((review: Review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
}
