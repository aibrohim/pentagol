import { FC } from "react";

import { ArticleCard } from "@/entities/article";

import classes from "./list.module.scss";
import { useGetLatestArticlesQuery } from "../../model/services";

interface LatestArticlesListProps {
  page: number;
}

export const LatestArticlesList: FC<LatestArticlesListProps> = ({ page }) => {
  const { data: latestArticles } = useGetLatestArticlesQuery(page);

  if (!latestArticles?.articles.length) return <p>Yangiliklar topilmadi</p>;

  return (
    <div className={classes.LatestArticlesList}>
      {latestArticles.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
