import { RootState } from "@/app/providers/store";

export const selectTopArticlesLoading = (state: RootState) =>
  state.articles.topNewsLoading;
