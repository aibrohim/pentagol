import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { counterReducer } from "@/features/counter/model";
import { leaguesReducer } from "@/features/leagues/model";
import { matchesReducer } from "@/pages/main/model/slice/matches-slice";
import { scoresReducer } from "@/widgets/clubs-scores/model/slice";
import { baseApi } from "./configureApi";
import { articlesReducer } from "./slices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    leagues: leaguesReducer,
    matches: matchesReducer,
    scores: scoresReducer,
    articles: articlesReducer,
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
