import { ArticleCard } from "@/entities/article";
import { useGetLatestArticlesQuery } from "@/widgets/latest-articles/model/services";
import { FC } from "react";
import classes from "./latest-articles-list.module.scss";

interface LatestArticlesListProps {
  page: number;
}

export const LatestArticlesList: FC<LatestArticlesListProps> = ({ page }) => {
  const { data: latestArticles } = useGetLatestArticlesQuery(page);

  if (!latestArticles?.length) return <p>Yangiliklar topilmadi (</p>;
  return (
    <div className={classes.LatestArticlesList}>
      {latestArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
