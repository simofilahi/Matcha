import React, { useEffect, useRef } from "react";
import { Wrapper } from "./styles";
import { useForm } from "src/hooks/utils";
const Formy = (props) => {
  // PROPS DESTRUCTION
  const { initialValues, validationSchema } = props;

  // STATE MANAGMENT
  const [
    values,
    handlChange,
    touched,
    HandleFocus,
    errors,
    handleError,
  ] = useForm(initialValues);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const schema = validationSchema(values);
      handleError((prevState) => {
        for (const [key, value] of Object.entries(schema)) {
          if (value.hasOwnProperty("error")) {
            prevState[`${key.substr(1, key.length)}`] = value["error"];
          }
        }
        console.log(prevState);
        return prevState;
      });
    } else isMounted.current = true;
  }, [values]);

  return (
    <Wrapper>
      {props.children({ values, handlChange, touched, HandleFocus, errors })}
    </Wrapper>
  );
};

export default Formy;
