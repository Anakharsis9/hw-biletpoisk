"use client";

import { MoviesList } from "@/components/MoviesList";
import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectIds, selectTotal } from "@/redux/features/cart/selector";
import { selectMoviesModule } from "@/redux/features/movies/selector";
import { useState } from "react";
import { cartActions } from "@/redux/features/cart";

export default function Page({}) {
  const { value: movies } = useAppSelector(state => selectMoviesModule(state));

  const cartMoviesIds = useAppSelector(state => selectIds(state));
  const total = useAppSelector(state => selectTotal(state));

  const dispatch = useAppDispatch();

  const [cartMovies, setCartMovies] = useState(
    movies?.filter(movie => cartMoviesIds.includes(movie.id))
  );

  const removeMovieFromCart = (id: string) => {
    setCartMovies(cartMovies => cartMovies?.filter(movie => movie.id !== id));
    dispatch(cartActions.decrement(id));
  };

  return (
    <div className={style.cartWrapper}>
      {!!cartMovies?.length && (
        <MoviesList
          movies={cartMovies}
          onClose={id => {
            removeMovieFromCart(id);
          }}
        />
      )}
      {!!!cartMovies?.length && "Корзина пуста"}
      {!!cartMovies?.length && (
        <div className={style.totalWrapper}>
          <span className={style.title}>Итого билетов:</span>
          <span className={style.title}>{total}</span>
        </div>
      )}
    </div>
  );
}
