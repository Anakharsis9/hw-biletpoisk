import { createSlice } from "@reduxjs/toolkit";

import type { Movie } from "@/components/MovieItem";

const initialState: {
  value: Movie[];
} = {
  value: []
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      state.value = payload;
    }
  }
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;
