import { AppProps } from "next/app";
import localFont from "next/font/local";

import NextProgress from "next-progress";

import { App } from "@/app/app";
import { wrapper } from "@/app/providers/store";
import { ThemeProvider } from "@/app/providers/theme";

import "../styles/main.scss";

const Manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

const Roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

interface CustomPageProps {}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  return (
    <ThemeProvider>
      <NextProgress height={3} delay={300} color="var(--green-3)" />
      <App fonts={[Manrope, Roboto]}>
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
