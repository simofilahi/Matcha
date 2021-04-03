import { CustomButton } from "./styles";
import { color } from "src/values";
const Button = (props) => {
  console.log(props);
  const { color, bgColor, height, fontSize, border } = props;
  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      height={height}
      fontSize={fontSize}
      border={border}
    >
      {props.children}
    </CustomButton>
  );
};

export default Button;
