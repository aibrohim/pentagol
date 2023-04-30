import { useRoutes } from "react-router";

import { ArticleDetails } from "@/pages/article-details";
import { Main } from "@/pages/main";

export const useConfigureRoutes = () =>
  useRoutes([
    { path: "/", element: <Main /> },
    { path: "/article/:id", element: <ArticleDetails /> },
  ]);
