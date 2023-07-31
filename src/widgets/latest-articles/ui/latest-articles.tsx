import { FC, useState } from "react";

import { ArticlesHeader } from "@/features/articles-header";
import { Loadmore } from "@/features/loadmore";

import { LatestArticlesList } from "./List";
import { articlesLimit } from "../config/articlesLimit";
import { useGetLatestArticlesQuery } from "../model/services";
import classes from "./latest-articles.module.scss";

interface LatestArticlesProps {
  withPagination?: boolean;
}

export const LatestArticles: FC<LatestArticlesProps> = ({
  withPagination = true,
}) => {
  const [page, setPage] = useState<number>(1);

  const { data: latestArticles } = useGetLatestArticlesQuery(page);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <section className={classes.LatestArticles}>
      <ArticlesHeader>So&apos;nggi yangiliklar</ArticlesHeader>
      <LatestArticlesList page={page} />
      {withPagination && (
        <Loadmore
          dataCount={latestArticles?.count || 0}
          page={page}
          limit={articlesLimit}
          onClick={handleLoadMoreClick}
        />
      )}
    </section>
  );
};
