import { RootState } from "@/app/providers/store";

export const selectScores = (state: RootState) => state.scores.clubs;
