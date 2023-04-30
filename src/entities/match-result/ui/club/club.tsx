import { classNames } from "@/shared/lib/classNames";
import { FC, HTMLAttributes } from "react";
import classes from "./club.module.scss";

import Barsa from "@/shared/assets/img/barcelona.png";

export enum Align {
  LEFT = "Left",
  RIGHT = "Right",
}

interface ClubProps extends HTMLAttributes<HTMLElement> {
  clubName: string;
  align?: Align;
  won?: boolean;
}

export const Club: FC<ClubProps> = ({ clubName, align = Align.LEFT, won }) => {
  return (
    <div
      className={classNames(classes.Club, { [classes.Won]: won }, [
        classes[align],
      ])}
    >
      <img
        className={classes.ClubImg}
        src={Barsa}
        alt={clubName}
        width={25}
        height={25}
      />
      <span>{clubName}</span>
    </div>
  );
};
