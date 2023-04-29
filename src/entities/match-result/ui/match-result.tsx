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
  return (
    <div className={classNames(classes.MatchResult, {}, [className])}>
      <article className={classes.MatchInfo}>
        <Club club={matchInfo.clubA} won />

        <div className={classes.Scores}>
          <span className={classNames("", { [classes.WonScore]: true })}>
            3
          </span>
          :
          <span className={classNames("", { [classes.WonScore]: false })}>
            0
          </span>
        </div>

        <Club club={matchInfo.clubB} align={Align.RIGHT} />
      </article>
      <time className={classes.MatchDateTime}>
        {normalizeDate(matchInfo.matchDateTime)}
      </time>
    </div>
  );
};
