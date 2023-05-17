import { baseApi } from "@/global/providers/store/config/configureApi";
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
      merge: (currentCache, newItems, { arg }) => {
        if (arg !== 1) {
          currentCache.push(...newItems);
        } else {
          currentCache = newItems;
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg === 1) return true;
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetLatestArticlesQuery } = latestArticlesApi;
