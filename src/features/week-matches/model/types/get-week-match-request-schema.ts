import { WeekType } from "../../enum";

export interface WeekMatchRequestSchema {
  week: WeekType;
  leagueId: number;
}
