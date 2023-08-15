import { FC, useEffect, useState } from "react";

import { Leagues, useGetLeaguesQuery } from "@/features/leagues";

import { Spinner } from "@/shared/ui/spinner";

import { MatchesResults } from "./matches-results";
import { useLazyGetWeekMatchesQuery } from "../hooks/useLazyGetWeekMatchesQuery";
import { WeekType } from "../enum/week-type";

import classes from "./week-matches.module.scss";

interface WeekMatchesProps {
  weekType: WeekType;
}

export const WeekMatches: FC<WeekMatchesProps> = ({ weekType }) => {
  const { data: leagues } = useGetLeaguesQuery();

  const [selectedLeague, setSelectedLeague] = useState<number | undefined>(
    leagues?.[0]?.id
  );

  const handleLeagueSelect = (leagueId: number) => {
    setSelectedLeague(leagueId);
  };

  const [getMatches, { data: matches, isLoading }] =
    useLazyGetWeekMatchesQuery();

  useEffect(() => {
    if (selectedLeague) {
      getMatches({
        week: weekType,
        leagueId: selectedLeague,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLeague, weekType]);

  return (
    <section className={classes.WeekMatches}>
      <Leagues
        selectedLeague={selectedLeague}
        onLeagueSelected={handleLeagueSelect}
      />
      {isLoading && <Spinner />}
      {!selectedLeague && <p>Iltimos, ligani tanlang!</p>}
      {matches && <MatchesResults results={matches} />}
    </section>
  );
};
