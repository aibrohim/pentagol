import { FC } from "react";

import { MatchResult, MatchResultSchema } from "@/entities/match-result";

import classes from "./matches-results.module.scss";

interface MatchesResultsProps {
  results: MatchResultSchema[];
}

export const MatchesResults: FC<MatchesResultsProps> = ({ results }) => {
  return (
    <ul className={classes.MatchesResults}>
      {results.map((result: MatchResultSchema) => (
        <MatchResult
          key={result.id}
          className={classes.MatchResult}
          matchInfo={result}
        />
      ))}
    </ul>
  );
};
