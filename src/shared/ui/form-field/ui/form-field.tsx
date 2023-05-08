import { classNames } from "@/shared/lib/classNames";
import { FC, ReactElement } from "react";
import classes from "./form-field.module.scss";

export interface FormFieldProps {
  label?: string;
  error?: string;
  children: ReactElement;
}

export const FormField: FC<FormFieldProps> = ({
  label = "",
  error = "",
  children,
}) => {
  return (
    <div className={classes.FormField}>
      <label>
        {label && <span className={classes.Label}>{label}</span>}
        <div className={classes.FormElement}>{children}</div>
      </label>
      <span className={classNames(classes.Error, { [classes.Visible]: error })}>
        {error}
      </span>
    </div>
  );
};
