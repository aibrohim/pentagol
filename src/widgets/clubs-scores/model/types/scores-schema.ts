import { ClubSchema } from "@/entities/club";

export interface ClubScore extends ClubSchema {
  gamesPlayed: number;
  point: number;
}
