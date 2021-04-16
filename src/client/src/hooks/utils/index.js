import React, { useState, createContext, useEffect } from "react";

const useForm = (initState, schemaValidation) => {
  const [values, setValue] = useState(initState);
  const [errors, setError] = useState(initState);
  const [touched, setTouched] = useState({});

  return [
    values,
    (e) => {
      setValue((currValues) => {
        return {
          ...currValues,
          [e.target.name]: e.target.value,
        };
      });
      setError((prevState) => {
        return {
          ...prevState,
          [e.target.name]: schemaValidation({
            [e.target.name]: e.target.value,
          }),
        };
      });
      console.log(errors);
    },
    touched,
    (e) => {
      setTouched((prevState) => {
        return {
          ...prevState,
          [e.target.name]: true,
        };
      });
    },
    errors,
  ];
};

const context = createContext();

export { context, useForm };
