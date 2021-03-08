import React from "react";
import { Register } from "src/components/pages";

const RegisterContainer = () => {
  return (
    <>
      <Register>
        <Register.infoSection></Register.infoSection>
        <Register.formSection></Register.formSection>
      </Register>
    </>
  );
};

export default RegisterContainer;
