import { RootState } from "@/app/providers/store";

export const selectArticleDetailsLoading = (state: RootState) =>
  state.articles.articleDetailsLoading;
