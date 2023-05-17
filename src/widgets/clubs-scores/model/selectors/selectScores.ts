import { RootState } from "@/global/providers/store";

export const selectScores = (state: RootState) => state.scores.clubs;
