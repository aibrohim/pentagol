import { FC } from "react";

import { ClubsScores } from "@/widgets/clubs-scores";
import { CurrentWeekMatches } from "@/widgets/current-week-matches";
import { LastWeekMatches } from "@/widgets/last-week-matches";
import { LatestNews } from "@/widgets/latest-news";
import { TopArticles } from "@/widgets/top-articles";

import { Container } from "@/shared/ui/container";

import classes from "./main.module.scss";

const Main: FC = () => {
  return (
    <Container>
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
