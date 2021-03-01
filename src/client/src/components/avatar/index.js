import { Container } from "./styles";

const Avatar = (props) => {
  const { height, width, active, borderColor } = props;
  return (
    <Container
      height={height}
      width={width}
      active={active}
      borderColor={borderColor}
    ></Container>
  );
};

export default Avatar;
