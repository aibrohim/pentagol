import { RootState } from "@/app/providers/store";

export const selectLastWeekMatchesLoading = (state: RootState) =>
  state.matches.lastWeekMatchesLoading;
