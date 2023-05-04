import { FC, ReactNode } from "react";

import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import { Header } from "@/widgets/header";

import { useTheme } from "@/shared/config/theme";
import { classNames } from "@/shared/lib/classNames";

interface AppProps {
  fonts: NextFontWithVariable[];
  children: ReactNode;
}

export const App: FC<AppProps> = ({ fonts, children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("App", {}, [
        theme,
        ...fonts.map((font) => font.variable),
      ])}
    >
      <Header />
      <div className="Page">{children}</div>
    </div>
  );
};
