import { FC, HTMLAttributes } from "react";
import classes from "./club.module.scss";
import { ClubSchema } from "../../model/types";
import { classNames } from "@/shared/lib/classNames";

export enum Align {
  LEFT = "Left",
  RIGHT = "Right",
}

interface ClubProps extends HTMLAttributes<HTMLElement> {
  club: ClubSchema;
  align?: Align;
  won?: boolean;
}

export const Club: FC<ClubProps> = ({ club, align = Align.LEFT, won }) => {
  return (
    <div
      className={classNames(classes.Club, { [classes.Won]: won }, [
        classes[align],
      ])}
    >
      <img
        className={classes.ClubImg}
        src={club.img}
        alt={club.name}
        width={25}
        height={25}
      />
      <span>{club.name}</span>
    </div>
  );
};
