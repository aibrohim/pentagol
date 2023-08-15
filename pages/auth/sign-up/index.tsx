import { ReactElement } from "react";

import { SignUpForm } from "@/widgets/sign-up-form";

import { Container } from "@/shared/ui/container";

import { NextPageWithLayout } from "../../_app";

const SignUp: NextPageWithLayout = () => {
  return (
    <>
      <h1>Sign Up</h1>

      <Container>
        <SignUpForm />
      </Container>
    </>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default SignUp;
