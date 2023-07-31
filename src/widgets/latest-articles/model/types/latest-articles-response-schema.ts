import { ArticleSchema } from "@/entities/article";

export interface LatestArticlesResponseSchema {
  count: number;
  articles: ArticleSchema[];
}
