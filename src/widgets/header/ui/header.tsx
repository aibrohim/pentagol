import { FC } from "react";
import { ThemeToggler } from "@/widgets/theme-toggler";

import { Container } from "@/shared/ui/container";
import Logo from "@/shared/assets/img/logo.png";

import classes from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={classes.Header}>
      <Container className={classes.Container}>
        <img src={Logo} alt="" />
        <ThemeToggler />
      </Container>
    </header>
  );
};
