import { ClubSchema } from "@/entities/match-result/model/types";

export interface ClubRatingSchema extends ClubSchema {
  totalScore: number;
  differences: number;
  leagueId: number;
}
