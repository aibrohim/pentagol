import { axiosInstance } from "@/shared/config/data";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchMatches = (leagueId: number) =>
  axiosInstance.get("match/current/" + leagueId);

export const getCurrentWeekMatches = createAsyncThunk(
  "matches/getCurrentWeekMatches",
  async (leagueId: number) => {
    const res = await fetchMatches(leagueId);
    return res.data;
  }
);
