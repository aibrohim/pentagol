import { FC } from "react";

import { BtnTheme, Button } from "@/shared/ui/button";

import classes from "./loadmore.module.scss";

interface LoadmoreBtnProps {
  dataCount: number;
  page: number;
  limit: number;
  onClick?: () => void;
}

export const Loadmore: FC<LoadmoreBtnProps> = ({
  dataCount,
  page,
  limit,
  onClick,
}) => {
  if (dataCount < page * limit) return null;

  return (
    <Button
      className={classes.LoadmoreBtn}
      onClick={onClick}
      theme={BtnTheme.SECONDARY}
    >
      Ko&apos;proq ko&apos;rish
    </Button>
  );
};
