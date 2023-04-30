import { FC } from "react";
import classes from "./article-info.module.scss";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectArticleDetails } from "../model/selectors";
import { normalizeDate } from "@/shared/lib/normalize-date";

interface ArticleInfoProps {}

export const ArticleInfo: FC<ArticleInfoProps> = ({}) => {
  const articleDetails = useAppSelector(selectArticleDetails);

  if (!articleDetails) return null;
  return (
    <section className={classes.ArticleInfo}>
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
