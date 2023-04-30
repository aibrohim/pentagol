import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LeaguesSchema } from "../types/leagues-schema";
import { getLeagues } from "../services";

const initialState: LeaguesSchema = {
  list: null,
  loading: false,
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState: initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLeagues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLeagues.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getLeagues.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setLoading } = leaguesSlice.actions;

export const { reducer: leaguesReducer } = leaguesSlice;
