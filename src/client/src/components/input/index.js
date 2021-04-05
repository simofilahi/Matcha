import { Wrapper, PlaceHolderText } from "./styles";

const Input = (props) => {
  const { height, width, margin_bottom, placeholder } = props;
  return (
    <Wrapper
      height={height}
      width={width}
      margin_bottom={margin_bottom}
      placeholder={placeholder}
    ></Wrapper>
  );
};

export default Input;
