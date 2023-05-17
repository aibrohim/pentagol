import { RootState } from "@/global/providers/store";

export const selectLastWeekMatchesLoading = (state: RootState) =>
  state.matches.lastWeekMatchesLoading;
