import { FC } from "react";
import Link from "next/link";

import { normalizeDate } from "@/shared/lib/normalize-date";
import { classNames } from "@/shared/lib/classNames";

import { ArticleSchema } from "../../types";

import classes from "./article-card.module.scss";

interface ArticleCardProps {
  className?: string;
  article: ArticleSchema;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article, className }) => {
  return (
    <article className={classNames(classes.ArticleCard, {}, [className])}>
      <Link className={classes.Link} href={`/article/${article.id}`}>
        <img
          className={classes.Img}
          src={
            "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg"
          }
          alt={article.title}
        />
        <h3 className={classes.Title}>{article.title}</h3>
        <p className={classes.Description}>{article.description}</p>
        <time className={classes.publishedAt}>
          {normalizeDate(article.publishedAt)}
        </time>
      </Link>
    </article>
  );
};
