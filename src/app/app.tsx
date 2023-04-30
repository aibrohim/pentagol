import { Suspense, useEffect } from "react";

import { Main } from "@/pages/main";

import { Header } from "@/widgets/header";

import { getLeagues } from "@/features/leagues/model/services";
import { getTopArticles } from "@/widgets/top-articles/model/services/getTopArticles";

import { useTheme } from "@/shared/config/theme";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

import { classNames } from "@/shared/lib/classNames";

import "./assets/styles/main.scss";
import { RoutesProvider } from "./providers/router";

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLeagues());
    dispatch(getTopArticles());
  }, []);

  return (
    <div className={classNames("App", {}, [theme])}>
      <Header />
      <div className="Page">
        <Suspense fallback="Loading...">
          <RoutesProvider />
        </Suspense>
      </div>
    </div>
  );
};
