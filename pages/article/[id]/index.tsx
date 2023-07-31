import { wrapper } from "@/global/providers/store";

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
        const { isError, ...props } = await store.dispatch(
          articleDetailsApi.endpoints.getArticleInfo.initiate(+params.id, {
            forceRefetch: true,
          })
        );

        if (isError) {
          const error = props.error as FetchBaseQueryError;

          return error.status === 404
            ? { notFound: true, props: {}, revalidate: 360 }
            : Promise.reject(error);
        }
      }

      await Promise.all([
        store.dispatch(
          latestArticlesApi.endpoints.getLatestArticles.initiate(1)
        ),
        store.dispatch(topArticlesApi.endpoints.getTopArticles.initiate()),
      ]);

      return {
        props: {},
        revalidate: 360,
      };
    }
);

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default ArticleDetails;
