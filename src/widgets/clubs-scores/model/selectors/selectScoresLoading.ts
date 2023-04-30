import { RootState } from "@/app/providers/store";

export const selectScoresLoading = (state: RootState) => state.scores.loading;
