import { FC, HTMLAttributes } from "react";
import classes from "./main-article.module.scss";
import { ArticleSchema } from "@/entities/article";
import { Link } from "react-router-dom";

interface MainArticleProps {
  article: ArticleSchema;
}

export const MainArticle: FC<MainArticleProps> = ({ article }) => {
  return (
    <article className={classes.MainArticle}>
      <Link className={classes.Link} to={`/article/${article.id}`}>
        <h3 className={classes.Title}>{article.title}</h3>
        <time className={classes.Time}>{article.publishedDate}</time>
      </Link>
    </article>
  );
};
