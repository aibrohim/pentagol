import { wrapper } from "@/app/providers/store";

import { ArticleInfo, articleDetailsApi } from "@/widgets/article-info";
import { latestArticlesApi } from "@/widgets/latest-articles/";
import { MainArticles } from "@/widgets/main-articles";
import { LatestNews } from "@/widgets/latest-articles";

import { Container } from "@/shared/ui/container";

import classes from "./article-details.module.scss";
import { articlesApi } from "@/entities/article";

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

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(articleDetailsApi.endpoints.getArticleInfo.initiate(null));
  store.dispatch(latestArticlesApi.endpoints.getLatestArticles.initiate(1));
  store.dispatch(articlesApi.endpoints.getTopArticles.initiate(null));

  await Promise.all([
    ...store.dispatch(articleDetailsApi.util.getRunningQueriesThunk()),
    ...store.dispatch(articlesApi.util.getRunningQueriesThunk()),
    ...store.dispatch(latestArticlesApi.util.getRunningQueriesThunk()),
  ]);

  return {
    props: {},
  };
});

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default ArticleDetails;
