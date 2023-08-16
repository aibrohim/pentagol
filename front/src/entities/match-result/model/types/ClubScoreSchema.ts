import { ClubSchema } from "@/entities/club";

export interface ClubScoreSchema extends ClubSchema {
  score: number;
}
