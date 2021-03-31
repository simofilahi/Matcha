import { CustomButton } from "./styles";
import { color } from "src/values";
const Button = (props) => {
  console.log(props);
  const { color, bgColor, height } = props;
  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      height={height}
    ></CustomButton>
  );
};

export default Button;
