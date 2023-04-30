import {
  clearArticleDetails,
  clearLatestArticles,
} from "@/app/providers/store/config/slices";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Container } from "@/shared/ui/container";
import { FC, useEffect } from "react";
import { useParams } from "react-router";
import { selectArticleDetailsLoading } from "../model/selectors";
import { getArticleDetails } from "../model/services";
import { ArticleInfo } from "@/widgets/article-info";
import { LatestNews } from "@/widgets/latest-news";
import { getLatestNews } from "@/widgets/latest-news/model/services";

import classes from "./article-details.module.scss";

const ArticleDetails: FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getArticleDetails(+id));
      dispatch(getLatestNews(1));
    }
    return () => {
      dispatch(clearArticleDetails());
      dispatch(clearLatestArticles());
    };
  }, []);

  const loading = useAppSelector(selectArticleDetailsLoading);

  if (loading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  return (
    <Container>
      <div className={classes.TopContent}>
        <ArticleInfo className={classes.Info} />
      </div>

      <LatestNews />
    </Container>
  );
};

export default ArticleDetails;
