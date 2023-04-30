import { LeagueSchema } from "@/entities/league/model/types";

export interface LeaguesSchema {
  list: LeagueSchema[] | null;
  loading: boolean;
}
