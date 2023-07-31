import { ChangeEvent, FC, HTMLAttributes } from "react";

import { ClubsRatingTable } from "@/features/clubs-rating-table";
import { useGetLeaguesQuery } from "@/features/leagues";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Select } from "@/shared/ui/select";

import { selectScores, selectScoresLoading } from "../model/selectors";
import { getScoresByLeague } from "../model/services/getScoresByLeague";

import classes from "./clubs-scores.module.scss";

type ClubsScoresProps = HTMLAttributes<HTMLElement>;

export const ClubsScores: FC = ({ ...props }: ClubsScoresProps) => {
  const dispatch = useAppDispatch();

  const { data: leagues } = useGetLeaguesQuery(null);
  const scores = useAppSelector(selectScores);
  const scoresLoading = useAppSelector(selectScoresLoading);

  const handleLeagueSelected = (evt: ChangeEvent<HTMLSelectElement>) => {
    const league = +evt.target.value;
    dispatch(getScoresByLeague(league));
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
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
