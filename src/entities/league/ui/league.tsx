import { FC } from "react";
import classes from "./league.module.scss";
import { LeagueSchema } from "../model/types";
import { BtnTheme, Button } from "@/shared/ui/button";
import { classNames } from "@/shared/lib/classNames";

import Barsa from "@/shared/assets/img/barcelona.png";

interface LeagueProps {
  league: LeagueSchema;
  active?: boolean;
  onClick?: (id: number) => void;
}

export const League: FC<LeagueProps> = ({
  league,
  active = false,
  onClick,
}) => {
  const handleLeagueClick = () => {
    if (onClick) {
      onClick(league.id);
    }
  };

  return (
    <Button
      className={classNames(classes.League, { [classes.Active]: active })}
      theme={BtnTheme.PRIMARY}
      icon={
        <img
          className={classes.Img}
          src={Barsa}
          alt={league.name}
          width={28}
          height={28}
        />
      }
      onClick={handleLeagueClick}
    >
      {league.name}
    </Button>
  );
};
