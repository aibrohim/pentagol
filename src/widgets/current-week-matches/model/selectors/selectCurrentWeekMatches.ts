import { RootState } from "@/global/providers/store";

export const selectCurrentWeekMatches = (state: RootState) =>
  state.matches.currentWeekMatches;
