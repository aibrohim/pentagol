import { LatestArticles } from "@/widgets/latest-articles/";
import { TopArticlesList } from "@/widgets/top-articles";

import { ArticleDetails } from "@/entities/article";

import { Container } from "@/shared/ui/container";

import classes from "./article.module.scss";

export const Article = () => {
  return (
    <Container>
      <div className={classes.TopContent}>
        <ArticleDetails className={classes.Info} />
        <TopArticlesList />
      </div>

      <LatestArticles />
    </Container>
  );
};
