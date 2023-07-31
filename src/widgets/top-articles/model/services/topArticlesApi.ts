import { ArticleSchema } from "@/entities/article";
import { baseApi } from "@/global/providers/store";

export const topArticlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopArticles: builder.query<ArticleSchema[], void>({
      query: () => ({ url: "articles", params: { _limit: 7, page: 1 } }),
    }),
  }),
});

export const { useGetTopArticlesQuery } = topArticlesApi;
