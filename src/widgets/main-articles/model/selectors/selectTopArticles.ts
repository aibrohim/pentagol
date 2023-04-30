import { RootState } from "@/app/providers/store";

export const selectTopArticles = (state: RootState) => state.articles.topNews;
