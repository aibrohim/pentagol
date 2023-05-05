import { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <h1>Login</h1>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Login;
