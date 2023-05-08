import { classNames } from "@/shared/lib/classNames";
import { FC, InputHTMLAttributes } from "react";
import classes from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

export const Input: FC<InputProps> = ({
  name = "",
  className = "",
  ...props
}) => {
  return (
    <input
      className={classNames(classes.Input, {}, [className])}
      name={name}
      {...props}
    />
  );
};
