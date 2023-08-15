import { ClubScoreSchema } from "./ClubScoreSchema";

export interface MatchResultSchema {
  id: number;
  leaugeId: number;
  matchDate: string;
  clubA: ClubScoreSchema;
  clubB: ClubScoreSchema;
}
