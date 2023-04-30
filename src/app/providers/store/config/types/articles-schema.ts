import { ArticleSchema } from "@/entities/article";

export interface ArticlesSchema {
  topNews: ArticleSchema[] | null;
  topNewsLoading: boolean;
}
