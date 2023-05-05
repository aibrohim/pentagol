import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";

import NextProgress from "next-progress";

import { wrapper } from "@/app/providers/store";
import { ThemeProvider } from "@/app/providers/theme";
import { Theme } from "@/shared/config/theme";

import "../styles/main.scss";
import { Layout } from "@/app/layout";
import { App } from "@/app/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  theme?: Theme;
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider>
      <NextProgress height={3} delay={300} color="var(--green-3)" />
      <App>
        {Component.getLayout ? (
          <Component {...pageProps} />
        ) : (
          <Layout>{<Component {...pageProps} />}</Layout>
        )}
      </App>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
