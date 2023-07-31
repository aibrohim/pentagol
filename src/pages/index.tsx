import { wrapper } from "@/global/providers/store";

import { ClubsScores } from "@/widgets/clubs-scores";
import { TopArticles, topArticlesApi } from "@/widgets/top-articles";
import { LatestArticles, latestArticlesApi } from "@/widgets/latest-articles";

import { leaguesApi } from "@/features/leagues";

import { Container } from "@/shared/ui/container";

import classes from "./index.module.scss";

export default function App() {
  return (
    <Container className={classes.Index}>
      {/* <CurrentWeekMatches /> 
      <LastWeekMatches /> */}
      <div className={classes.TopArticlesScoresWrapper}>
        <TopArticles className={classes.TopArticles} />
        <ClubsScores />
      </div>
      <LatestArticles />
    </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(leaguesApi.endpoints.getLeagues.initiate());
  store.dispatch(topArticlesApi.endpoints.getTopArticles.initiate());
  store.dispatch(latestArticlesApi.endpoints.getLatestArticles.initiate(1));

  await Promise.all([
    ...store.dispatch(leaguesApi.util.getRunningQueriesThunk()),
    ...store.dispatch(topArticlesApi.util.getRunningQueriesThunk()),
    ...store.dispatch(latestArticlesApi.util.getRunningQueriesThunk()),
  ]);

  leaguesApi.endpoints.getLeagues.select();

  return {
    props: {},
  };
});
