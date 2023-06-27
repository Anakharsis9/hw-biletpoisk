import type { RootState } from "@/redux/store";

const selectCartModule = (state: RootState) => state.cart;

export const selectMovieTicketsAmount = (state: RootState, id: string) =>
  selectCartModule(state)[id] ?? 0;
export const selectTotal = (state: RootState) => {
  const amounts = Object.values(selectCartModule(state));
  return amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
export const selectIds = (state: RootState) =>
  Object.keys(selectCartModule(state));
