import { Leagues } from "@/features/leagues";
import { MatchesResults } from "@/features/matches-results";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FC } from "react";
import { getLastWeekMatches } from "../model/services";
import classes from "./last-week-matches.module.scss";
import { useSelector } from "react-redux";
import { selectLastWeekMatches } from "../model/selectors/selectLastWeekMatches";
import { selectLastWeekMatchesLoading } from "../model/selectors/selectLastWeekMatchesLoading";

interface LastWeekMatchesProps {}

export const LastWeekMatches: FC<LastWeekMatchesProps> = () => {
  const dispatch = useAppDispatch();

  const matches = useSelector(selectLastWeekMatches);
  const matchesLoading = useSelector(selectLastWeekMatchesLoading);

  return (
    <section className={classes.LastWeekMatches}>
      <Leagues onLeagueSelected={(id) => dispatch(getLastWeekMatches(id))} />
      {matchesLoading ? (
        <p>Loading...</p>
      ) : matches ? (
        <MatchesResults results={matches} />
      ) : (
        <p>Iltimos, ligani tanlang</p>
      )}
    </section>
  );
};
