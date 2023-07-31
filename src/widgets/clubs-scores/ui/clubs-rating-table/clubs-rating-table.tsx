import { FC } from "react";

import { ClubScore } from "../../model/types/scores-schema";
import classes from "./clubs-rating-table.module.scss";

interface ClubsRatingTableProps {
  clubs: ClubScore[];
}

export const ClubsRatingTable: FC<ClubsRatingTableProps> = ({ clubs }) => {
  return (
    <table className={classes.ClubsRatingTable}>
      <tbody>
        {clubs.map((club) => (
          <tr className={classes.ClubRating} key={club.id}>
            <td>{club.id}</td>
            <td>
              <span className={classes.ClubName}>
                <img
                  src="/img/barcelona.png"
                  width={30}
                  height={30}
                  alt={club.name}
                />
                {club.name}
              </span>
            </td>
            <td>{club.gamesPlayed}</td>
            <td>{club.point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
