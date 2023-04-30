import { ArticleSchema } from "@/entities/article";

export interface ArticlesSchema {
  topNews: ArticleSchema[] | null;
  topNewsLoading: boolean;
  latestArticles: ArticleSchema[] | null;
  latestArticlesLoading: boolean;
  articleDetails: ArticleSchema | null;
  articleDetailsLoading: boolean;
}
