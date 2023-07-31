import { baseApi, wrapper } from "@/global/providers/store";

import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

import { articleDetailsApi, ArticleInfo } from "@/widgets/article-info";
import { LatestNews } from "@/widgets/latest-articles";
import { latestArticlesApi } from "@/widgets/latest-articles/";
import { MainArticles } from "@/widgets/main-articles";

import { articlesApi } from "@/entities/article";

import { Container } from "@/shared/ui/container";

import classes from "./article-details.module.scss";

const ArticleDetails = () => {
  return (
    <Container>
      <div className={classes.TopContent}>
        <ArticleInfo className={classes.Info} />
        <MainArticles />
      </div>

      <LatestNews />
    </Container>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      // eslint-disable-next-line no-console

      // res.setHeader(
      //   "Cache-Control",
      //   "public, s-maxage=10, stale-while-revalidate=15"
      // );

      if (params?.id) {
        store.dispatch(
          articleDetailsApi.endpoints.getArticleInfo.initiate(
            params?.id ? +params.id : null,
            { forceRefetch: true }
          )
        );
      }
      store.dispatch(latestArticlesApi.endpoints.getLatestArticles.initiate(1));
      store.dispatch(articlesApi.endpoints.getTopArticles.initiate(null));

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
