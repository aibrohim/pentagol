import { FC, useState } from "react";

import { LoadmoreBtn } from "@/features/loadmore-btn";
import { NewsHeader } from "@/features/news-header";
import { LatestArticlesList } from "@/features/latest-articles-list";

import { useGetLatestArticlesQuery } from "../model/services";

import classes from "./latest-articles.module.scss";

interface LatestNewsProps {
  withPagination?: boolean;
}

export const LatestNews: FC<LatestNewsProps> = ({ withPagination = true }) => {
  const [page, setPage] = useState<number>(1);
  useGetLatestArticlesQuery(page);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <section className={classes.LatestNews}>
      <NewsHeader>So'nggi yangiliklar</NewsHeader>
      <LatestArticlesList page={page} />
      {withPagination && <LoadmoreBtn onClick={handleLoadMoreClick} />}
    </section>
  );
};
