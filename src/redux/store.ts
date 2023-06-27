import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { movieApi } from "./services/movieApi";
import { moviesReducer } from "./features/movies";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== "production"
});
