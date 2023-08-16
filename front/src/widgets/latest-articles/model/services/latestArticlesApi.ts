import { baseApi } from "@/global/providers/store/config/configureApi";
import { ArticleSchema } from "@/entities/article";
import { articlesLimit } from "../../config/articlesLimit";
import { LatestArticlesResponseSchema } from "../types/latest-articles-response-schema";

// interface ILatestArticlesResult {
//   content: ArticleSchema[];
//   totalPages: number;
// }

export const latestArticlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLatestArticles: builder.query<LatestArticlesResponseSchema, number>({
      query: (page: number) => ({
        url: "articles",
        params: {
          _page: page,
          _limit: articlesLimit,
        },
      }),
      transformResponse(baseQueryReturnValue: ArticleSchema[], meta) {
        const count = meta?.response?.headers.get("X-Total-Count");
        return {
          count: count ? +count : 0,
          articles: baseQueryReturnValue,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg !== 1) {
          currentCache.articles.push(...newItems.articles);
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
