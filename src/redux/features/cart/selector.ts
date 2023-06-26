import type { RootState } from "@/redux/store";

const selectCartModule = (state: RootState) => state.cart;

export const selectTotal = (state: RootState) => {
  const amounts = Object.values(selectCartModule(state));
  return amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
