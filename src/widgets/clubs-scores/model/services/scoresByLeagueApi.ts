import { baseApi } from "@/global/providers/store";

import { ClubScore } from "../types/scores-schema";

export const scoresByLeagueApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getScoresByLeague: builder.query<ClubScore[], number>({
      query: (leagueId) => ({
        url: "scores",
        params: {
          leagueId,
        },
      }),
    }),
  }),
});

export const { useLazyGetScoresByLeagueQuery } = scoresByLeagueApi;
