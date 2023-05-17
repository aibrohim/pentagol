import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/_app";

import { SignUpForm } from "@/widgets/sign-up-form";

import { Container } from "@/shared/ui/container";

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
