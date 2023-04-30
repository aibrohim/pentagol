import { FC } from "react";
import classes from "./latest-articles-list.module.scss";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectLatestNews, selectLatestNewsLoading } from "../model/selectors";
import { ArticleCard } from "@/entities/article-card";

interface LatestArticlesListProps {}

export const LatestArticlesList: FC<LatestArticlesListProps> = () => {
  const latestNews = useAppSelector(selectLatestNews);
  const latestNewsLoading = useAppSelector(selectLatestNewsLoading);

  if (!latestNews?.content) return <p>Yangiliklar topilmadi (</p>;
  return (
    <div className={classes.LatestArticlesList}>
      {latestNews.content.map((article) => (
        <ArticleCard article={article} />
      ))}
      {latestNewsLoading && <p>Loading...</p>}
    </div>
  );
};
