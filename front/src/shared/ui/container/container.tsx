import { HTMLAttributes, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames";

import classes from "./container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(classes.Container, {}, [className])} {...props}>
      {children}
    </div>
  );
};
