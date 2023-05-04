import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/config/data";

function fetchLatestNews(page: number = 1) {
  return axiosInstance.get(`article/list?page=${page - 1}&size=4`);
}

export const getLatestNews = createAsyncThunk(
  "articles/getLatestNews",
  async (page: number = 1) => {
    const response = await fetchLatestNews(page);

    return response.data;
  }
);
