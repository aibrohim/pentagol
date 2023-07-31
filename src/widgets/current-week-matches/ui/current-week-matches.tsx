import { WeekMatches, WeekType } from "@/features/week-matches";

import { FC } from "react";

export const CurrentWeekMatches: FC = () => {
  return <WeekMatches weekType={WeekType.CURRENT} />;
};
