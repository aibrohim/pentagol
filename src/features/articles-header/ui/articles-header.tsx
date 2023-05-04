import { FC, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames";

import classes from "./articles-header.module.scss";

interface ArticlesHeaderProps {
  className?: string;
  children: ReactNode | string;
}

export const ArticlesHeader: FC<ArticlesHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <h2 className={classNames(classes.ArticlesHeader, {}, [className])}>
      {children}
    </h2>
  );
};
