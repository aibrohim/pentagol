import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/config/axios";

function fetchArticles() {
  return axiosInstance.get("article/list?page=0&size=7");
}

export const getTopArticles = createAsyncThunk(
  "counter/fetchArticles",
  async () => {
    const response = await fetchArticles();
    return response.data.content;
  }
);
