import { MatchResultSchema } from "@/entities/match-result";

import Barsa from "@/shared/assets/img/barcelona.png";
import Liver from "@/shared/assets/img/liverpool.jpeg";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentWeekMatches = createAsyncThunk(
  "matches/getCurrentWeekMatches",
  async (leagueId: number) => {
    return new Promise<{ data: MatchResultSchema[] }>((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: [
              {
                matchId: 1,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 1,
              },
              {
                matchId: 2,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 1,
              },
              {
                matchId: 3,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 2,
              },
              {
                matchId: 4,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 3,
              },
              {
                matchId: 5,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 2,
              },
              {
                matchId: 6,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 3,
              },
              {
                matchId: 7,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 3,
              },
              {
                matchId: 8,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 4,
              },
              {
                matchId: 9,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 3,
              },
              {
                matchId: 10,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 2,
              },
              {
                matchId: 11,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 1,
              },
              {
                matchId: 12,
                matchDateTime: "2022-12-12T11:23",
                clubA: { clubId: 12, name: "Barcelona", img: Barsa },
                clubAScore: 12,
                clubB: { clubId: 13, name: "Real", img: Liver },
                clubBScore: 13,
                leaugeId: 1,
              },
            ].filter((match) => match.leaugeId === leagueId),
          }),
        500
      )
    );
  }
);
