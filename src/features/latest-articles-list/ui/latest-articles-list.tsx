import { ArticleCard } from "@/entities/article-card";
import { useGetLatestArticlesQuery } from "@/widgets/latest-articles/model/services";
import { FC } from "react";
import classes from "./latest-articles-list.module.scss";

interface LatestArticlesListProps {
  page: number;
}

export const LatestArticlesList: FC<LatestArticlesListProps> = ({ page }) => {
  const { data: latestNews } = useGetLatestArticlesQuery(page);

  if (!latestNews?.length) return <p>Yangiliklar topilmadi (</p>;
  return (
    <div className={classes.LatestArticlesList}>
      {latestNews.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
};
