import { WeekType } from "../../enum";

export interface GetWeekMatchRequestSchema {
  week: WeekType;
  leagueId: number;
}
