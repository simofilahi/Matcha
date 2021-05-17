import { Container, Wrapper } from "./styles";

const Modal = (props) => {
  const { open } = props;

  return (
    <Wrapper>
      <Container open={open}></Container>
    </Wrapper>
  );
};

export default Modal;
