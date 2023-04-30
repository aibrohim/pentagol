import { axiosInstance } from "@/shared/config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchMatches = (leagueId: number) =>
  axiosInstance.get("match/prev/" + leagueId);

export const getLastWeekMatches = createAsyncThunk(
  "matches/getLastWeekMatches",
  async (leagueId: number) => {
    const leagues = await fetchMatches(leagueId);

    return leagues.data;
  }
);
