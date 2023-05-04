import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/config/data";

function fetchScores(leagueId: number) {
  return axiosInstance.get("club/leagues/" + leagueId);
}

export const getScoresByLeague = createAsyncThunk(
  "counter/fetchScores",
  async (leagueId: number) => {
    const response = await fetchScores(leagueId);
    return response.data;
  }
);
