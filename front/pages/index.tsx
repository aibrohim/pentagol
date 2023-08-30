import { wrapper } from "@/global/providers/store";

import { Main } from "@/pages-flat/main";

import { latestArticlesApi } from "@/widgets/latest-articles";
import { topArticlesApi } from "@/widgets/top-articles";
import { scoresByLeagueApi } from "@/widgets/clubs-scores";

import { leaguesApi } from "@/features/leagues";

export default function App() {
  return <Main />;
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const [{ data: leagues }] = await Promise.all([
      store.dispatch(leaguesApi.endpoints.getLeagues.initiate()),
      store.dispatch(topArticlesApi.endpoints.getTopArticles.initiate()),
      store.dispatch(latestArticlesApi.endpoints.getLatestArticles.initiate(1)),
    ]);

    if (leagues?.[0]) {
      await store.dispatch(
        scoresByLeagueApi.endpoints.getScoresByLeague.initiate(leagues[0].id)
      );
    }

    return {
      props: {},
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
});
