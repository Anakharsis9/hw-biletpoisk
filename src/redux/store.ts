import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { movieApi } from "./services/movieApi";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== "production"
});
