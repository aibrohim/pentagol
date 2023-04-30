import { RootState } from "@/app/providers/store";

export const getLeagues = (state: RootState) => state.leagues.list;
