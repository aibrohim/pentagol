import { BtnTheme, Button } from "@/shared/ui/button";
import { FC } from "react";
import classes from "./loadmore-btn.module.scss";

interface LoadmoreBtnProps {
  onClick?: () => void;
}

export const LoadmoreBtn: FC<LoadmoreBtnProps> = ({ onClick }) => {
  return (
    <Button
      className={classes.LoadmoreBtn}
      onClick={onClick}
      theme={BtnTheme.SECONDARY}
    >
      Ko'proq ko'rish
    </Button>
  );
};
