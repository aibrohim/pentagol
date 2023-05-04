import { wrapper } from "@/app/providers/store";
import { articlesApi } from "@/entities/article";
import { leaguesApi } from "@/features/leagues";
import { Main } from "@/pages/main";

export default function App() {
  return <Main />;
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(leaguesApi.endpoints.getLeagues.initiate(null));
  store.dispatch(articlesApi.endpoints.getTopArticles.initiate(null));

  await Promise.all(store.dispatch(leaguesApi.util.getRunningQueriesThunk()));

  return {
    props: {},
  };
});
