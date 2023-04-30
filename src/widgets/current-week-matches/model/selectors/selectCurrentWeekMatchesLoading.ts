import { RootState } from "@/app/providers/store";

export const selectCurrentWeekMatchesLoading = (state: RootState) =>
  state.matches.currentWeekMatchesLoading;
