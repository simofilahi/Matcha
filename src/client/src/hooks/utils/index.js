import React, { useState, createContext, useEffect } from "react";

const useForm = (initState) => {
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
    setError,
  ];
};

const context = createContext();

export { context, useForm };
