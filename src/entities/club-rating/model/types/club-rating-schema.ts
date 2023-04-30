import { ClubSchema } from "@/entities/match-result/model/types";

export interface ClubRatingSchema extends ClubSchema {
  gamesPlayed: number;
  point: number;
  leagueId: number;
}
