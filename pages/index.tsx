import { wrapper } from "@/app/providers/store";
import { articlesApi } from "@/entities/article";
import { leaguesApi } from "@/features/leagues";
import { Main } from "@/pages/main";
import { latestArticlesApi } from "@/widgets/latest-articles/model/services";

export default function App() {
  return <Main />;
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

  return {
    props: {},
  };
});
