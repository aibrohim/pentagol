import { ChangeEvent, ChangeEventHandler, FC, HTMLAttributes } from "react";
import classes from "./clubs-scores.module.scss";
import { Select } from "@/shared/ui/select";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getLeagues } from "@/features/leagues/model/selectors";
import { ClubsRatingTable } from "@/features/clubs-rating-table";

import Barsa from "@/shared/assets/img/barcelona.png";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getScoresByLeague } from "../model/services/getScoresByLeague";
import { selectScores, selectScoresLoading } from "../model/selectors";

interface ClubsScoresProps extends HTMLAttributes<HTMLElement> {}

export const ClubsScores: FC = ({ ...props }: ClubsScoresProps) => {
  const dispatch = useAppDispatch();

  const leagues = useAppSelector(getLeagues);
  const scores = useAppSelector(selectScores);
  const scoresLoading = useAppSelector(selectScoresLoading);

  const handleLeagueSelected = (evt: ChangeEvent<HTMLSelectElement>) => {
    const league = +evt.target.value;
    dispatch(getScoresByLeague(league));
  };

  return (
    <section className={classes.ClubsScores} {...props}>
      <h2 className={classes.Title}>Jadval</h2>
      <Select
        className={classes.LeagueSelect}
        defaultValue={0}
        options={[
          { value: 0, label: "Ligani tanlang", disabled: true },
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
