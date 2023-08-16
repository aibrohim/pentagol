import { FC } from "react";
import { LeagueSchema } from "@/entities/league";

import { BtnTheme, Button } from "@/shared/ui/button";
import { classNames } from "@/shared/lib/classNames";

import classes from "./league.module.scss";

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
          src={"/img/barcelona.png"}
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
