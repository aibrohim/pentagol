import { FC } from "react";

import Link from "next/link";

import { ThemeToggler } from "@/widgets/theme-toggler";
import { Container } from "@/shared/ui/container";

import classes from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={classes.Header}>
      <Container className={classes.Container}>
        <Link href={"/"}>
          <img src="/img/logo.png" alt="Logo" />
        </Link>

        <ThemeToggler />
      </Container>
    </header>
  );
};
