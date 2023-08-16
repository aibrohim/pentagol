import { FC, HTMLAttributes } from "react";

import { Align, Club } from "@/entities/club";

import { classNames } from "@/shared/lib/classNames";
import { normalizeDate } from "@/shared/lib/normalize-date";

import { MatchResultSchema } from "../model/types";

import classes from "./match-result.module.scss";

interface MatchResultProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  matchInfo: MatchResultSchema;
}

export const MatchResult: FC<MatchResultProps> = ({ className, matchInfo }) => {
  const isClubAWon = matchInfo.clubA.score > matchInfo.clubB.score;
  const isClubBWon = matchInfo.clubA.score < matchInfo.clubB.score;

  return (
    <div className={classNames(classes.MatchResult, {}, [className])}>
      <article className={classes.MatchInfo}>
        <Club clubName={matchInfo.clubA.name} won={isClubAWon} />

        <div className={classes.Scores}>
          <span className={classNames("", { [classes.WonScore]: isClubAWon })}>
            {matchInfo.clubA.score}
          </span>
          :
          <span className={classNames("", { [classes.WonScore]: isClubBWon })}>
            {matchInfo.clubB.score}
          </span>
        </div>

        <Club
          clubName={matchInfo.clubB.name}
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
