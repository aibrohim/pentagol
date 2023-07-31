"use client";

import { FC, useState } from "react";

import { LoadmoreBtn } from "@/features/loadmore-btn";
import { ArticlesHeader } from "@/features/articles-header";
import { LatestArticlesList } from "@/features/latest-articles-list";

import { useGetLatestArticlesQuery } from "../model/services";

import classes from "./latest-articles.module.scss";

interface LatestArticlesProps {
  withPagination?: boolean;
}

export const LatestArticles: FC<LatestArticlesProps> = ({
  withPagination = true,
}) => {
  const [page, setPage] = useState<number>(1);
  useGetLatestArticlesQuery(page);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <section className={classes.LatestArticles}>
      <ArticlesHeader>So&apos;nggi yangiliklar</ArticlesHeader>
      <LatestArticlesList page={page} />
      {withPagination && <LoadmoreBtn onClick={handleLoadMoreClick} />}
    </section>
  );
};
