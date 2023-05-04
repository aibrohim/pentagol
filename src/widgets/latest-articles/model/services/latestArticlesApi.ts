import { baseApi } from "@/app/providers/store/config/configureApi";
import { ArticleSchema } from "@/entities/article";

interface ILatestArticlesResult {
  content: ArticleSchema[];
  totalPages: number;
}

export const latestArticlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLatestArticles: builder.query<ArticleSchema[], number>({
      query: (page: number) => ({
        url: "articles",
        params: {
          _page: page,
          _limit: 4,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetLatestArticlesQuery } = latestArticlesApi;
