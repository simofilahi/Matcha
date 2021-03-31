import { color } from "src/values";
import { ButtonIC } from "./styles";

const ButtonIcon = (props) => {
  const { color, bgColor, height } = props;
  return (
    <ButtonIC color={color} bgColor={bgColor} height={height}>
      {props.children}
    </ButtonIC>
  );
};

export default ButtonIcon;
