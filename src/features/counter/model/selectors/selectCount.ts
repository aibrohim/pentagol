import { RootState } from "@/global/providers/store";

export const selectCount = (state: RootState) => state.counter.value;
