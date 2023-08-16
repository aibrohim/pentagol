import { Form, Formik } from "formik";
import { FC } from "react";

import { BtnTheme, Button } from "@/shared/ui/button";

import { FormikInput } from "@/shared/ui/formik-input";
import { FormikFormField } from "@/shared/ui/formik-form-field";

import { SignUpSchema, signUpValidationSchema } from "../model/types";

import classes from "./sign-up-form.module.scss";

interface SignUpFormProps {
  onSubmit?: (values: SignUpSchema) => void;
}

const initialValues: SignUpSchema = {
  username: "",
  email: "",
  password: "",
};

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const handleFormSubmit = (values: SignUpSchema) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      className={classes.SignUpForm}
      validationSchema={signUpValidationSchema}
    >
      {() => (
        <Form>
          <FormikFormField name="username" label="Username">
            <FormikInput name="username" type="text" />
          </FormikFormField>
          <FormikFormField name="email" label="Email">
            <FormikInput name="email" type="mail" />
          </FormikFormField>
          <FormikFormField label="Password" name="password">
            <FormikInput name="password" type="password" />
          </FormikFormField>
          <Button theme={BtnTheme.PRIMARY} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
