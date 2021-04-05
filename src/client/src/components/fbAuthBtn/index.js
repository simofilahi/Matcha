import { FbButtonText, FbIconContainer } from "./styles";
import ButtonIcon from "src/components/buttonIcon";
import Icon from "src/components/icon";

const FbSignButton = (props) => {
  const {
    icon,
    text,
    iconSize,
    color,
    bgColor,
    height,
    width,
    iconColor,
    textBgColor,
  } = props;
  return (
    <ButtonIcon
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      // boxShadow={rgbaColor.}
    >
      <FbIconContainer>
        <Icon className={icon} size={iconSize} color={iconColor} />
      </FbIconContainer>

      <FbButtonText color={textBgColor}>{text}</FbButtonText>
    </ButtonIcon>
  );
};

export default FbSignButton;
