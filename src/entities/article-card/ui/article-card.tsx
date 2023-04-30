import { FC } from "react";
import classes from "./article-card.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { ArticleSchema } from "@/entities/article/model/types";
import { normalizeDate } from "@/shared/lib/normalize-date";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  className?: string;
  article: ArticleSchema;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article, className }) => {
  return (
    <article className={classNames(classes.ArticleCard, {}, [className])}>
      <Link className={classes.Link} to={`/article/${article.id}`}>
        <img className={classes.Img} src={article.img} alt={article.title} />
        <h3 className={classes.Title}>{article.title}</h3>
        <p className={classes.Description}>{article.description}</p>
        <time className={classes.PublishedDate}>
          {normalizeDate(article.publishedDate)}
        </time>
      </Link>
    </article>
  );
};
