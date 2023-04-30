import { RootState } from "@/app/providers/store";

export const selectLatestNewsLoading = (state: RootState) =>
  state.articles.latestArticlesLoading;
