import { Wrapper, IconContainer, Input } from "./styles";
import { icon } from "src/values";
import Icon from "src/components/icon";

const Search = (props) => {
  const { height, width, placeholder, iconColor, iconSize } = props;
  return (
    <Wrapper height={height} width={width}>
      <Input placeholder={placeholder} value={"Khouribga"} />
      <IconContainer>
        <Icon className={icon.search} color={iconColor} size={iconSize} />
      </IconContainer>
    </Wrapper>
  );
};

export default Search;
