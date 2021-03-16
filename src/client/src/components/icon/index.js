import { color } from "src/values";
import { IC } from "./styles";

const Icon = (props) => {
  const { className, size, color } = props;

  return <IC className={className} size={size} color={color} />;
};

export default Icon;
