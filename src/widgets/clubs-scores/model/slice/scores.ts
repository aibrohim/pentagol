import { createSlice } from "@reduxjs/toolkit";

import { getScoresByLeague } from "../services/getScoresByLeague";
import { ScoresSchema } from "../types/scores-schema";

const initialState: ScoresSchema = {
  clubs: null,
  loading: false,
};

export const scoresSlice = createSlice({
  name: "scores",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getScoresByLeague.pending, (state) => {
        state.loading = true;
      })
      .addCase(getScoresByLeague.fulfilled, (state, action) => {
        state.loading = false;
        state.clubs = action.payload;
      })
      .addCase(getScoresByLeague.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer: scoresReducer, actions: scoresActions } = scoresSlice;
