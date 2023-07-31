import { FC } from "react";

import { TopArticleListItem } from "@/entities/article";

import { useGetTopArticlesQuery } from "../../model/services/topArticlesApi";
import classes from "./main-articles.module.scss";

export const TopArticlesList: FC = () => {
  const { data: articles } = useGetTopArticlesQuery();

  return (
    <section className={classes.MainArticles}>
      <h2 className={classes.Title}>Asosiy</h2>
      {/* {error?.error} */}
      {articles?.map((article) => (
        <TopArticleListItem key={article.id} article={article} />
      ))}
    </section>
  );
};
