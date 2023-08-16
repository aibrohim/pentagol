import { FC, ReactElement } from "react";

import { createFontsClasses } from "./lib/create-fonts-classes";
import { classNames } from "@/shared/lib/classNames";

interface AppProps {
  children: ReactElement;
}

export const App: FC<AppProps> = ({ children }) => {
  return (
    <div className={classNames("App", {}, createFontsClasses())}>
      {children}
    </div>
  );
};
