import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/config/data";

function fetchArticleDetails(id: number) {
  return axiosInstance.get("article/" + id);
}

export const getArticleDetails = createAsyncThunk(
  "articles/getArticleDetails",
  async (id: number) => {
    const response = await fetchArticleDetails(id);
    return response.data;
  }
);
