import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";
import { Input } from "../../input";
import classes from "./formik-input.module.scss";

interface FormikInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const FormikInput: FC<FormikInputProps> = ({ name, ...props }) => {
  const [field] = useField(name);

  return <Input className={classes.FormikInput} {...field} {...props} />;
};
