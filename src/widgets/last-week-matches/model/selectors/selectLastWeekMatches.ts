import { RootState } from "@/global/providers/store";

export const selectLastWeekMatches = (state: RootState) =>
  state.matches.lastWeekMatches;
