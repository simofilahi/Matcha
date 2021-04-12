import { CustomButton } from "./styles";
import { color } from "src/values";
const Button = (props) => {
  const {
    padding,
    color,
    bgColor,
    height,
    fontSize,
    border,
    width,
    margin,
  } = props;

  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      fontSize={fontSize}
      border={border}
      margin={margin}
      padding={padding}
    >
      {props.children}
    </CustomButton>
  );
};

export default Button;
