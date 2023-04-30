import { createSlice } from "@reduxjs/toolkit";

import { ArticlesSchema } from "../types/articles-schema";
import { getTopArticles } from "@/widgets/top-articles/model/services/getTopArticles";

const initialState: ArticlesSchema = {
  topNews: null,
  topNewsLoading: false,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {},
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
  },
});

export const {} = articlesSlice.actions;

export const { reducer: articlesReducer } = articlesSlice;
