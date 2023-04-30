import { Container } from "@/shared/ui/container";
import { ClubsScores } from "@/widgets/clubs-scores";
import { CurrentWeekMatches } from "@/widgets/current-week-matches";
import { LastWeekMatches } from "@/widgets/last-week-matches";
import { LatestNews } from "@/widgets/latest-news";
import { TopArticles } from "@/widgets/top-articles";
import { FC, useEffect } from "react";
import classes from "./main.module.scss";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getLatestNews } from "@/widgets/latest-news/model/services";
import { clearLatestArticles } from "@/app/providers/store/config/slices";

const Main: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLatestNews());
    return () => {
      dispatch(clearLatestArticles());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>Main Page</h1>
      <CurrentWeekMatches />
      <LastWeekMatches />

      <div className={classes.TopArticlesScoresWrapper}>
        <TopArticles className={classes.TopArticles} />
        <ClubsScores />
      </div>
      <LatestNews />
    </Container>
  );
};

export default Main;
