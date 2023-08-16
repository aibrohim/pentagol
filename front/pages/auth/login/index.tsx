import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";

import { FormEvent, ReactElement, useRef } from "react";
import { nextAuthOptions } from "../../api/auth/[...nextauth]";
import { NextPageWithLayout } from "../../_app";

const Login: NextPageWithLayout = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const loginData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    signIn("credentials", {
      ...loginData,
      redirect: false,
    });
    // .then(() => {})
    // .catch(() => {});
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(
    context.req,
    context.res,
    nextAuthOptions
  );

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

export default Login;
