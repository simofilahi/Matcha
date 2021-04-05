import { color } from "src/values";
import { ButtonIC } from "./styles";

const ButtonIcon = (props) => {
  const { color, bgColor, height, border, width } = props;
  return (
    <ButtonIC
      border={border}
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
    >
      {props.children}
    </ButtonIC>
  );
};

export default ButtonIcon;
