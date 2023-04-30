import { TopArticle } from "@/entities/top-article";
import { Container } from "@/shared/ui/container";
import { ClubsScores } from "@/widgets/clubs-scores";
import { CurrentWeekMatches } from "@/widgets/current-week-matches";
import { LastWeekMatches } from "@/widgets/last-week-matches";
import { TopArticles } from "@/widgets/top-articles";
import { FC } from "react";
import classes from "./main.module.scss";

const Main: FC = () => {
  return (
    <Container>
      <h1>Main Page</h1>
      <CurrentWeekMatches />
      <LastWeekMatches />

      <div className={classes.TopArticlesScoresWrapper}>
        <TopArticles className={classes.TopArticles} />
        <ClubsScores />
      </div>
    </Container>
  );
};

export default Main;
