import { ReactElement, ReactNode } from "react";

import { Provider } from "react-redux";

import { NextPage } from "next";
import { AppProps } from "next/app";

import NextProgress from "next-progress";

import { SessionProvider } from "next-auth/react";

import { Layout } from "@/global/layout";
import { App } from "@/global/app";
import { wrapper } from "@/global/providers/store";
import { ThemeProvider } from "@/global/providers/theme";

import { Theme } from "@/shared/config/theme";

import "../../styles/main.scss";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  theme?: Theme;
  Component: NextPageWithLayout;
}

function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <SessionProvider session={props.pageProps.session}>
      <Provider store={store}>
        <ThemeProvider>
          <NextProgress height={3} delay={300} color="var(--green-3)" />
          <App>
            {Component.getLayout ? (
              <Component {...props.pageProps} />
            ) : (
              <Layout>{<Component {...props.pageProps} />}</Layout>
            )}
          </App>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
