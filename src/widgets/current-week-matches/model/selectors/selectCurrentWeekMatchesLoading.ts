import { RootState } from "@/global/providers/store";

export const selectCurrentWeekMatchesLoading = (state: RootState) =>
  state.matches.currentWeekMatchesLoading;
