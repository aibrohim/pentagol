import { RootState } from "@/app/providers/store";

export const selectLastWeekMatches = (state: RootState) =>
  state.matches.lastWeekMatches;
