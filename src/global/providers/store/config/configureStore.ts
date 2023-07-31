import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createWrapper } from "next-redux-wrapper";

import { leaguesReducer } from "@/features/leagues/model";
import { scoresReducer } from "@/widgets/clubs-scores/model/slice";
import { baseApi } from "./configureApi";

export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    scores: scoresReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(() => store);
