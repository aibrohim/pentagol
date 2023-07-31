import { baseApi, wrapper } from "@/global/providers/store";

import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

import { Article } from "@/pages-flat/article";

import { articleDetailsApi } from "@/widgets/article-info";
import { latestArticlesApi } from "@/widgets/latest-articles/";
import { topArticlesApi } from "@/widgets/top-articles";

const ArticleDetails = () => {
  return <Article />;
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      if (params?.id) {
        store.dispatch(
          articleDetailsApi.endpoints.getArticleInfo.initiate(
            params?.id ? +params.id : null,
            { forceRefetch: true }
          )
        );
      }
      store.dispatch(latestArticlesApi.endpoints.getLatestArticles.initiate(1));
      store.dispatch(topArticlesApi.endpoints.getTopArticles.initiate());

      const data = await Promise.all([
        ...store.dispatch(baseApi.util.getRunningQueriesThunk()),
      ]);

      const isArticleDetailsNotFound = data.some((data) => {
        if (data.error) {
          return (
            data.endpointName === "getArticleInfo" &&
            (data.error as FetchBaseQueryError).status === 404
          );
        }
        return false;
      });

      return {
        props: { data },
        revalidate: 60,
        notFound: isArticleDetailsNotFound,
      };
    }
);

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default ArticleDetails;
