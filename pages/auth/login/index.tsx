import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";
import { nextAuthOptions } from "pages/api/auth/[...nextauth]";
import { NextPageWithLayout } from "pages/_app";
import { FormEvent, ReactElement, useRef } from "react";

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
    })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
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
