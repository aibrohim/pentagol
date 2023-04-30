import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { normalizeDate } from "@/shared/lib/normalize-date";
import { FC } from "react";
import { selectArticleDetails } from "../model/selectors";
import classes from "./article-info.module.scss";
import { classNames } from "@/shared/lib/classNames";

interface ArticleInfoProps {
  className?: string;
}

export const ArticleInfo: FC<ArticleInfoProps> = ({ className }) => {
  const articleDetails = useAppSelector(selectArticleDetails);

  if (!articleDetails) return null;
  return (
    <section className={classNames(classes.ArticleInfo, {}, [className])}>
      <time className={classes.Time}>
        {normalizeDate(articleDetails.publishedDate)}
      </time>
      <h1 className={classes.Title}>{articleDetails.title}</h1>
      <p className={classes.Description}>{articleDetails.description}</p>

      <img
        className={classes.Img}
        src={articleDetails.img}
        alt={articleDetails.title}
      />

      <p className={classes.Body}>{articleDetails.body}</p>
    </section>
  );
};
