import { Wrapper } from "./styles";

const Input = (props) => {
  // DESTRUCTION
  const {
    height,
    width,
    margin_bottom,
    placeholder,
    type,
    id,
    name,
    value,
    touched,
    error,
  } = props;

  console.log(error);
  // UI
  return (
    <Wrapper
      type={type}
      id={id}
      name={name}
      value={value}
      height={height}
      width={width}
      margin_bottom={margin_bottom}
      placeholder={placeholder}
      touched={touched}
      error={error ? true : false}
    ></Wrapper>
  );
};

export default Input;
