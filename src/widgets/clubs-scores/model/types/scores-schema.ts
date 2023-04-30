import { ClubRatingSchema } from "@/entities/club-rating/model/types";

export interface ScoresSchema {
  clubs: ClubRatingSchema[] | null;
  loading: boolean;
}
