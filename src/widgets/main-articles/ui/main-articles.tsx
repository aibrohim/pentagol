import { FC } from "react";
import classes from "./main-articles.module.scss";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import {
  selectTopArticles,
  selectTopArticlesLoading,
} from "../model/selectors";
import { MainArticle } from "@/entities/main-article";

interface MainArticlesProps {}

export const MainArticles: FC<MainArticlesProps> = () => {
  const articles = useAppSelector(selectTopArticles);
  const articlesLoading = useAppSelector(selectTopArticlesLoading);

  return (
    <section className={classes.MainArticles}>
      <h2 className={classes.Title}>Asosiy</h2>

      {articlesLoading && <p>Loading...</p>}
      {articles?.map((article) => (
        <MainArticle article={article} />
      ))}
    </section>
  );
};
