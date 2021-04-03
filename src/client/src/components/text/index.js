import { CustomText } from "./styles";

const Text = (props) => {
  const { color, fontSize } = props;
  return (
    <CustomText color={color} fontSize={fontSize}>
      {props.children}
    </CustomText>
  );
};

export default Text;
