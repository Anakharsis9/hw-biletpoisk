import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

