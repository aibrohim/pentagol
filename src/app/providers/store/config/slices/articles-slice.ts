import { createSlice } from "@reduxjs/toolkit";

import { getArticleDetails } from "@/pages/article-details/model/services";
import { ArticlesSchema } from "../types/articles-schema";

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
