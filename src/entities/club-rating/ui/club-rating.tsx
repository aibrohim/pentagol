import { FC } from "react";
import classes from "./club-rating.module.scss";
import { ClubRatingSchema } from "../model/types";

interface ClubRatingProps {
  clubInfo: ClubRatingSchema;
}

export const ClubRating: FC<ClubRatingProps> = ({ clubInfo }) => {
  return (
    <tr className={classes.ClubRating}>
      <td>{clubInfo.clubId}</td>
      <td>
        <span className={classes.ClubName}>
          <img src={clubInfo.img} width={30} height={30} alt={clubInfo.name} />
          {clubInfo.name}
        </span>
      </td>
      <td>{clubInfo.totalScore}</td>
      <td>{clubInfo.differences}</td>
    </tr>
  );
};
