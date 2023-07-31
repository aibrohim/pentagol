import { wrapper } from "@/global/providers/store";

import { Main } from "@/pages-flat/main";

import { latestArticlesApi } from "@/widgets/latest-articles";
import { topArticlesApi } from "@/widgets/top-articles";

import { leaguesApi } from "@/features/leagues";

export default function App() {
  return <Main />;
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
