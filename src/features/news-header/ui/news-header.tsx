import { classNames } from "@/shared/lib/classNames";
import { FC, ReactNode } from "react";
import classes from "./news-header.module.scss";

interface NewsHeaderProps {
  className?: string;
  children: ReactNode | string;
}

export const NewsHeader: FC<NewsHeaderProps> = ({ className, children }) => {
  return (
    <h2 className={classNames(classes.NewsHeader, {}, [className])}>
      {children}
    </h2>
  );
};
