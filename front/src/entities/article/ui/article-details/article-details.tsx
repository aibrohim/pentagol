import { useRouter } from "next/router";
import { FC } from "react";

import { classNames } from "@/shared/lib/classNames";
import { normalizeDate } from "@/shared/lib/normalize-date";

import { useGetArticleDetailsQuery } from "../../model/services";
import classes from "./article-details.module.scss";

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: articleDetails } = useGetArticleDetailsQuery(id ? +id : null);

  return (
    <section className={classNames(classes.ArticleDetails, {}, [className])}>
      {articleDetails && (
        <>
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
            width={500}
            height={600}
            alt={articleDetails.title}
          />

          <p className={classes.Body}>{articleDetails.body}</p>
        </>
      )}
    </section>
  );
};
