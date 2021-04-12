import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import { useForm } from "src/hooks/utils";
const Formy = (props) => {
  console.log(props);
  // PROPS DESTRUCTION
  const { initialValues, validate } = props;

  // STATE MANAGMENT
  const [values, handlChange, touched, HandleFocus] = useForm(initialValues);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    console.log("hello\n");
  }, [values]);

  return (
    <Wrapper>
      {props.children({ values, handlChange, touched, HandleFocus })}
    </Wrapper>
  );
};

export default Formy;
