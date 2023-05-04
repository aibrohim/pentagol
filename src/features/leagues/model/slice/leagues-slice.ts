import { createSlice } from "@reduxjs/toolkit";

import { LeaguesSchema } from "../types/leagues-schema";

const initialState: LeaguesSchema = {
  list: null,
  loading: false,
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState: initialState,
  reducers: {},
});

export const { reducer: leaguesReducer } = leaguesSlice;
