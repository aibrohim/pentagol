import { useTheme } from "@/shared/config/theme";
import { classNames } from "@/shared/lib/classNames";
import "./assets/styles/main.scss";
import { Header } from "@/widgets/header";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", {}, [theme])}>
      <Header />
      <div className="Page"></div>
    </div>
  );
};
