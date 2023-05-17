import { WeekMatches, WeekType } from "@/features/week-matches";

import { FC } from "react";

interface CurrentWeekMatchesProps {}

export const CurrentWeekMatches: FC<CurrentWeekMatchesProps> = () => {
  return <WeekMatches weekType={WeekType.CURRENT} />;
};
