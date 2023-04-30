import { ClubRatingSchema } from "@/entities/club-rating/model/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

import Barsa from "@/shared/assets/img/barcelona.png";

function fetchScores(leagueId: number) {
  return new Promise<{ data: ClubRatingSchema[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              clubId: 1,
              name: "Barsa",
              img: Barsa,
              differences: 12,
              totalScore: 15,
              leagueId: 1,
            },
            {
              clubId: 2,
              name: "Barsa",
              img: Barsa,
              differences: 12,
              totalScore: 15,
              leagueId: 1,
            },
            {
              clubId: 3,
              name: "Barsa",
              img: Barsa,
              differences: 12,
              totalScore: 15,
              leagueId: 2,
            },
          ].filter((league) => league.leagueId === leagueId),
        }),
      500
    )
  );
}

export const getScoresByLeague = createAsyncThunk(
  "counter/fetchScores",
  async (leagueId: number) => {
    const response = await fetchScores(leagueId);
    return response.data;
  }
);
