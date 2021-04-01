import { Wrapper, PlaceHolderText } from "./styles";

const Input = (props) => {
  const { height, width } = props;
  return (
    <Wrapper height={height} width={width}>
      {/* <PlaceHolderText>username</PlaceHolderText> */}
    </Wrapper>
  );
};

export default Input;
