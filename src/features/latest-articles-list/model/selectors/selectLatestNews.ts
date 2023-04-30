import { RootState } from "@/app/providers/store";

export const selectLatestNews = (state: RootState) =>
  state.articles.latestArticles;
