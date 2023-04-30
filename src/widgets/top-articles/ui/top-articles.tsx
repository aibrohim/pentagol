import { TopArticle } from "@/entities/top-article";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { classNames } from "@/shared/lib/classNames";
import { FC } from "react";
import {
  selectTopArticles,
  selectTopArticlesLoading,
} from "../model/selectors";
import classes from "./top-articles.module.scss";

interface TopArticlesProps {
  className?: string;
}

export const TopArticles: FC<TopArticlesProps> = ({ className }) => {
  const articles = useAppSelector(selectTopArticles);
  const articlesLoading = useAppSelector(selectTopArticlesLoading);

  return (
    <ul className={classNames(classes.TopArticles, {}, [className])}>
      {articlesLoading && <p>Loading...</p>}
      {articles?.map((article) => (
        <li className={classes.ArticleWrapper} key={article.id}>
          <TopArticle className={classes.Article} article={article} />
        </li>
      ))}
      {!articles?.length && <p>Yangiliklar topilmadi</p>}
    </ul>
  );
};
