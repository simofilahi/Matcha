import React from "react";
import { Login } from "src/components/pages";

const LoginContainer = () => {
  return (
    <>
      <Login>
        <Login.infoSection></Login.infoSection>
        <Login.formSection></Login.formSection>
      </Login>
    </>
  );
};

export default LoginContainer;
