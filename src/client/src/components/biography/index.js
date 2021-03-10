import { Wrapper, BiographyText, TextArea, MinCharText } from "./styles";

const BiographyInput = () => {
  return (
    <Wrapper>
      <BiographyText>Describe Yourself</BiographyText>
      <TextArea />
      <MinCharText>(Minimum 30 characters)</MinCharText>
    </Wrapper>
  );
};

export default BiographyInput;
