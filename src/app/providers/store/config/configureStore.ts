import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { counterReducer } from "@/features/counter/model";
import { leaguesReducer } from "@/features/leagues/model";
import { matchesReducer } from "@/pages/main/model/slice/matches-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    leagues: leaguesReducer,
    matches: matchesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
