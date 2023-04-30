import { ClubSchema } from "./MatchClubSchema";

export interface MatchResultSchema {
  matchId: number;
  leaugeId: number;
  matchDateTime: string;
  clubA: ClubSchema;
  clubAScore: number;
  clubB: ClubSchema;
  clubBScore: number;
}
