import { FC } from "react";

import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";

import { ThemeToggler } from "@/widgets/theme-toggler";
import { Container } from "@/shared/ui/container";

import classes from "./header.module.scss";

export const Header: FC = () => {
  const { data } = useSession();

  return (
    <header className={classes.Header}>
      <Container className={classes.Container}>
        <Link href={"/"}>
          <img src="/img/logo.png" alt="Logo" />
        </Link>

        {!data?.user && <button onClick={() => signIn()}>Sign In</button>}
        {data?.user && <button onClick={() => signOut()}>Sign out</button>}
        <ThemeToggler />
      </Container>
    </header>
  );
};
