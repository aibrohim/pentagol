import { FC, ReactElement } from "react";

import localFont from "next/font/local";

import { classNames } from "@/shared/lib/classNames";

const Manrope = localFont({
  src: [
    {
      path: "../../fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

const Roboto = localFont({
  src: [
    {
      path: "../../fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

interface AppProps {
  children: ReactElement;
}

export const App: FC<AppProps> = ({ children }) => {
  return (
    <div className={classNames("App", {}, [Manrope.variable, Roboto.variable])}>
      {children}
    </div>
  );
};
