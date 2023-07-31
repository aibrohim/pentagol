import { WeekMatches, WeekType } from "@/features/week-matches";

import { FC } from "react";

export const LastWeekMatches: FC = () => {
  return <WeekMatches weekType={WeekType.CURRENT} />;
};
