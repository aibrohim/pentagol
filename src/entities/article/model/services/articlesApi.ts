import { baseApi } from "@/app/providers/store";
import { ArticleSchema } from "../types";

export const articlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopArticles: builder.query<ArticleSchema[], null>({
      query: () => ({ url: "articles", params: { _limit: 7, page: 1 } }),
    }),
  }),
});

export const { useGetTopArticlesQuery } = articlesApi;
