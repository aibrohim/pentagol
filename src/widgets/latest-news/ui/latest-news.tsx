import { LatestArticlesList } from "@/features/latest-articles-list";
import { LoadmoreBtn } from "@/features/loadmore-btn";
import { NewsHeader } from "@/features/news-header";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FC, useState } from "react";
import { getLatestNews } from "../model/services";
import classes from "./latest-news.module.scss";

interface LatestNewsProps {
  withPagination?: boolean;
}

export const LatestNews: FC<LatestNewsProps> = ({ withPagination = true }) => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleLoadMoreClick = () => {
    const nextPage = page + 1;

    setPage(nextPage);
    dispatch(getLatestNews(nextPage));
  };

  return (
    <section className={classes.LatestNews}>
      <NewsHeader>So'nggi yangiliklar</NewsHeader>
      <LatestArticlesList />
      {withPagination && <LoadmoreBtn onClick={handleLoadMoreClick} />}
    </section>
  );
};
