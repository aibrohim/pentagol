import { LatestArticlesList } from "@/features/latest-articles-list";
import { LoadmoreBtn } from "@/features/loadmore-btn";
import { NewsHeader } from "@/features/news-header";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FC, useState } from "react";
import { getLatestNews } from "../model/services";
import classes from "./latest-news.module.scss";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectLatestNews } from "@/features/latest-articles-list/model/selectors";

interface LatestNewsProps {
  withPagination?: boolean;
}

export const LatestNews: FC<LatestNewsProps> = ({ withPagination = true }) => {
  const latestNews = useAppSelector(selectLatestNews);
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
      {withPagination && page < (latestNews?.totalPages ?? 1000) && (
        <LoadmoreBtn onClick={handleLoadMoreClick} />
      )}
    </section>
  );
};
