import { ArticleSchema } from "@/entities/article";

export interface ArticlesSchema {
  latestArticles: {
    content: ArticleSchema[];
    totalPages: number;
  } | null;
  latestArticlesLoading: boolean;
  articleDetails: ArticleSchema | null;
  articleDetailsLoading: boolean;
}
