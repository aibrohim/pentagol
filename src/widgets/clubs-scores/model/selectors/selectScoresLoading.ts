import { RootState } from "@/global/providers/store";

export const selectScoresLoading = (state: RootState) => state.scores.loading;
