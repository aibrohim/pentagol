import { baseApi } from "@/global/providers/store";

import { ClubScore } from "../types/scores-schema";

export const leaguesApi = baseApi.injectEndpoints({
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

export const { useLazyGetScoresByLeagueQuery } = leaguesApi;
