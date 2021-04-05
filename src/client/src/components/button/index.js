import { CustomButton } from "./styles";
import { color } from "src/values";
const Button = (props) => {
  console.log(props);
  const { color, bgColor, height, fontSize, border, width, margin } = props;
  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      fontSize={fontSize}
      border={border}
      margin={margin}
    >
      {props.children}
    </CustomButton>
  );
};

export default Button;
