import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import classes from "./select.module.scss";
import { classNames } from "@/shared/lib/classNames";

interface Option extends OptionHTMLAttributes<HTMLOptionElement> {
  value: number | string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export const Select: FC<SelectProps> = ({ options, className, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <select className={classNames(classes.Select, {}, [className])} {...props}>
      {options.map(({ value, label, ...props }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <option key={value || label} value={value} {...props}>
          {label}
        </option>
      ))}
    </select>
  );
};
