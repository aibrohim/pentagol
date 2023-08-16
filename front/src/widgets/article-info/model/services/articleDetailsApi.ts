import { baseApi } from "@/global/providers/store";
import { ArticleSchema } from "@/entities/article";

export const articleDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleInfo: builder.query<ArticleSchema, number | null>({
      query: (id) => "articles/" + id,
    }),
  }),
});

export const { useGetArticleInfoQuery } = articleDetailsApi;
