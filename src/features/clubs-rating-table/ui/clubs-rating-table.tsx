import { FC } from "react";
import classes from "./clubs-rating-table.module.scss";
import { ClubRating } from "@/entities/club-rating";
import { ClubRatingSchema } from "@/entities/club-rating/model/types";

interface ClubsRatingTableProps {
  clubs: ClubRatingSchema[];
}

export const ClubsRatingTable: FC<ClubsRatingTableProps> = ({ clubs }) => {
  return (
    <table className={classes.ClubsRatingTable}>
      <thead>
        <th>№</th>
        <th>Команда</th>
        <th>И</th>
        <th>О</th>
      </thead>
      <tbody>
        {clubs.map((club) => (
          <ClubRating key={club.clubId} clubInfo={club} />
        ))}
      </tbody>
    </table>
  );
};
