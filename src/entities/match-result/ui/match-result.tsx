import { FC, HTMLAttributes } from "react";

import { classNames } from "@/shared/lib/classNames";

import { MatchResultSchema } from "../model/types";

import classes from "./match-result.module.scss";
import { Align, Club } from "./club";
import { normalizeDate } from "@/shared/lib/normalize-date";

interface MatchResultProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  matchInfo: MatchResultSchema;
}

export const MatchResult: FC<MatchResultProps> = ({ className, matchInfo }) => {
  const isClubAWon = matchInfo.clubAScore > matchInfo.clubBScore;
  const isClubBWon = matchInfo.clubAScore < matchInfo.clubBScore;

  return (
    <div className={classNames(classes.MatchResult, {}, [className])}>
      <article className={classes.MatchInfo}>
        <Club clubName={matchInfo.clubAName} won={isClubAWon} />

        <div className={classes.Scores}>
          <span className={classNames("", { [classes.WonScore]: isClubAWon })}>
            {matchInfo.clubAScore}
          </span>
          :
          <span className={classNames("", { [classes.WonScore]: isClubBWon })}>
            {matchInfo.clubBScore}
          </span>
        </div>

        <Club
          clubName={matchInfo.clubBName}
          align={Align.RIGHT}
          won={isClubBWon}
        />
      </article>
      <time className={classes.MatchDateTime}>
        {normalizeDate(matchInfo.matchDate)}
      </time>
    </div>
  );
};
