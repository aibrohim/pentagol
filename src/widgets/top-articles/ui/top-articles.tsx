"use client";

import { FC } from "react";

import { TopArticle } from "@/entities/article";

import { classNames } from "@/shared/lib/classNames";

import { useGetTopArticlesQuery } from "../model/services/topArticlesApi";

import classes from "./top-articles.module.scss";

interface TopArticlesProps {
  className?: string;
}

export const TopArticles: FC<TopArticlesProps> = ({ className }) => {
  const { data: articles, isLoading } = useGetTopArticlesQuery();

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
