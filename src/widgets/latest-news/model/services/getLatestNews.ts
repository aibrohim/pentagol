import { createAsyncThunk } from "@reduxjs/toolkit";

import { ArticleSchema } from "@/entities/article";

function fetchLatestNews(page: number = 1) {
  return new Promise<{ data: ArticleSchema[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: 1,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "MBappe",
              publishedDate: "2022-12-12T12:34",
              description: "Lorem 123",
              body: "",
            },
            {
              id: 2,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "Messi",
              publishedDate: "2022-12-12T12:34",
              description: "",
              body: "",
            },
            {
              id: 3,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "Messi",
              publishedDate: "2022-12-12T12:34",
              description: "",
              body: "",
            },
            {
              id: 4,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "Messi",
              publishedDate: "2022-12-12T12:34",
              description: "",
              body: "",
            },
            {
              id: 1,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "MBappe",
              publishedDate: "2022-12-12T12:34",
              description: "Lorem 123",
              body: "",
            },
            {
              id: 2,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "Messi",
              publishedDate: "2022-12-12T12:34",
              description: "",
              body: "",
            },
            {
              id: 3,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "Messi",
              publishedDate: "2022-12-12T12:34",
              description: "",
              body: "",
            },
            {
              id: 4,
              img: "https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg?resize=1920%2C1440",
              title: "Messi",
              publishedDate: "2022-12-12T12:34",
              description: "",
              body: "",
            },
          ],
        }),
      500
    )
  );
}

export const getLatestNews = createAsyncThunk(
  "articles/getLatestNews",
  async (page: number = 1) => {
    const response = await fetchLatestNews(page);
    return response.data;
  }
);
