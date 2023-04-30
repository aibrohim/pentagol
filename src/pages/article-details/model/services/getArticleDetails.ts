import { createAsyncThunk } from "@reduxjs/toolkit";

import { ArticleSchema } from "@/entities/article";

function fetchArticleDetails(id: number) {
  return new Promise<{ data: ArticleSchema }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            id: 4,
            img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
            title: "Messi",
            publishedDate: "2022-12-12T12:34",
            description: "",
            body: "",
          },
        }),
      500
    )
  );
}

export const getArticleDetails = createAsyncThunk(
  "articles/getArticleDetails",
  async (id: number) => {
    const response = await fetchArticleDetails(id);
    return response.data;
  }
);
