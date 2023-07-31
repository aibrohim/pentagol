import { FC } from "react";

import Link from "next/link";

import { ArticleSchema } from "../../types";

import classes from "./top-article-list-item.module.scss";

interface TopArticleListItemProps {
  article: ArticleSchema;
}

export const TopArticleListItem: FC<TopArticleListItemProps> = ({
  article,
}) => {
  return (
    <article className={classes.MainArticle}>
      <Link className={classes.Link} href={`/article/${article.id}`}>
        <h3 className={classes.Title}>{article.title}</h3>
        <time className={classes.Time}>{article.publishedAt}</time>
      </Link>
    </article>
  );
};
