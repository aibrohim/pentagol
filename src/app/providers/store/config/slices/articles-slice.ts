import { createSlice } from "@reduxjs/toolkit";

import { getLatestNews } from "@/widgets/latest-news/model/services";
import { ArticlesSchema } from "../types/articles-schema";
import { getArticleDetails } from "@/pages/article-details/model/services";

const initialState: ArticlesSchema = {
  latestArticles: null,
  latestArticlesLoading: false,
  articleDetails: null,
  articleDetailsLoading: false,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    clearLatestArticles: (state) => {
      state.latestArticles = null;
    },
    clearArticleDetails: (state) => {
      state.articleDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLatestNews.pending, (state) => {
        state.latestArticlesLoading = true;
      })
      .addCase(getLatestNews.fulfilled, (state, action) => {
        state.latestArticlesLoading = false;

        if (state.latestArticles) {
          state.latestArticles.content = [
            ...action.payload.content,
            ...(state.latestArticles?.content ?? []),
          ];
        } else {
          state.latestArticles = action.payload;
        }
      })
      .addCase(getLatestNews.rejected, (state) => {
        state.latestArticlesLoading = false;
      });
    builder
      .addCase(getArticleDetails.pending, (state) => {
        state.articleDetailsLoading = true;
      })
      .addCase(getArticleDetails.fulfilled, (state, action) => {
        state.articleDetailsLoading = false;

        state.articleDetails = action.payload;
      })
      .addCase(getArticleDetails.rejected, (state) => {
        state.articleDetailsLoading = false;
      });
  },
});

export const { clearLatestArticles, clearArticleDetails } =
  articlesSlice.actions;

export const { reducer: articlesReducer } = articlesSlice;
