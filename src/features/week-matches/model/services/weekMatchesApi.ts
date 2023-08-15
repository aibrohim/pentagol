import { baseApi } from "@/global/providers/store";
import { MatchResultSchema } from "@/entities/match-result";
import { WeekMatchRequestSchema } from "../types/get-week-match-request-schema";

export const weekMatchesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeekMatches: builder.query<MatchResultSchema[], WeekMatchRequestSchema>({
      query: ({ week, leagueId }) => `matches/${week}/${leagueId}`,
    }),
  }),
});
