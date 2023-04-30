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
        {normalizeDate(articleDetails.publishedAt)}
      </time>
      <h1 className={classes.Title}>{articleDetails.title}</h1>
      <p className={classes.Description}>{articleDetails.description}</p>

      <img
        className={classes.Img}
        src={
          "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg"
        }
        alt={articleDetails.title}
      />

      <p className={classes.Body}>{articleDetails.body}</p>
    </section>
  );
};
