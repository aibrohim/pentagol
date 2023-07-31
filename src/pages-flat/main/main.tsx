import { FC } from "react";

import { ClubsScores } from "@/widgets/clubs-scores";
import { LatestArticles } from "@/widgets/latest-articles";
import { TopArticlesGrid } from "@/widgets/top-articles";

import { Container } from "@/shared/ui/container";

import classes from "./main.module.scss";

export const Main: FC = () => {
  return (
    <Container className={classes.Index}>
      <div className={classes.TopArticlesScoresWrapper}>
        <TopArticlesGrid className={classes.TopArticles} />
        <ClubsScores />
      </div>
      <LatestArticles />
    </Container>
  );
};
