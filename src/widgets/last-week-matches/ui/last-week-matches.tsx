import { WeekMatches, WeekType } from "@/features/week-matches";

import { FC } from "react";

interface LastWeekMatchesProps {}

export const LastWeekMatches: FC<LastWeekMatchesProps> = () => {
  return <WeekMatches weekType={WeekType.CURRENT} />;
};
