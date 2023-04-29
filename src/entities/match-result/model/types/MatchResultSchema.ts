import { ClubSchema } from "./MatchClubSchema";

export interface MatchResultSchema {
  matchId: number;
  matchDateTime: string;
  clubA: ClubSchema;
  clubAScore: number;
  clubB: ClubSchema;
  clubBScore: number;
}
