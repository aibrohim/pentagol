import { FC } from "react";

import { useTheme } from "@/shared/config/theme";
import { ReactComponent as Sun } from "@/shared/assets/icons/sun.svg";
import { Button } from "@/shared/ui/button";

import classes from "./theme-toggler.module.scss";

export const ThemeToggler: FC = () => {
  const { toggleTheme } = useTheme();

  const handleThemeTogglerClick = () => toggleTheme();

  return (
    <Button
      className={classes.Toggler}
      onClick={handleThemeTogglerClick}
      icon={<Sun />}
    />
  );
};
