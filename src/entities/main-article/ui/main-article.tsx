import { FC } from "react";

import Link from "next/link";

import { ArticleSchema } from "@/entities/article";

import classes from "./main-article.module.scss";

interface MainArticleProps {
  article: ArticleSchema;
}

export const MainArticle: FC<MainArticleProps> = ({ article }) => {
  return (
    <article className={classes.MainArticle}>
      <Link className={classes.Link} href={`/article/${article.id}`}>
        <h3 className={classes.Title}>{article.title}</h3>
        <time className={classes.Time}>{article.publishedAt}</time>
      </Link>
    </article>
  );
};
