import { FC } from "react";
import { Link } from "react-router-dom";
import { ArticleSchema } from "@/entities/article";
import { classNames } from "@/shared/lib/classNames";
import { normalizeDate } from "@/shared/lib/normalize-date";
import classes from "./top-article.module.scss";

interface TopArticleProps {
  className?: string;
  article: ArticleSchema;
}

export const TopArticle: FC<TopArticleProps> = ({ article, className }) => {
  return (
    <div className={classNames(classes.TopArticle, {}, [className])}>
      <Link className={classes.Link} to={`/article/${article.id}`}>
        <div className={classes.Content}>
          <h3 className={classes.Title}>{article.title}</h3>
          <time className={classes.PublishedDate}>
            {normalizeDate(article.publishedDate)}
          </time>
        </div>
      </Link>
      <img className={classes.Img} src={article.img} alt={article.img} />
    </div>
  );
};
