import type { RootState } from "@/redux/store";

export const selectMoviesModule = (state: RootState) => state.movies;
