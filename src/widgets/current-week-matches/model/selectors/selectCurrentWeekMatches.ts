import { RootState } from "@/app/providers/store";

export const selectCurrentWeekMatches = (state: RootState) =>
  state.matches.currentWeekMatches;
