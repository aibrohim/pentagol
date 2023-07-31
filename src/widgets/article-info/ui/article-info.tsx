import { useRouter } from "next/router";
import { FC } from "react";
import { useGetArticleInfoQuery } from "../model/services";

import { classNames } from "@/shared/lib/classNames";
import { normalizeDate } from "@/shared/lib/normalize-date";

import classes from "./article-info.module.scss";

interface ArticleInfoProps {
  className?: string;
}

export const ArticleInfo: FC<ArticleInfoProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: articleDetails } = useGetArticleInfoQuery(id ? +id : null);

  return (
    <section className={classNames(classes.ArticleInfo, {}, [className])}>
      {/* {error?.status === 404 && <h1>Not Found</h1>}
      {error?.error && <h1>{error.error}</h1>} */}

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
