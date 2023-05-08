import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required!"),
  email: yup.string().email("Wrong email!").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});
