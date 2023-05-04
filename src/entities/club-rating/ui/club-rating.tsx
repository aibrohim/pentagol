import { FC } from "react";
import classes from "./club-rating.module.scss";
import { ClubRatingSchema } from "../model/types";

interface ClubRatingProps {
  clubInfo: ClubRatingSchema;
}

export const ClubRating: FC<ClubRatingProps> = ({ clubInfo }) => {
  return (
    <tr className={classes.ClubRating}>
      <td>{clubInfo.id}</td>
      <td>
        <span className={classes.ClubName}>
          <img
            src="/img/barcelona.png"
            width={30}
            height={30}
            alt={clubInfo.name}
          />
          {clubInfo.name}
        </span>
      </td>
      <td>{clubInfo.gamesPlayed}</td>
      <td>{clubInfo.point}</td>
    </tr>
  );
};
