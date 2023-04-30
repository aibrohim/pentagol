import { useTheme } from "@/shared/config/theme";
import { classNames } from "@/shared/lib/classNames";
import { Header } from "@/widgets/header";
import "./assets/styles/main.scss";

import { getLeagues } from "@/features/leagues/model/services";
import { Main } from "@/pages/main";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useEffect } from "react";

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  return (
    <div className={classNames("App", {}, [theme])}>
      <Header />
      <div className="Page">
        <Main />
      </div>
    </div>
  );
};
