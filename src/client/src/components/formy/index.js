import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "./styles";
import { useForm } from "src/hooks/utils";

const Formy = (props) => {
  // PROPS DESTRUCTION
  const { initialValues, schemaValidation } = props;

  // STATE MANAGMENT
  const [values, handlChange, touched, HandleFocus, errors] = useForm(
    initialValues,
    schemaValidation
  );

  // UI
  return (
    <Wrapper>
      {props.children({ values, handlChange, touched, HandleFocus, errors })}
    </Wrapper>
  );
};

export default Formy;
