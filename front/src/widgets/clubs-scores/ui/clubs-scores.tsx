import { ChangeEvent, FC, HTMLAttributes, useEffect } from "react";

import { useGetLeaguesQuery } from "@/features/leagues";

import { Select } from "@/shared/ui/select";

import { useLazyGetScoresByLeagueQuery } from "../model/services/scoresByLeagueApi";
import { ClubsRatingTable } from "./clubs-rating-table";
import classes from "./clubs-scores.module.scss";

type ClubsScoresProps = HTMLAttributes<HTMLElement>;

export const ClubsScores: FC = ({ ...props }: ClubsScoresProps) => {
  const { data: leagues } = useGetLeaguesQuery();
  const [getScoresByLeague, { data: scores, isLoading: scoresLoading }] =
    useLazyGetScoresByLeagueQuery();

  const handleLeagueSelected = (evt: ChangeEvent<HTMLSelectElement>) => {
    getScoresByLeague(+evt.target.value);
  };

  useEffect(() => {
    if (leagues && leagues[0]) {
      getScoresByLeague(leagues[0]?.id);
    }
  }, [getScoresByLeague, leagues]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section className={classes.ClubsScores} {...props}>
      <h2 className={classes.Title}>Jadval</h2>
      <Select
        className={classes.LeagueSelect}
        defaultValue={0}
        options={[
          ...(leagues?.map((league) => ({
            value: league.id,
            label: league.name,
          })) ?? []),
        ]}
        onChange={handleLeagueSelected}
      />
      {!scoresLoading && <ClubsRatingTable clubs={scores ?? []} />}
      {scoresLoading && <p>Loading...</p>}
    </section>
  );
};
