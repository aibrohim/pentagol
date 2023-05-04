import { FC } from "react";

import Link from "next/link";

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
      <Link className={classes.Link} href={`/article/${article.id}`}>
        <div className={classes.Content}>
          <h3 className={classes.Title}>{article.title}</h3>
          <time className={classes.publishedAt}>
            {normalizeDate(article.publishedAt)}
          </time>
        </div>
      </Link>
      <img
        className={classes.Img}
        src="https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg"
        alt={article.img}
      />
    </div>
  );
};
