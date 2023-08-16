import { Header } from "@/widgets/header";

import { useTheme } from "@/shared/config/theme";
import { classNames } from "@/shared/lib/classNames";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={classNames("", {}, [theme])}>
      <Header />
      <div className="Page">{children}</div>
    </div>
  );
};
