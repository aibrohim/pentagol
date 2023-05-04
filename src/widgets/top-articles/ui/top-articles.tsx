import { FC } from "react";

import { useGetTopArticlesQuery } from "@/entities/article";
import { TopArticle } from "@/entities/top-article";

import { classNames } from "@/shared/lib/classNames";

import classes from "./top-articles.module.scss";

interface TopArticlesProps {
  className?: string;
}

export const TopArticles: FC<TopArticlesProps> = ({ className }) => {
  const { data: articles, isLoading } = useGetTopArticlesQuery(null);

  return (
    <ul className={classNames(classes.TopArticles, {}, [className])}>
      {isLoading && <p>Loading...</p>}
      {articles?.map((article) => (
        <li className={classes.ArticleWrapper} key={article.id}>
          <TopArticle className={classes.Article} article={article} />
        </li>
      ))}
      {!articles?.length && <p>Yangiliklar topilmadi</p>}
    </ul>
  );
};
