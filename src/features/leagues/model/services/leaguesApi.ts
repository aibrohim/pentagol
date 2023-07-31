import { baseApi } from "@/global/providers/store/config/configureApi";
import { LeagueSchema } from "@/entities/league";

export const leaguesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLeagues: builder.query<LeagueSchema[], void>({
      query: () => "league/list",
    }),
  }),
});

export const { useGetLeaguesQuery } = leaguesApi;
