import { FC, useEffect, useState } from "react";

import { League } from "@/entities/league";
import { classNames } from "@/shared/lib/classNames";

import { useGetLeaguesQuery } from "../model";

import classes from "./leagues.module.scss";

interface LeaguesProps {
  className?: string;
  selectedLeague?: number;
  onLeagueSelected?: (id: number) => void;
}

export const Leagues: FC<LeaguesProps> = ({
  className,
  selectedLeague,
  onLeagueSelected,
}) => {
  const { data: leagues, error } = useGetLeaguesQuery(null);

  const [activeLeague, setActiveLeague] = useState<number | undefined>();

  const handleLeagueSelect = (id: number) => {
    setActiveLeague(id);
  };

  useEffect(() => {
    if (leagues) {
      setActiveLeague(leagues[0]?.id);
    }
  }, [leagues]);

  useEffect(() => {
    setActiveLeague(selectedLeague);
  }, [selectedLeague]);

  useEffect(() => {
    if (onLeagueSelected && activeLeague) {
      onLeagueSelected(activeLeague);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLeague]);

  return (
    <div className={classNames(classes.Leagues, {}, [className])}>
      <span>{error?.error}</span>
      {leagues?.map((league) => (
        <League
          key={league.id}
          league={league}
          active={league.id === activeLeague}
          onClick={handleLeagueSelect}
        />
      ))}
    </div>
  );
};
