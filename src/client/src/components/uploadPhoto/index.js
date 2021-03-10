import { Container, Wrapper, UploadText, CustomText } from "./styles";

const UploadPhoto = () => {
  return (
    <Wrapper>
      <Container>
        <UploadText>
          Drag and Drop here or <CustomText>upload</CustomText>
        </UploadText>
      </Container>
    </Wrapper>
  );
};

// //
// Upload your best photos
// Adding pictures is a great way to show off your personality

export default UploadPhoto;
