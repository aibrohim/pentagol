import { useTheme } from "@/shared/config/theme";
import { classNames } from "@/shared/lib/classNames";
import "./assets/styles/main.scss";
import { Header } from "@/widgets/header";
import { MatchResult, MatchResultSchema } from "@/entities/match-result";

import Barsa from "@/shared/assets/img/barcelona.png";
import Liver from "@/shared/assets/img/liverpool.jpeg";

const sampleMatchInfo: MatchResultSchema[] = [
  {
    matchId: 1,
    matchDateTime: "2022-12-12T11:23",
    clubA: { clubId: 12, name: "Barcelona", img: Barsa },
    clubAScore: 12,
    clubB: { clubId: 13, name: "Real", img: Liver },
    clubBScore: 13,
  },
  {
    matchId: 1,
    matchDateTime: "2022-12-12T11:23",
    clubA: { clubId: 12, name: "Barcelona", img: Barsa },
    clubAScore: 12,
    clubB: { clubId: 13, name: "Real", img: Liver },
    clubBScore: 13,
  },
];

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", {}, [theme])}>
      <Header />
      <div className="Page">
        <MatchResult matchInfo={sampleMatchInfo[0]} />
      </div>
    </div>
  );
};
