import UploadPhoto from "src/components/uploadPhoto";
import Gendar from "src/components/gendar";
import BiographyInput from "src/components/biography";
import Input from "src/components/input";
import Tags from "src/components/tags";
import BirthDay from "src/components/birthday";
import AppTitle from "src/components/appTitle";
import {
  Wrapper,
  Box,
  BodyContainer,
  AppTitleContainer,
  FooterContainer,
} from "./styles";
import Footer from "src/components/footer";

const ProfileInfosPage = () => {
  return (
    <Wrapper>
      <AppTitleContainer>
        <AppTitle />
      </AppTitleContainer>
      <BodyContainer>
        <Box />
        <BirthDay />
        <Box />
        <Tags />
        <Box />
        <Input />
        <Box />
        <BiographyInput />
        <Box />
        <Gendar />
        <Box />
        <UploadPhoto />
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
};

export default ProfileInfosPage;
