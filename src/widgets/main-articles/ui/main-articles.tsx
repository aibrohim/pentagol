import { FC } from "react";

import { useGetTopArticlesQuery } from "@/entities/article";
import { Article } from "@/entities/article";

import classes from "./main-articles.module.scss";

export const MainArticles: FC = () => {
  const { data: articles } = useGetTopArticlesQuery(null);

  return (
    <section className={classes.MainArticles}>
      <h2 className={classes.Title}>Asosiy</h2>
      {/* {error?.error} */}
      {articles?.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </section>
  );
};
