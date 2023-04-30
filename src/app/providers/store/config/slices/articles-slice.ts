import { createSlice } from "@reduxjs/toolkit";

import { getLatestNews } from "@/widgets/latest-news/model/services";
import { getTopArticles } from "@/widgets/top-articles/model/services/getTopArticles";
import { ArticlesSchema } from "../types/articles-schema";

const initialState: ArticlesSchema = {
  topNews: null,
  topNewsLoading: false,
  latestArticles: null,
  latestArticlesLoading: false,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    clearLatestArticles: (state) => {
      state.latestArticles = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopArticles.pending, (state) => {
        state.topNewsLoading = true;
      })
      .addCase(getTopArticles.fulfilled, (state, action) => {
        state.topNewsLoading = false;
        state.topNews = action.payload;
      })
      .addCase(getTopArticles.rejected, (state) => {
        state.topNewsLoading = false;
      });
    builder
      .addCase(getLatestNews.pending, (state) => {
        state.latestArticlesLoading = true;
      })
      .addCase(getLatestNews.fulfilled, (state, action) => {
        state.latestArticlesLoading = false;

        state.latestArticles = [
          ...action.payload,
          ...(state.latestArticles ?? []),
        ];
      })
      .addCase(getLatestNews.rejected, (state) => {
        state.latestArticlesLoading = false;
      });
  },
});

export const { clearLatestArticles } = articlesSlice.actions;

export const { reducer: articlesReducer } = articlesSlice;
