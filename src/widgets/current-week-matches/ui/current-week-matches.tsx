import { Leagues } from "@/features/leagues";
import { MatchesResults } from "@/features/matches-results";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FC } from "react";
import { getCurrentWeekMatches } from "../model/services";
import classes from "./current-week-matches.module.scss";
import { useSelector } from "react-redux";
import {
  selectCurrentWeekMatches,
  selectCurrentWeekMatchesLoading,
} from "../model/selectors";

interface CurrentWeekMatchesProps {}

export const CurrentWeekMatches: FC<CurrentWeekMatchesProps> = () => {
  const dispatch = useAppDispatch();

  const matches = useSelector(selectCurrentWeekMatches);
  const matchesLoading = useSelector(selectCurrentWeekMatchesLoading);

  return (
    <section className={classes.CurrentWeekMatches}>
      <Leagues onLeagueSelected={(id) => dispatch(getCurrentWeekMatches(id))} />
      {matchesLoading && <p>Loading...</p>}
      {matches &&
        (matches.length ? (
          <MatchesResults results={matches} />
        ) : (
          <p>O'yinlar yo'q</p>
        ))}
      {!matches && <p>Ligani tanlang</p>}
    </section>
  );
};
