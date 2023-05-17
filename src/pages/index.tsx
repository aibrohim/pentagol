import { wrapper } from "@/global/providers/store";

import { ClubsScores } from "@/widgets/clubs-scores";
import { LatestNews } from "@/widgets/latest-articles";
import { TopArticles } from "@/widgets/top-articles";
import { CurrentWeekMatches } from "@/widgets/current-week-matches";
import { LastWeekMatches } from "@/widgets/last-week-matches";

import { latestArticlesApi } from "@/widgets/latest-articles";

import { leaguesApi } from "@/features/leagues";

import { articlesApi } from "@/entities/article";

import { Container } from "@/shared/ui/container";

import classes from "./index.module.scss";

export default function App() {
  return (
    <Container className={classes.Index}>
      <CurrentWeekMatches />
      <LastWeekMatches />

      <div className={classes.TopArticlesScoresWrapper}>
        <TopArticles className={classes.TopArticles} />
        <ClubsScores />
      </div>
      <LatestNews />
    </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(leaguesApi.endpoints.getLeagues.initiate(null));
  store.dispatch(articlesApi.endpoints.getTopArticles.initiate(null));
  store.dispatch(latestArticlesApi.endpoints.getLatestArticles.initiate(1));

  await Promise.all([
    ...store.dispatch(leaguesApi.util.getRunningQueriesThunk()),
    ...store.dispatch(articlesApi.util.getRunningQueriesThunk()),
    ...store.dispatch(latestArticlesApi.util.getRunningQueriesThunk()),
  ]);

  leaguesApi.endpoints.getLeagues.select(null);

  return {
    props: {},
  };
});
