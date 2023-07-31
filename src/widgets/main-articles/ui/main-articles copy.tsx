import { FC } from "react";

import { Article } from "@/entities/article";

import classes from "./main-articles.module.scss";
import { useGetTopArticlesQuery } from "@/widgets/top-articles";

export const MainArticles: FC = () => {
  const { data: articles } = useGetTopArticlesQuery();

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
