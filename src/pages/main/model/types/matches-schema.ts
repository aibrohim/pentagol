import { MatchResultSchema } from "@/entities/match-result";

export interface MatchesSchema {
  currentWeekMatches: MatchResultSchema[] | null;
  currentWeekMatchesLoading: boolean;
  lastWeekMatches: MatchResultSchema[] | null;
  lastWeekMatchesLoading: boolean;
}
