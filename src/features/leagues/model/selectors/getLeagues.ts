import { RootState } from "@/global/providers/store";

export const getLeagues = (state: RootState) => state.leagues.list;
