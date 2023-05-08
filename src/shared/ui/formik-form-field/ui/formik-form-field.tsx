import { FC, ReactElement } from "react";

import { Field, FieldProps } from "formik";

import { FormField } from "../../form-field";

interface FormikFormFieldProps {
  name: string;
  label?: string;
  children: ReactElement;
}

export const FormikFormField: FC<FormikFormFieldProps> = ({
  name,
  label,
  children,
}) => {
  return (
    <Field name={name}>
      {({ meta }: FieldProps) => (
        <FormField
          label={label}
          error={meta.touched && meta.error ? meta.error : ""}
        >
          {children}
        </FormField>
      )}
    </Field>
  );
};
