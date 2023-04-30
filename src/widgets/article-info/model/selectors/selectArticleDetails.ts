import { RootState } from "@/app/providers/store";

export const selectArticleDetails = (state: RootState) =>
  state.articles.articleDetails;
