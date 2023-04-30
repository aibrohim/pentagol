import { createSlice } from "@reduxjs/toolkit";

import { MatchesSchema } from "../types/matches-schema";
import { getLastWeekMatches } from "@/widgets/last-week-matches/model/services";
import { getCurrentWeekMatches } from "@/widgets/current-week-matches/model/services";

const initialState: MatchesSchema = {
  currentWeekMatches: null,
  currentWeekMatchesLoading: false,
  lastWeekMatches: null,
  lastWeekMatchesLoading: false,
};

export const matchesSlice = createSlice({
  name: "matches",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeekMatches.pending, (state) => {
        state.currentWeekMatchesLoading = true;
      })
      .addCase(getCurrentWeekMatches.fulfilled, (state, action) => {
        state.currentWeekMatchesLoading = false;
        state.currentWeekMatches = action.payload;
      })
      .addCase(getCurrentWeekMatches.rejected, (state) => {
        state.currentWeekMatchesLoading = false;
      });
    builder
      .addCase(getLastWeekMatches.pending, (state) => {
        state.lastWeekMatchesLoading = true;
      })
      .addCase(getLastWeekMatches.fulfilled, (state, action) => {
        state.lastWeekMatchesLoading = false;
        state.lastWeekMatches = action.payload;
      })
      .addCase(getLastWeekMatches.rejected, (state) => {
        state.lastWeekMatchesLoading = false;
      });
  },
});

export const {} = matchesSlice.actions;

export const { reducer: matchesReducer } = matchesSlice;
