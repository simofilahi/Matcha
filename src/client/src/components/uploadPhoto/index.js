import {
  Container,
  Wrapper,
  UploadText,
  CustomText,
  PhotosList,
  Photo,
  FlexContainer,
} from "./styles";

const UploadPhoto = () => {
  return (
    <FlexContainer>
      <Wrapper>
        <Container>
          <UploadText>
            Drag and Drop here or <CustomText>upload</CustomText>
          </UploadText>
        </Container>
      </Wrapper>
      <PhotosList>
        {[0, 1, 2, 3, 4].map((item) => (
          <Photo />
        ))}
      </PhotosList>
    </FlexContainer>
  );
};

// //
// Upload your best photos
// Adding pictures is a great way to show off your personality

export default UploadPhoto;
